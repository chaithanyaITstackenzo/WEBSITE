# Workshop Registration Completion Tracker
**Status:** In Progress | Approved Plan

## Steps from Approved Plan (Execute in order):

### Phase 1 Completion
- [x] 1. Client deps already installed/used
- [x] 2. `client/src/workshops.jsx` link already exists
- [x] 3. `client/src/data/workshopsData.json` Sri Venkateshwara details exist

Phase 1: ✅ COMPLETE

### Payload & Frontend Fix
- [ ] 4. Edit `client/src/WorkshopRegister.jsx` - Fix payload field mapping (name, college, year, etc.)

### Phase 2 Backend
- [ ] 5. Create `backend/src/utils/generateRegistrationId.js`
- [ ] 6. Update `backend/src/models/enrollmentModel.js` - Add workshop fields/methods (createWorkshop, checkDuplicate, getStats)
- [ ] 7. Update `backend/src/config/initDatabase.js` - Add workshop_enrollments table
- [ ] 8. Update `backend/src/controllers/enrollmentController.js` - Add workshopRegister(), workshopStats()
- [ ] 9. Update `backend/src/routes/enrollmentRoutes.js` - Add POST /workshop/register, GET /workshop/stats

### Phase 3 & Testing
- [ ] 10. Verify/create `client/src/WorkshopSuccess.jsx`, `client/src/WorkshopAlreadyRegistered.jsx`
- [ ] 11. Restart server `node server.js`
- [ ] 12. E2E test: Form submit → API → success/duplicate → DB check
- [ ] 13. Update all TODO.md files with [x] checkboxes & progress
- [ ] 14. Mobile/QR testing

**Next Step:** Execute step 1 (deps check/install)
