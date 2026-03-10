# n8n Workflow

This folder contains the n8n workflow configuration for Get Well Healthcare AI Assistant.

## File

- **GetWellHealthcare.json** - Complete n8n workflow with AI Agent, OpenAI Chat Model, and 4 tools (Get Doctors, Read Appointment, Manage Appointments, Get Policies and FAQs)

## Import Instructions

1. Open n8n workflow editor
2. Click "Import from File"
3. Select `GetWellHealthcare.json`
4. Configure credentials (Google Sheets, OpenAI API key)
5. Activate workflow

## Workflow Components

- Chat Trigger (webhook)
- AI Agent node
- OpenAI Chat Model (gpt-5-mini)
- Simple Memory
- 4 Tool nodes for appointment management
