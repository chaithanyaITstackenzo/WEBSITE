const { pool } = require('../config/database');
const { generateRegistrationId } = require('../utils/generateRegistrationId');

const WorkshopRegistrationModel = {
  /**
   * Create a new workshop registration.
   * Uses a two-step insert+update to generate a sequential REG ID based on DB id.
   */
  create: async (data) => {
    const {
      name, email, phone, college, stream, year,
      batch, experience, whatsappOptin, message,
      workshopId, source
    } = data;

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Step 1: Insert without reg_id (will be NULL initially)
      const insertResult = await client.query(
        `INSERT INTO workshop_registrations
          (name, email, phone, college, stream, year, batch, experience,
           whatsapp_optin, message, workshop_id, source)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
         RETURNING id`,
        [name, email, phone, college || null, stream || null, year || null,
         batch || null, experience || null, whatsappOptin || false,
         message || null, workshopId || 'robotics', source || 'website']
      );

      const dbId = insertResult.rows[0].id;

      // Step 2: Generate and set the reg_id
      const regId = generateRegistrationId(dbId);
      await client.query(
        'UPDATE workshop_registrations SET reg_id = $1 WHERE id = $2',
        [regId, dbId]
      );

      await client.query('COMMIT');
      return { id: dbId, regId };
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error creating workshop registration:', error);
      throw error;
    } finally {
      client.release();
    }
  },

  /**
   * Check for duplicate registration by email OR phone.
   */
  findDuplicate: async (email, phone) => {
    try {
      const result = await pool.query(
        `SELECT id, reg_id, name, email, phone, batch, created_at
         FROM workshop_registrations
         WHERE email = $1 OR phone = $2
         ORDER BY created_at ASC
         LIMIT 1`,
        [email, phone]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error checking duplicate workshop registration:', error);
      throw error;
    }
  },

  /**
   * Get registration count stats for a workshop.
   */
  getStats: async (workshopId) => {
    try {
      let query = 'SELECT COUNT(*) as count FROM workshop_registrations WHERE status != $1';
      const params = ['cancelled'];

      if (workshopId) {
        query += ' AND workshop_id = $2';
        params.push(workshopId);
      }

      const result = await pool.query(query, params);
      return { count: parseInt(result.rows[0].count, 10) };
    } catch (error) {
      console.error('Error getting workshop stats:', error);
      throw error;
    }
  },

  /**
   * Get all registrations (admin).
   */
  getAll: async (workshopId) => {
    try {
      let query = 'SELECT * FROM workshop_registrations';
      const params = [];
      if (workshopId) {
        query += ' WHERE workshop_id = $1';
        params.push(workshopId);
      }
      query += ' ORDER BY created_at DESC';
      const result = await pool.query(query, params);
      return result.rows;
    } catch (error) {
      console.error('Error getting all workshop registrations:', error);
      throw error;
    }
  },

  /**
   * Get a registration by reg_id.
   */
  getByRegId: async (regId) => {
    try {
      const result = await pool.query(
        'SELECT * FROM workshop_registrations WHERE reg_id = $1',
        [regId]
      );
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error getting workshop registration by reg_id:', error);
      throw error;
    }
  },

  /**
   * Update registration status.
   */
  updateStatus: async (id, status) => {
    try {
      const result = await pool.query(
        'UPDATE workshop_registrations SET status = $1, updated_at = NOW() WHERE id = $2',
        [status, id]
      );
      return result.rowCount > 0;
    } catch (error) {
      console.error('Error updating workshop registration status:', error);
      throw error;
    }
  }
};

module.exports = WorkshopRegistrationModel;
