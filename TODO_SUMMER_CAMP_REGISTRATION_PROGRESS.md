# Summer Camp Registration Frontend Updates (In Progress)

## Plan Status
- [x] Update WorkshopRegister.jsx form fields, schema, API endpoint, success handling
- [ ] Update WorkshopRegistrationModal.jsx if used
- [ ] Test form submission to Vercel backend
- [ ] Verify email sending and WhatsApp link display
- [ ] Update page styling/header for Summer Camp theme

## Details
**API:** `POST https://summer-camp-registration-form.vercel.app/add_data`
**Fields:** StudentName, email, CollegeName, Class, ParentName, ParentNumber, StudentNumber, Location, WhatsappNumber
**Required:** StudentName, CollegeName, Class, ParentName, Location, WhatsappNumber, ParentNumber
**Response:** `{message:"successfully added details", whatsappLink:...}`
**Error:** `{message:"insufficient data"}`
