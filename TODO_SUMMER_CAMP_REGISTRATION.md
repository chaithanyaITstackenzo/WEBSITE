# Summer Camp Registration Frontend Updates

## Status: 🔄 In Progress

### Plan Breakdown:
- [ ] Update WorkshopRegister.jsx form fields, schema, API endpoint, success handling
- [ ] Update WorkshopRegistrationModal.jsx if used
- [ ] Test form submission to Vercel backend
- [ ] Verify email sending and WhatsApp link display
- [ ] Update page styling/header for Summer Camp theme

### Target Backend:
```
POST https://summer-camp-registration-form.vercel.app/add_data
Fields: StudentName, email, CollegeName, Class, ParentName, ParentNumber, StudentNumber, Location, WhatsappNumber
Required: StudentName, CollegeName, Class, ParentName, Location, WhatsappNumber, ParentNumber
Response: {message:"successfully added details", whatsappLink:...}
Error: {message:"insufficient data"}
```

### Field Mapping:
| Frontend Form | Backend Field |
|---------------|---------------|
| Student Name  | StudentName  |
| Email         | email        |
| College Name  | CollegeName  |
| Class         | Class        |
| Parent Name   | ParentName   |
| Parent Phone  | ParentNumber |
| Student Phone | StudentNumber|
| Location      | Location     |
| WhatsApp No.  | WhatsappNumber|

## Next Step: Update WorkshopRegister.jsx
