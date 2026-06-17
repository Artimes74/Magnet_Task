🚀 MagnetTask

A React Native interview project that demonstrates authentication, friends management, reusable UI components, state management, form validation, testing, and end-to-end user flows.

⸻

📱 Features

🔐 Authentication

- Login screen
- Email and password validation using Zod
- API integration with a custom Node.js backend
- Loading and error states
- Navigation after successful login
- JWT-based authentication flow

👥 Friends Screen

- Friends list
- Search functionality
- VIP filtering
- Dynamic tab filtering
- Empty states

🎨 UI Components

Reusable component architecture including:

- AppBar
- Avatar
- SearchBar
- ListItem
- Button
- Input
- SegmentedTabs

🗄️ State Management

- Redux Toolkit
- React Query

📝 Form Handling

- React Hook Form
- Zod Validation

⸻

🔑 Demo Credentials

Use the following credentials to access the application:

Email

artimes.geraami@gmail.com

Password

Aa123456@

These credentials are connected to the hosted backend and can be used to test the complete authentication and friends-management flow.

⸻

🔗 Backend Repository

Backend GitHub Repository:

https://github.com/Artimes74/Magnet_Task_BK.git

The backend provides:

- Authentication
- JWT Token Management
- User Profile APIs
- Friends Management APIs
- Secure HTTPS Communication

⸻

🏗️ Project Structure

src/
├── components/
│ ├── atom/
│ ├── molecule/
│ ├── organism/
│ └── layout/
├── features/
│ ├── auth/
│ └── friends/
├── navigation/
├── services/
├── hooks/
├── theme/
└── utils/

⸻

🛠️ Tech Stack

Technology Purpose
React Native Mobile Application
TypeScript Type Safety
Redux Toolkit Global State Management
React Query Server State Management
React Hook Form Form Management
Zod Validation
Jest Unit Testing
React Native Testing Library Component Testing
Detox End-to-End Testing
Node.js Backend
Express.js API Layer
JWT Authentication

⸻

⚙️ Project Setup

Prerequisites

Make sure the following are installed:

- Node.js (LTS recommended)
- pnpm
- Xcode
- CocoaPods
- Android Studio

Install Dependencies

pnpm install

⸻

▶️ Running the Application

Start Metro

pnpm start

Run on iOS

Install CocoaPods dependencies:

cd ios
pod install
cd ..

Run the application:

pnpm ios

Run on Android

pnpm android

⸻

🧪 Testing

Unit Tests

Implemented tests for:

- loginSchema
- friendsFilters
- createFilteredTabs
- Avatar

Run all tests:

pnpm test

Run a specific test suite:

pnpm test loginSchema
pnpm test friendsFilters
pnpm test createFilteredTabs
pnpm test Avatar

⸻

🚀 End-to-End Tests

Implemented using Detox.

Covered User Flow

- Launch application
- Enter credentials
- Submit login form
- Navigate to Friends screen

Build E2E Application

pnpm detox build --configuration ios.sim.debug

Run E2E Tests

pnpm detox test --configuration ios.sim.debug

⸻

🏛️ Architectural Decisions

Feature-Based Architecture

Business logic is organized by feature (auth, friends) rather than by file type. This improves scalability, maintainability, and separation of concerns.

Component Architecture

UI components are organized using a layered structure:

- Atom
- Molecule
- Organism
- Layout

This encourages component reusability and consistent UI patterns across the application.

State Management

- Redux Toolkit is used for global application state management.
- React Query is used for API requests, caching, and server-state management.

Form Management

React Hook Form and Zod are used together to provide:

- Type-safe validation
- Better performance
- Clean separation of validation rules
- Improved developer experience

Testing Strategy

The project includes multiple levels of testing.

Unit Tests

Focused on:

- Validation logic
- Filtering logic
- Utility functions
- Reusable UI components

End-to-End Tests

Detox is used to validate the critical user journey and ensure the application behaves correctly from a real user’s perspective.

⸻

📌 Assumptions

- A custom Node.js backend is used for authentication and data management.
- Authentication is implemented using JWT.
- The provided demo credentials can be used to test the complete application flow.
- The focus of the task is frontend architecture, maintainability, user experience, and testing.
- iOS Detox E2E testing is fully configured and verified.
- Android E2E testing can be configured if required.

⸻

✅ Submission Checklist

- Complete source code included
- Backend repository included
- Project setup instructions included
- Application run instructions included
- Demo credentials included
- Unit test instructions included
- E2E test instructions included
- Architectural decisions documented
- Assumptions documented

⸻

👨‍💻 Author

Artimes Gerami
