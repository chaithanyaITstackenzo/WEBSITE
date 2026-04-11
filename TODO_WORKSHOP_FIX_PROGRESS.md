# Workshop Registration Fix - Progress Tracking

## Plan Steps:
- [x] 1. Verify backend server running + DB init (server.js calls initDatabase() ✓)
- [ ] 2. Update WorkshopRegister.jsx: Change to local API + field mapping
- [ ] 3. Map fields: StudentName→name, CollegeName→college, Class→year, add stream/batch/experience
- [ ] 4. Update success handling for local response (regId)
- [ ] 5. Test form submission
- [ ] 6. Update validation messages (minor)
- [ ] 7. Make phone nullable in DB (if needed)
- [x] 8. Diagnosis complete - external API mismatch confirmed

## Backend Endpoint:
```
POST http://localhost:3000/api/enrollments/workshop/register
Expected: {name, email, phone, college, stream, year, batch, experience...}
```

## Current Status: Starting implementation...
