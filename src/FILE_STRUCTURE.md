# Complete File Structure

This document shows the complete file structure of the Personal Task Manager application.

## Directory Tree

```
personal-task-manager/
│
├── public/
│   └── index.html                    # HTML template
│
├── src/
│   │
│   ├── components/                   # All React components
│   │   │
│   │   ├── ui/                       # UI library components (copy from Figma)
│   │   │   ├── button.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── dropdown-menu.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── ... (other UI components)
│   │   │
│   │   ├── Welcome.jsx               # Landing/Onboarding page
│   │   ├── Register.jsx              # User registration page
│   │   ├── Login.jsx                 # User login page
│   │   ├── Dashboard.jsx             # Main dashboard with stats
│   │   ├── TaskList.jsx              # Task list view with CRUD
│   │   ├── CreateTaskModal.jsx       # Create task modal dialog
│   │   ├── EditTaskModal.jsx         # Edit task modal dialog
│   │   ├── UserMenu.jsx              # User menu dropdown
│   │   ├── Unauthorized.jsx          # Unauthorized access page
│   │   └── ProtectedRoute.jsx        # Route protection wrapper
│   │
│   ├── contexts/                     # React Context providers
│   │   └── AuthContext.jsx           # Authentication context
│   │
│   ├── styles/                       # Stylesheets
│   │   └── globals.css               # Global styles + Tailwind
│   │
│   ├── assets/                       # Static assets (create this)
│   │   └── logo.png                  # ZM logo (place here)
│   │
│   ├── App.js                        # Main app component with routes
│   └── index.js                      # Entry point
│
├── .gitignore                        # Git ignore rules
├── package.json                      # Project dependencies
├── README.md                         # Project documentation
├── SETUP_GUIDE.md                    # Setup instructions
└── FILE_STRUCTURE.md                 # This file
```

## File Descriptions

### Core Files

| File | Purpose |
|------|---------|
| `src/index.js` | Application entry point, renders App component |
| `src/App.js` | Main component with React Router configuration |
| `public/index.html` | HTML template for the single-page application |
| `package.json` | NPM dependencies and scripts |

### Component Files

#### Pages

| Component | Route | Description |
|-----------|-------|-------------|
| `Welcome.jsx` | `/` | Landing page with login/register buttons |
| `Login.jsx` | `/login` | User authentication page |
| `Register.jsx` | `/register` | New user registration page |
| `Dashboard.jsx` | `/dashboard` | Main dashboard with task statistics |
| `TaskList.jsx` | `/tasks` | Full task list with search and filters |
| `Unauthorized.jsx` | `/unauthorized` | Shown when accessing protected routes without auth |

#### Modals

| Component | Purpose |
|-----------|---------|
| `CreateTaskModal.jsx` | Dialog for creating new tasks |
| `EditTaskModal.jsx` | Dialog for editing existing tasks |

#### Utility Components

| Component | Purpose |
|-----------|---------|
| `ProtectedRoute.jsx` | Wrapper for routes requiring authentication |
| `UserMenu.jsx` | Dropdown menu for user profile and logout |

### Context Files

| File | Purpose |
|------|---------|
| `AuthContext.jsx` | Provides authentication state and methods throughout the app |

### Style Files

| File | Purpose |
|------|---------|
| `globals.css` | Global styles, Tailwind CSS directives, custom CSS |

### UI Component Library

The `src/components/ui/` folder contains reusable UI components. These are typically from a UI library like shadcn/ui or similar. Required components:

- `button.jsx` - Button component with variants
- `input.jsx` - Text input field
- `label.jsx` - Form label
- `select.jsx` - Dropdown select component
- `dialog.jsx` - Modal dialog
- `dropdown-menu.jsx` - Dropdown menu
- `textarea.jsx` - Multi-line text input

## Data Flow

