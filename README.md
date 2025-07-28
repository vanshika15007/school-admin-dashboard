# School Admin Dashboard

## Overview

Modern, responsive admin dashboard for school management. Features include Firebase authentication, PWA support, and a vibrant UI.

## Key Features

- **Auth**: Firebase Login/Sign Up, password toggle, error handling.
- **PWA**: Installable, offline support, custom icons.
- **Notifications**: Demo push notifications (FCM).
- **Design**: Responsive, unique colorful UI, interactive cards, collapsible sidebar.

## Tech Stack

- React.js
- Tailwind CSS
- Firebase (Auth, FCM)
- React Router DOM
- React Icons, React Toastify

## Setup

1.  Clone repo: `git clone https://github.com/vanshika15007/school-admin-dashboard.git && cd school-admin-dashboard`
2.  Install: `npm install`
3.  **Firebase Config**:
    - Create `.env` in root.
    - Add Firebase project config (e.g., `VITE_FIREBASE_API_KEY=...`).
    - For push notifications: Update `YOUR_PUBLIC_VAPID_KEY` and `YOUR_FIREBASE_SERVER_KEY` in `src/pages/Dashboard.jsx`.
    - **SECURITY WARNING: Do NOT expose Server Key in production client-side code.**
4.  Run: `npm run dev` (then `http://localhost:5173`)

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA Redirect: Create `public/_redirects` with `/* /index.html 200`
- Set environment variables in Netlify dashboard.

## Future

- Backend integration (Firestore/API)
- CRUD operations
- Advanced analytics
