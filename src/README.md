# Personal Task Manager

A modern task management web application built with React, featuring a clean Material Design-inspired UI with the ZM brand logo.

## Features

- **User Authentication**: Login and registration with mock authentication
- **Dashboard**: Overview of tasks with statistics (Total, Completed, Pending)
- **Task Management**: Create, Read, Update, and Delete (CRUD) operations
- **Search & Filter**: Search tasks by title/description and filter by status
- **Protected Routes**: Secure access to authenticated pages
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean interface following Material Design principles

## Project Structure

```
src/
│
├── components/
│   ├── Welcome.jsx          - Landing page with login/register options
│   ├── Register.jsx         - User registration page
│   ├── Login.jsx            - User login page
│   ├── Dashboard.jsx        - Main dashboard with task statistics
│   ├── TaskList.jsx         - Task list view with CRUD operations
│   ├── CreateTaskModal.jsx  - Modal for creating new tasks
│   ├── EditTaskModal.jsx    - Modal for editing existing tasks
│   ├── UserMenu.jsx         - User dropdown menu component
│   ├── Unauthorized.jsx     - Unauthorized access page
│   └── ProtectedRoute.jsx   - Route protection component
│
├── contexts/
│   └── AuthContext.jsx      - Authentication context provider
│
├── styles/
│   └── globals.css          - Global styles and Tailwind CSS
│
├── App.js                   - Main app component with routing
└── index.js                 - App entry point
```

## Installation

1. Copy all files to your local project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router** - Declarative routing for React applications
- **Tailwind CSS v4.0** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon library
- **LocalStorage** - Client-side data persistence

## Usage

### Authentication
- The app uses mock authentication stored in localStorage
- Any email/password combination will work for login
- User data persists across browser sessions

### Task Management
1. **Create Task**: Click "Add New Task" button
2. **Edit Task**: Click the pencil icon on any task
3. **Delete Task**: Click the trash icon on any task
4. **Search Tasks**: Use the search bar to filter by title or description
5. **Filter Tasks**: Use the dropdown to filter by status (All/Pending/Completed)

### Logout
- Click the "Logout" button in the header
- Or use the dropdown menu by clicking your profile icon

## Design System

- **Primary Color**: #2563EB (Blue)
- **Background**: #F8FAFC (Light Gray)
- **Font**: Inter (from system defaults)
- **Border Radius**: 10-12px for rounded corners
- **Shadows**: Subtle elevation for cards and modals

## Notes

- This is a front-end only application with mock authentication
- Data is stored in browser's localStorage
- For production use, integrate with a real backend API
- The ZM logo is integrated throughout the application

## License

MIT License - Feel free to use this project for personal or commercial purposes.
