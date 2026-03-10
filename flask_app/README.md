# Get Well Healthcare - Flask Web Application

AI-Powered Medical Assistant for Be10X Hackathon

## Project Structure

```
flask_app/
├── app.py                      # Flask backend
├── requirements.txt            # Python dependencies
├── Doctors_Sample_Data.csv     # Doctor database
├── templates/
│   └── index.html             # Main website template
├── static/
│   ├── css/
│   │   └── style.css          # Styling
│   └── js/
│       └── main.js            # Frontend logic
```

## Setup Instructions

### 1. Create Virtual Environment

```bash
cd flask_app
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Application

```bash
python app.py
```

Visit: http://localhost:5000

## Features

✅ Professional landing page with hospital information
✅ Manual booking form (saves appointment requests)
✅ AI chatbot integration (n8n webhook)
✅ Doctor profiles from CSV data
✅ Responsive mobile design
✅ Form validation

## Deployment Options

### Option 1: Render.com (Recommended)

1. Push code to GitHub
2. Go to https://render.com
3. Create new "Web Service"
4. Connect GitHub repository
5. Set:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
6. Deploy!

### Option 2: PythonAnywhere

1. Upload files to PythonAnywhere
2. Create virtual environment
3. Install requirements
4. Configure WSGI file
5. Reload web app

### Option 3: Railway.app

1. Push to GitHub
2. Connect Railway to repository
3. Auto-deploys with Python detection

## Google Sheets Integration (Optional)

To enable real appointment booking to Google Sheets:

1. Create Google Cloud Project
2. Enable Google Sheets API
3. Download service account credentials JSON
4. Update `app.py` with credentials
5. Add sheet ID and authentication

## Environment Variables

For production deployment, set:
- `FLASK_ENV=production`
- `GOOGLE_SHEETS_CREDENTIALS` (if using Sheets integration)

## Contact

Hospital: Get Well Healthcare
Phone: 1800-123-4567
Location: Tower A, Innovation Hub, Sector 62, Noida - 201301

## Hackathon Submission

Project for Be10X Hackathon (March 7-15, 2026)
Prize: ₹30,000 (First Place)
