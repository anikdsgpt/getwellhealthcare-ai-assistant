# Get Well Healthcare - AI Medical Assistant

**Be10X Hackathon Project (March 7-15, 2026)**

Complete AI-powered hospital appointment booking system with n8n workflow automation, Google Sheets database, and Flask web application.

## 📁 Project Structure

```
Hackathon_10X/
├── flask_app/              # Flask web application
│   ├── app.py             # Backend server
│   ├── requirements.txt   # Dependencies
│   ├── templates/         # HTML templates
│   ├── static/            # CSS, JS, assets
│   └── README.md          # Flask setup guide
│
├── documentation/          # Project documentation
│   ├── Get_Well_Healthcare_System_Prompt.txt
│   ├── Hospital_Policies_FAQs.md
│   ├── Test_Cases_Report.md
│   ├── Challenges_And_Workarounds.md
│   └── Doctors_And_Appointments_Tables.md
│
└── Information/           # n8n workflows and references
    └── GetWellHealthcare.json
```

## 🚀 Quick Start

### Flask Web Application

```bash
cd flask_app
python -m venv venv
venv\Scripts\activate          # Windows
pip install -r requirements.txt
python app.py
```

Visit: http://localhost:5000

## 🏗️ System Architecture

### Components:
1. **Flask Web App** - User interface with booking form and chatbot
2. **n8n Workflow** - AI agent orchestration with OpenAI Chat Model
3. **Google Sheets** - Doctors database and Appointments log
4. **Pinecone** - Hospital policies and FAQs knowledge base

### Data Flow:
```
User → Flask Website → n8n AI Agent → Google Sheets
                     ↓
                  OpenAI GPT
                     ↓
                  Pinecone KB
```

## ✨ Features

✅ AI-powered symptom analysis and specialist recommendation
✅ Real-time doctor availability checking
✅ Automated appointment booking with unique IDs
✅ Appointment rescheduling and cancellation
✅ Hospital policy and FAQ queries
✅ Emergency detection and routing
✅ 15+ medical specializations
✅ Manual booking form + AI chatbot
✅ Mobile-responsive design

## 📊 Testing Results

- **10 Test Cases**: 100% Pass Rate
- **Field Validation**: All 19 appointment fields working
- **Tool Integration**: 4/4 tools functioning correctly
- **Performance**: Average response time < 3 seconds

## 🎯 Hackathon Details

- **Event**: Be10X Hackathon
- **Dates**: March 7-15, 2026
- **Prize**: ₹30,000 (First Place)
- **Category**: AI/Automation

## 📞 Hospital Information

- **Name**: Get Well Healthcare
- **Phone**: 1800-123-4567
- **Address**: Tower A, Innovation Hub, Sector 62, Noida - 201301
- **Website**: www.getwellhealthcare.com

## 🛠️ Technologies Used

- **Backend**: Python Flask
- **AI/Automation**: n8n, OpenAI GPT
- **Database**: Google Sheets
- **Knowledge Base**: Pinecone
- **Frontend**: HTML, CSS, JavaScript
- **Hosting**: Render.com / PythonAnywhere

## 📖 Documentation

All documentation available in `/documentation` folder:
- System prompt and workflows
- Hospital policies and FAQs
- Test cases and results
- Technical challenges and solutions
- Database schemas

## 🚢 Deployment

See `flask_app/README.md` for detailed deployment instructions for:
- Render.com (recommended)
- PythonAnywhere
- Railway.app
- Vercel

## 👨‍💻 Developer

Created for Be10X Hackathon 2026
