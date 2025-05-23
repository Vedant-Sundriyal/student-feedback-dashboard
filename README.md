Student Feedback Dashboard:- 
This is a full-stack web application for collecting and viewing student feedback. It has separate dashboards for students and teachers. 
Students can submit feedback, and teachers can view it. The app uses Supabase for backend services and authentication.

Deployment Link: https://student-feedback-dashboard-lxa5l9v73-vedant-sundriyals-projects.vercel.app

Tech Stack:-

1. Frontend: React + Tailwind CSS
2. Backend: Express.js (Supabase as DB and auth)
3. Hosting: Vercel (frontend), Supabase (backend and auth)

Features:-

1. Role-based login: student and teacher
2. Protected routes: dashboards are restricted by role
3. Role-based sidebar and UI visibility
4. Student can submit feedback
5. Teacher can view all submitted feedback
6. Signup and Login with Supabase authentication
7. Smooth route redirection after login/logout

Setup Instructions (Local):-

Clone the repository:

1. git clone https://github.com/Vedant-Sundriyal/student-feedback-dashboard.git
2. cd student-feedback-dashboard/client

Install dependencies:
1.npm install

Create a .env file in the client folder and add your Supabase keys:

1.VITE_SUPABASE_URL=your_supabase_url 
2.VITE_SUPABASE_ANON_KEY=your_anon_key 

Start the development server:
1.npm start

The app will run at http://localhost:3000

Reflections:-

1. Learned how to use Supabase for login, authentication, and real-time data.
2. Understood role-based routing and UI control.
3. Faced and fixed issues with npm, React version conflicts, and deployment errors.
4. Cleaned up .gitignore and reduced tracked files.
5. Practiced clean Git commits and proper component structure.
