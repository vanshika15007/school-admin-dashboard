# School Admin Dashboard

## Project Description

This is a modern, responsive, and unique School Admin Dashboard built with React and Tailwind CSS. It features Firebase authentication, PWA capabilities, and a vibrant UI. Administrators can view and manage students, teachers, and classes through interactive cards and detailed modals.

## Features

- **User Authentication**: Firebase Authentication with password visibility toggle and clear error handling.
- **Progressive Web App (PWA)**: Installable, offering an app-like experience with offline capabilities and custom icons.
- **Push Notifications**: Demo functionality for sending and receiving notifications via Firebase Cloud Messaging (FCM).
- **Responsive Design**: Optimized for seamless viewing and interaction across all devices.
- **Modern & Unique UI/UX**:
  - Vibrant, cohesive color palette and 'Inter' font.
  - Interactive cards with detailed view modals for Students, Teachers, and Classes.
  - Dynamic dashboard overview cards with hover effects and an attendance progress bar.
  - Collapsible sidebar navigation on mobile.
- **Clean Code Structure**: Modular components and efficient practices.

## Technologies Used

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Auth & Messaging**: Firebase (Authentication, Cloud Messaging)
- **Routing**: React Router DOM
- **Icons**: React Icons (`react-icons/fa`, `react-icons/fi`)
- **Notifications**: React Toastify

## Setup Instructions

To get the project running locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/vanshika15007/school-admin-dashboard.git
    cd school-admin-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Firebase Configuration:**

    - From your Firebase project console, copy your project configuration (apiKey, authDomain, projectId, etc.).
    - Create a `.env` file in your project root.
    - Add your Firebase config as environment variables (e.g., `VITE_FIREBASE_API_KEY=your_api_key`).
    - For Push Notifications, get your **VAPID Key Pair** and **Server Key** from Firebase Project Settings > Cloud Messaging.
      - Update `YOUR_PUBLIC_VAPID_KEY` in `src/pages/Dashboard.jsx` with your VAPID key.
      - Update `YOUR_FIREBASE_SERVER_KEY` in `src/pages/Dashboard.jsx` with your Server Key.
        **Note: Do NOT commit your Firebase Server Key to a public repository in a production environment.**

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open `http://localhost:5173` (or the indicated port) in your browser.

## Deployment

Designed for easy deployment to platforms like Netlify or Vercel:

- **Build command**: `npm run build`
- **Publish directory**: `dist` (for Vite projects)
- **Redirects**: For SPA routing, create `public/_redirects` with: `/*    /index.html   200`
- Ensure all environment variables are set in your deployment platform's dashboard.

## Future Enhancements

- Backend integration for persistent data (e.g., Firebase Firestore, Node.js API).
- CRUD operations for Students, Teachers, and Classes.
- Advanced dashboard analytics and reporting.
- Robust error logging and user feedback.
- User role management and authorization.
- Password reset functionality.
