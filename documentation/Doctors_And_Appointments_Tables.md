# Be10X HealthCare - Doctors Database

## Sheet Name: Doctors

| Doctor_ID | Doctor_Name | Specialization | Experience_Years | Qualification | Available_Days | Morning_Slots | Evening_Slots | Contact_Number | Email | Consultation_Fee | Room_Number |
|-----------|-------------|----------------|------------------|---------------|----------------|---------------|---------------|----------------|-------|------------------|-------------|
| DOC001 | Dr. Rajesh Sharma | Cardiologist | 15 | MBBS MD Cardiology | Mon,Wed,Fri | 9:00 AM - 1:00 PM | 3:00 PM - 6:00 PM | 9876543210 | rajesh.sharma@be10xhealthcare.com | 1500 | 201 |
| DOC002 | Dr. Priya Patel | Neurologist | 12 | MBBS MD Neurology | Tue,Thu,Sat | 10:00 AM - 2:00 PM | 4:00 PM - 7:00 PM | 9876543211 | priya.patel@be10xhealthcare.com | 1200 | 305 |
| DOC003 | Dr. Amit Kumar | General Physician | 8 | MBBS | Mon-Sat | 9:00 AM - 1:00 PM | 3:00 PM - 7:00 PM | 9876543212 | amit.kumar@be10xhealthcare.com | 500 | 102 |
| DOC004 | Dr. Sneha Singh | Orthopedic | 10 | MBBS MS Orthopedics | Mon,Wed,Fri | 9:00 AM - 12:00 PM | 2:00 PM - 5:00 PM | 9876543213 | sneha.singh@be10xhealthcare.com | 1000 | 408 |
| DOC005 | Dr. Vikram Mehta | Dermatologist | 7 | MBBS MD Dermatology | Tue,Thu,Sat | 10:00 AM - 1:00 PM | 4:00 PM - 6:00 PM | 9876543214 | vikram.mehta@be10xhealthcare.com | 800 | 512 |
| DOC006 | Dr. Anjali Verma | Ophthalmologist | 14 | MBBS MS Ophthalmology | Mon,Wed,Fri | 9:00 AM - 1:00 PM | 3:00 PM - 6:00 PM | 9876543215 | anjali.verma@be10xhealthcare.com | 900 | 215 |
| DOC007 | Dr. Rahul Gupta | Gastroenterologist | 11 | MBBS MD Gastroenterology | Tue,Thu,Sat | 10:00 AM - 2:00 PM | 4:00 PM - 7:00 PM | 9876543216 | rahul.gupta@be10xhealthcare.com | 1100 | 320 |
| DOC008 | Dr. Kavita Reddy | Endocrinologist | 9 | MBBS MD Endocrinology | Mon,Wed,Fri | 9:00 AM - 1:00 PM | 3:00 PM - 6:00 PM | 9876543217 | kavita.reddy@be10xhealthcare.com | 1000 | 418 |
| DOC009 | Dr. Sanjay Joshi | Pulmonologist | 13 | MBBS MD Pulmonology | Tue,Thu,Sat | 10:00 AM - 2:00 PM | 4:00 PM - 7:00 PM | 9876543218 | sanjay.joshi@be10xhealthcare.com | 1200 | 225 |
| DOC010 | Dr. Neha Kapoor | Pediatrician | 6 | MBBS MD Pediatrics | Mon-Sat | 9:00 AM - 1:00 PM | 3:00 PM - 7:00 PM | 9876543219 | neha.kapoor@be10xhealthcare.com | 700 | 110 |
| DOC011 | Dr. Arjun Nair | Psychiatrist | 10 | MBBS MD Psychiatry | Mon,Wed,Fri | 10:00 AM - 2:00 PM | 4:00 PM - 7:00 PM | 9876543220 | arjun.nair@be10xhealthcare.com | 1500 | 530 |
| DOC012 | Dr. Pooja Desai | Gynecologist | 12 | MBBS MD Gynecology | Tue,Thu,Sat | 9:00 AM - 1:00 PM | 3:00 PM - 6:00 PM | 9876543221 | pooja.desai@be10xhealthcare.com | 1000 | 315 |
| DOC013 | Dr. Karan Malhotra | Urologist | 8 | MBBS MS Urology | Mon,Wed,Fri | 9:00 AM - 12:00 PM | 2:00 PM - 5:00 PM | 9876543222 | karan.malhotra@be10xhealthcare.com | 1100 | 425 |
| DOC014 | Dr. Ritu Sharma | ENT Specialist | 11 | MBBS MS ENT | Tue,Thu,Sat | 10:00 AM - 1:00 PM | 4:00 PM - 6:00 PM | 9876543223 | ritu.sharma@be10xhealthcare.com | 900 | 218 |
| DOC015 | Dr. Manish Agarwal | Oncologist | 16 | MBBS MD Oncology | Mon,Wed,Fri | 9:00 AM - 1:00 PM | 3:00 PM - 6:00 PM | 9876543224 | manish.agarwal@be10xhealthcare.com | 2000 | 605 |

---

## Sheet Name: Appointments

| Appointment_ID | Patient_Name | Patient_Phone | Patient_Email | Symptoms | Severity | Recommended_Specialist | Doctor_Name | Doctor_Specialization | Appointment_Date | Appointment_Time | Status | Booking_Date | Booking_Time | Rescheduled_From | Cancellation_Fee | Notes | Created_By | Last_Updated |
|----------------|--------------|---------------|---------------|----------|----------|------------------------|-------------|----------------------|------------------|------------------|--------|--------------|--------------|------------------|------------------|-------|------------|--------------|
| (Empty - will be filled by AI Agent when appointments are booked) |

---

## Column Descriptions:

### Doctors Sheet (12 columns):
1. Doctor_ID - Unique identifier
2. Doctor_Name - Full name with Dr. prefix
3. Specialization - Medical specialty
4. Experience_Years - Years of practice
5. Qualification - Degrees and certifications
6. Available_Days - Days available (comma-separated or range)
7. Morning_Slots - Morning consultation hours
8. Evening_Slots - Evening consultation hours
9. Contact_Number - 10-digit phone number
10. Email - Professional email address
11. Consultation_Fee - Fee in INR
12. Room_Number - Consultation room location

### Appointments Sheet (19 columns):
1. Appointment_ID - Unique identifier (e.g., APT20260310001)
2. Patient_Name - Full name
3. Patient_Phone - 10-digit contact
4. Patient_Email - Email address
5. Symptoms - Brief description
6. Severity - Low/Medium/High/Emergency
7. Recommended_Specialist - Type needed
8. Doctor_Name - Assigned doctor
9. Doctor_Specialization - Doctor's specialty
10. Appointment_Date - Date (YYYY-MM-DD)
11. Appointment_Time - Time (HH:MM AM/PM)
12. Status - Confirmed/Pending/Cancelled/Completed/Rescheduled
13. Booking_Date - When booked
14. Booking_Time - Time of booking
15. Rescheduled_From - Original date if rescheduled
16. Cancellation_Fee - Fee if cancelled
17. Notes - Additional remarks
18. Created_By - AI Agent/Manual/Web
19. Last_Updated - Last modification timestamp
