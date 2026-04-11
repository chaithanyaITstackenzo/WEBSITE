/**
 * Generates a unique registration ID in format: REG-YYYYMMDD-XXX
 * @param {number} dbId - The auto-incremented DB row id
 * @returns {string} e.g. "REG-20260410-007"
 */
const generateRegistrationId = (dbId) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateStr = `${year}${month}${day}`;
  const seq = String(dbId).padStart(3, '0');
  return `REG-${dateStr}-${seq}`;
};

module.exports = { generateRegistrationId };
