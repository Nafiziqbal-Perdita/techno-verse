# TechnoVerse
<p align="center">
  <img src="./src/assets/logo.svg" alt="Project Logo" width="200"/>
</p>

*We facilitate meeting between Clients and Technicians*

## Live Link
[Techno-Verse](https://techno-verse.onrender.com/)

## About the Project
TechnoVerse is a modern, full-stack web platform designed to streamline remote technical assistance and collaboration. It connects clients with skilled technicians for real-time support, secure remote access, and community-driven problem solving. The platform features a user-friendly interface, robust security, and a suite of communication tools to ensure efficient and effective remote help. Whether you are a client seeking help or a technician looking to expand your network, TechnoVerse provides a seamless experience for all users.

## Features
- **Remote Video Calling:** Start or join secure video calls for real-time troubleshooting and support.
- **Screen Sharing:** Share your screen with technicians or clients to resolve issues collaboratively.
- **Direct Messaging (Inbox):** Communicate privately with other users using a secure, real-time chat system.
- **Public Chatrooms:** Join topic-based chatrooms to connect with peers and technicians for group discussions.
- **Forums:** Participate in community forums to share experiences, ask questions, and find solutions.
- **Remote Access Tool:** Securely access and control remote devices for hands-on support.
- **Technician Network:** Apply to become a technician, expand your reach, and manage your client base.
- **User Authentication:** Secure sign-in and registration using Firebase Authentication.
- **Responsive Design:** Fully responsive UI for desktop and mobile devices.
- **Modern UI/UX:** Built with Tailwind CSS, Material UI, and custom glassmorphism effects for a beautiful, intuitive experience.

## Tech Stack
- **Frontend:** React, Material Tailwind, Tailwind CSS, Keep-React, Framer Motion
- **Backend:** Firebase (Authentication, Realtime Database, Storage)
- **Database:** Firebase Realtime Database
- **Other:** WebRTC (for video/screen sharing), TalkJS (for chat), Socket.io (for real-time features)

## Getting Started

### Prerequisites
```bash
node >= 14.0.0
```

### Environment Variables
Create a `.env` file in the project root and add your Firebase and Stripe credentials:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Install All Dependencies
```bash
npm install
```

### Run Locally (Dev Mode)
```bash
npm run dev
```

## Usage
- **Sign In:** Register or log in as a client or technician.
- **Start a Session:** Use the Services page to initiate video calls, screen sharing, or remote access.
- **Chat & Forums:** Join chatrooms, send direct messages, or participate in forums for community support.
- **Apply as Technician:** Expand your network and manage your clients by applying for a technician role.

## Security & Best Practices
- All remote sessions require user consent and are encrypted for privacy.
- User authentication and data storage are managed securely via Firebase.
- Always keep your credentials safe and never expose them in public repositories.

## License
This project is licensed under the MIT License.

---

*TechnoVerse – Bridging the gap between clients and technicians for a smarter, more connected world.*

















