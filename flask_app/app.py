from flask import Flask, render_template, request, jsonify
import gspread
from oauth2client.service_account import ServiceAccountCredentials
from datetime import datetime
import csv
import os

app = Flask(__name__)

# Load doctors data from CSV
def load_doctors():
    doctors = []
    csv_path = os.path.join(os.path.dirname(__file__), 'Doctors_Sample_Data.csv')
    with open(csv_path, 'r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            doctors.append(row)
    return doctors

@app.route('/')
def index():
    doctors = load_doctors()
    return render_template('index.html', doctors=doctors)

@app.route('/api/book-appointment', methods=['POST'])
def book_appointment():
    try:
        data = request.json
        
        # Generate Appointment ID
        appointment_id = f"APT{datetime.now().strftime('%Y%m%d%H%M%S')}"
        
        # TODO: Add Google Sheets integration here
        # For now, return success response
        
        return jsonify({
            'success': True,
            'appointment_id': appointment_id,
            'message': 'Appointment request submitted successfully!'
        })
    
    except Exception as e:
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
