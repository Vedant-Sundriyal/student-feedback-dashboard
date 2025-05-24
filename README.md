Student Feedback Dashboard:- 
This is a full-stack web application for collecting and viewing student feedback. It has separate dashboards for students and teachers. 
Students can submit feedback, and teachers can view it. The app uses Supabase for backend services and authentication.

Deployment Link: https://student-feedback-dashboard-dv3ujo7tz-vedant-sundriyals-projects.vercel.app

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

Create a .env file in the client folder and add your Supabase keys:

1.VITE_SUPABASE_URL=your_supabase_url (https://gbynkkdzyoigiihnbucp.supabase.co)
2.VITE_SUPABASE_ANON_KEY=your_anon_key (eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdieW5ra2R6eW9pZ2lpaG5idWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4NTMzMzAsImV4cCI6MjA2MzQyOTMzMH0.jvEM3S0qF49GdMKWoO8ZXId3U45IrxoSKVgviW-xE8o)

Start the frontend:-
In you terminal:-
cd client->npm install->npm start

The app will run at http://localhost:3000

Open a new terminal and start the backend:-
cd server->npm install->npm start

Reflections:-

1. Learned how to use Supabase for login, authentication, and real-time data.
2. Understood role-based routing and UI control.
3. Faced and fixed issues with npm, React version conflicts, and deployment errors.
4. Cleaned up .gitignore and reduced tracked files.
5. Practiced clean Git commits and proper component structure.
