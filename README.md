# Features

### User Features:
- click through information pages about the stages of eviction in New Orleans, LA
- toggle between English and Spanish for all pages at any point on the website
- scroll through example documents to identify user's eviction status
- hover over important sections of example documents to learn more about the text
- read questions that were already answered and submit new ones via form
- complete a separate form to volunteer with the organization that maintains the app
- select specific causes and read through the ways they may be able to fight eviction
- access links to legal aid
- view number of people on help hotline

### App Administrative Features:
- view volunteers information (id, name, languages, position, online status, email, and schedule)
- add a new volunteer (with auto-generated id)
- delete a volunteer
- add a schedule to a volunteer
- change information and/or schedule of a volunteer
- mark a hotline volunteer as online or offline
- view volunteer schedules

# Installation

1. Fork and clone this repository.
2. Install dependencies by running npm install.
3. Create an EmailJs account along with a template that uses "user_name", "user_email", and "message".
4. Add EmailJs API keys to .env file:
      - REACT_APP_SERVICE_ID= *YOUR SERVICE ID*
      - REACT_APP_TEMPLATE_ID= *YOUR TEMPLATE ID FROM STEP 3*
      - REACT_APP_USER_ID= *YOUR PUBLIC USER KEY*
6. Create a backend for this app forking and cloning https://github.com/jaekerrclayton/renters-rights-back-end.
7. Add backend URL to .env file:
      - REACT_APP_BACKEND_URL= *YOUR BACKEND URL*
8. Data shared with users can be updated in the JSON files.
