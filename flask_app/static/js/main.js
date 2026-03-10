// Open booking form modal
function openBookingForm() {
    document.getElementById('bookingModal').style.display = 'block';
    document.getElementById('appointmentDate').min = new Date().toISOString().split('T')[0];
}

// Close booking form modal
function closeBookingForm() {
    document.getElementById('bookingModal').style.display = 'none';
    document.getElementById('bookingForm').reset();
    document.getElementById('formMessage').innerHTML = '';
}

// Open chatbot modal
function openChatbot() {
    document.getElementById('chatbotModal').style.display = 'block';
}

// Close chatbot modal
function closeChatbot() {
    document.getElementById('chatbotModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const bookingModal = document.getElementById('bookingModal');
    const chatbotModal = document.getElementById('chatbotModal');
    if (event.target == bookingModal) {
        closeBookingForm();
    }
    if (event.target == chatbotModal) {
        closeChatbot();
    }
}

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bookingForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            patient_name: document.getElementById('patientName').value,
            patient_phone: document.getElementById('patientPhone').value,
            patient_email: document.getElementById('patientEmail').value,
            symptoms: document.getElementById('symptoms').value,
            appointment_date: document.getElementById('appointmentDate').value,
            appointment_time: document.getElementById('appointmentTime').value,
            specialist: document.getElementById('specialist').value
        };
        
        try {
            const response = await fetch('/api/book-appointment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            const messageDiv = document.getElementById('formMessage');
            
            if (result.success) {
                messageDiv.className = 'success';
                messageDiv.innerHTML = `
                    <p>✅ Appointment request submitted successfully!</p>
                    <p>Your Appointment ID: <strong>${result.appointment_id}</strong></p>
                    <p>We'll confirm via phone/email within 2 hours.</p>
                `;
                document.getElementById('bookingForm').reset();
            } else {
                messageDiv.className = 'error';
                messageDiv.innerHTML = `<p>❌ ${result.message}</p>`;
            }
        } catch (error) {
            const messageDiv = document.getElementById('formMessage');
            messageDiv.className = 'error';
            messageDiv.innerHTML = '<p>❌ Error submitting appointment. Please call 1800-123-4567</p>';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