```
┌─────────────────────────────────────────────────────┐
│                   AuthContext                        │
│  (Manages user state & authentication)               │
└──────────────────┬──────────────────────────────────┘
                   │
                   │ Provides: user, login, register,
                   │           logout, isAuthenticated
                   │
        ┌──────────┴──────────┐
        │                     │
┌───────▼──────┐    ┌────────▼────────┐
│   App.js     │    │ ProtectedRoute  │
│  (Routes)    │    │  (Auth Guard)   │
└──────┬───────┘    └─────────────────┘
       │
       ├──► Welcome
       ├──► Login
       ├──► Register
       ├──► Dashboard ──► UserMenu
       ├──► TaskList ───┬──► CreateTaskModal
       │                └──► EditTaskModal
       └──► Unauthorized
```

## State Management

### Global State (AuthContext)
- User information
- Authentication status
- Login/logout/register functions

### Local State (Component-based)
- Task data (stored in localStorage)
- Form inputs
- Modal open/close states
- Search and filter values

## Storage

### LocalStorage Keys

| Key | Data Type | Description |
|-----|-----------|-------------|
| `taskflow_user` | JSON Object | Current user information |
| `taskflow_tasks` | JSON Array | All task data |

## Routes

| Path | Component | Protected | Description |
|------|-----------|-----------|-------------|
| `/` | Welcome | No | Landing page |
| `/login` | Login | No | Login page |
| `/register` | Register | No | Registration page |
| `/dashboard` | Dashboard | Yes | Main dashboard |
| `/tasks` | TaskList | Yes | Task management page |
| `/unauthorized` | Unauthorized | No | Access denied page |
| `*` | Navigate to `/` | No | Catch-all redirect |

## Component Dependencies

### Welcome.jsx
- `react-router-dom` (useNavigate)
- `./ui/button`
- Logo asset

### Login.jsx
- `react` (useState)
- `react-router-dom` (useNavigate, Link)
- `../contexts/AuthContext` (useAuth)
- `./ui/button`, `./ui/input`, `./ui/label`
- Logo asset

### Register.jsx
- `react` (useState)
- `react-router-dom` (useNavigate, Link)
- `../contexts/AuthContext` (useAuth)
- `./ui/button`, `./ui/input`, `./ui/label`
- Logo asset

### Dashboard.jsx
- `react` (useEffect, useState)
- `react-router-dom` (useNavigate)
- `../contexts/AuthContext` (useAuth)
- `./UserMenu`
- `./ui/button`
- `lucide-react` (ListTodo, CheckCircle2, Clock, Plus, LogOut)
- Logo asset

### TaskList.jsx
- `react` (useState, useEffect)
- `react-router-dom` (useNavigate)
- `./UserMenu`
- `./ui/button`, `./ui/input`, `./ui/select`, `./ui/dialog`
- `./CreateTaskModal`, `./EditTaskModal`
- `lucide-react` (Plus, Search, Pencil, Trash2, ArrowLeft)
- Logo asset

### UserMenu.jsx
- `lucide-react` (User, LogOut)
- `../contexts/AuthContext` (useAuth)
- `react-router-dom` (useNavigate)
- `./ui/dropdown-menu`
- `./ui/button`

### CreateTaskModal.jsx
- `react` (useState)
- `./ui/button`, `./ui/input`, `./ui/label`, `./ui/textarea`, `./ui/select`, `./ui/dialog`

### EditTaskModal.jsx
- `react` (useState, useEffect)
- `./ui/button`, `./ui/input`, `./ui/label`, `./ui/textarea`, `./ui/select`, `./ui/dialog`

### ProtectedRoute.jsx
- `react-router-dom` (Navigate)
- `../contexts/AuthContext` (useAuth)

### Unauthorized.jsx
- `react-router-dom` (useNavigate)
- `lucide-react` (ShieldAlert)
- `./ui/button`

## Additional Notes

### Logo Integration
The logo is referenced as:
```javascript
import logo from 'figma:asset/c62f533105c0c1e5b2518d71113997455d7bb5ad.png';
```

For a standard React project, update this to:
```javascript
import logo from '../assets/logo.png';
```

### UI Components
All UI components in `src/components/ui/` must be copied from your Figma export. These are not included in this file structure but are required for the app to work.

### Tailwind CSS
The project uses Tailwind CSS v4.0. Ensure your `globals.css` includes:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Plus any custom styles and design tokens from your Figma project.
