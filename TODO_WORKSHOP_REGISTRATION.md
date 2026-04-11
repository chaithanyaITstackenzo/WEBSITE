# Workshop Registration Processing Task

## Task Context
Process this specific robotics workshop registration JSON:
```json
{
  "fullname": "sujithkonduru", 
  "email": "kondurusujith2203@gmail.com",
  "phone": "6281704664",
  "education_level": "10th",
  "collegename": "sankar english medium school",
  "stream": "SSC General",
  "year_of_study": "",
  "workshop_id": "robotics",
  "batch_preference": "Batch A – Morning (9:00 AM – 1:00 PM)",
  "has_experience": false,
  "experience_description": null,
  "interest_reason": "",
  "whatsapp_optin": true,
  "registration_source": "website",
  "registration_date": "2026-04-10T18:42:06.061Z"
}
```

## Progress
- [x] Analyzed files (controller, model, frontend, routes, validation)
- [x] Identified field mismatch bug
- [x] Got plan approval

## TODO Steps
- [ ] Step 1: Fix field mapping in `backend/src/controllers/enrollmentController.js`
- [ ] Step 2: Make `year` optional in validation for 10th std (`backend/src/middleware/validation.js`)
- [ ] Step 3: Start backend server (`node server.js`)
- [ ] Step 4: Submit mapped data via curl POST to /api/enrollments/workshop/register
- [ ] Step 5: Verify registration success, get regId, check DB/emails
- [ ] Step 6: Generate QR code for regId (`backend/src/utils/generate-qr.js`)
- [ ] Step 7: Test frontend success page with regId
- [ ] Step 8: Complete task

## Mapped Payload for Step 4
```json
{
  "name": "sujithkonduru",
  "email": "kondurusujith2203@gmail.com",
  "phone": "6281704664",
  "college": "sankar english medium school",
  "stream": "SSC General",
  "year": "",
  "batch": "Batch A – Morning (9:00 AM – 1:00 PM)",
  "experience": "no",
  "whatsappOptin": true,
  "message": "",
  "workshopId": "robotics",
  "source": "website"
}
