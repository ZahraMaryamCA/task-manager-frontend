# Personal Task Manager - Full Stack Application

A complete full-stack task management application with React frontend and Express.js backend, featuring JWT authentication and MongoDB database.

## 🚀 Features

### Frontend (React)
- ✅ Modern, clean Material Design-inspired UI
- ✅ User authentication (Register/Login/Logout)
- ✅ Dashboard with task statistics
- ✅ Complete CRUD operations for tasks
- ✅ Search and filter functionality
- ✅ Responsive design for mobile and desktop
- ✅ ZM branding throughout

### Backend (Express.js + MongoDB)
- ✅ RESTful API architecture
- ✅ JWT-based authentication
- ✅ Secure password hashing with bcrypt
- ✅ MongoDB database with Mongoose ORM
- ✅ Protected routes with middleware
- ✅ CORS enabled for cross-origin requests

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB Atlas account** or local MongoDB installation
- **Visual Studio Code** (recommended) - [Download](https://code.visualstudio.com/)

## 🛠️ Installation & Setup

### 1. Backend Setup

#### Navigate to backend directory:
```bash
cd personal-task-manager-backend
```

#### Install dependencies:
```bash
npm install
```

#### Create .env file with your credentials:
```
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/personal_task_manager?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
```

#### Start the backend server:
```bash
npm run dev
```

You should see:
```
Server started on port 5000
MongoDB connected
```

### 2. Frontend Setup

#### Navigate to frontend directory:
```bash
cd personal-task-manager
```

#### Install dependencies:
```bash
npm install
```

#### Create .env file:
```
REACT_APP_API_URL=http://localhost:5000
```

#### Start the frontend:
```bash
npm start
```

The app will open at http://localhost:3000

## 📁 Project Structure

### Frontend
```
personal-task-manager/
├── src/
│   ├── components/
│   │   ├── ui/                    # UI library components
│   │   ├── Welcome.jsx            # Landing page
│   │   ├── Register.jsx           # Registration page
│   │   ├── Login.jsx              # Login page
│   │   ├── Dashboard.jsx          # Dashboard with stats
│   │   ├── TaskList.jsx           # Task management page
│   │   ├── CreateTaskModal.jsx    # Create task dialog
│   │   ├── EditTaskModal.jsx      # Edit task dialog
│   │   ├── UserMenu.jsx           # User dropdown menu
│   │   ├── Unauthorized.jsx       # 401 page
│   │   └── ProtectedRoute.jsx     # Auth guard
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx        # Auth state management
│   │
│   ├── utils/
│   │   └── apiService.js          # API calls
│   │
│   ├── config/
│   │   └── api.js                 # API configuration
│   │
│   ├── styles/
│   │   └── globals.css            # Global styles
│   │
│   ├── App.js                     # Main app with routing
│   └── index.js                   # Entry point
│
├── public/
│   └── index.html
│
├── .env                           # Environment variables
├── package.json
└── README.md
```

### Backend
```
personal-task-manager-backend/
├── config/
│   └── db.js                      # MongoDB connection
│
├── controllers/
│   ├── userController.js          # User auth logic
│   └── taskController.js          # Task CRUD logic
│
├── middleware/
│   └── auth.js                    # JWT verification
│
├── models/
│   ├── User.js                    # User schema
│   └── taskModel.js               # Task schema
│
├── routes/
│   ├── userRoutes.js              # Auth endpoints
│   └── taskRoutes.js              # Task endpoints
│
├── .env                           # Environment variables
├── package.json
└── server.js                      # Entry point
```

## 🔑 API Endpoints

### Authentication
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/users/register | Register new user | No |
| POST | /api/users/login | Login user | No |

### Tasks
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | /api/tasks | Create new task | Yes |
| GET | /api/tasks | Get all user tasks | Yes |
| GET | /api/tasks/:id | Get single task | Yes |
| PUT | /api/tasks/:id | Update task | Yes |
| DELETE | /api/tasks/:id | Delete task | Yes |

## 🔐 Authentication Flow

1. **Registration:**
   - User submits registration form
   - Backend hashes password with bcrypt
   - User saved to MongoDB
   - Frontend automatically logs in user

2. **Login:**
   - User submits credentials
   - Backend validates password
   - JWT token generated and returned
   - Token stored in localStorage
   - User redirected to dashboard

3. **Protected Routes:**
   - Token sent in Authorization header
   - Backend middleware verifies token
   - Request processed if valid
   - 401 error if invalid/expired

4. **Logout:**
   - Token and user data cleared from localStorage
   - User redirected to welcome page

## 💾 Data Models

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date (auto-generated)
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String (required),
  status: String (enum: ['pending', 'completed']),
  dueDate: Date (optional),
  userId: ObjectId (ref: User),
  createdAt: Date (auto-generated)
}
```

## 🧪 Testing the Application

### 1. Test User Registration
1. Go to http://localhost:3000
2. Click "Register"
3. Fill in details:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
4. Click "Create Account"
5. Should auto-login and redirect to dashboard

### 2. Test Task Creation
1. From dashboard, click "Add New Task" or "View All Tasks"
2. Click "Add New Task" button
3. Fill in:
   - Title: Complete project documentation
   - Description: Write comprehensive docs
   - Status: Pending
   - Due Date: 2024-12-31
4. Click "Save Task"
5. Task should appear in list

### 3. Test Task Operations
- **Edit:** Click pencil icon → modify → save
- **Delete:** Click trash icon → confirm
- **Search:** Type in search box
- **Filter:** Use status dropdown

### 4. Test Logout
1. Click "Logout" button in header
2. Should redirect to welcome page
3. Try accessing /dashboard directly
4. Should redirect to unauthorized page

## 🐛 Troubleshooting

### Backend Not Starting
- Check MongoDB connection string in .env
- Ensure MongoDB Atlas IP whitelist includes your IP
- Verify all dependencies installed: `npm install`

### Frontend Can't Connect to Backend
- Ensure backend is running on port 5000
- Check .env has correct REACT_APP_API_URL
- Restart frontend after changing .env
- Check CORS is enabled in backend

### Authentication Issues
- Clear localStorage and try again
- Check JWT_SECRET is same on backend
- Verify token is being sent (check Network tab)
- Token expires after 1 hour - re-login if needed

### Tasks Not Showing
- Check browser console for errors
- Verify you're logged in
- Check Network tab for API responses
- Ensure tasks belong to logged-in user

## 🚢 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Push code to Git repository
2. Connect to hosting platform
3. Set environment variables:
   - MONGO_URI
   - JWT_SECRET
   - PORT
4. Deploy
5. Note deployed URL

### Frontend Deployment (Vercel/Netlify)
1. Update .env:
   ```
   REACT_APP_API_URL=https://your-backend-url.com
   ```
2. Build project: `npm run build`
3. Deploy build folder
4. Update backend CORS to allow frontend URL

## 🔒 Security Considerations

- ✅ Passwords hashed with bcrypt
- ✅ JWT tokens for authentication
- ✅ Protected API routes
- ✅ CORS configured
- ⚠️ Use HTTPS in production
- ⚠️ Use httpOnly cookies for tokens (more secure than localStorage)
- ⚠️ Implement rate limiting
- ⚠️ Add input validation/sanitization
- ⚠️ Use strong, unique JWT_SECRET

## 📚 Tech Stack

### Frontend
- React 18
- React Router DOM
- Tailwind CSS v4
- Lucide React (icons)
- Fetch API

### Backend
- Express.js 5
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs for password hashing
- CORS middleware
- dotenv for environment variables

## 🎨 Design System

- **Primary Color:** #2563EB (Blue)
- **Background:** #F8FAFC (Light Gray)
- **Font:** Inter (system default)
- **Border Radius:** 10-12px
- **Shadows:** Subtle elevation

## 📝 Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

### Backend (.env)
```
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using React and Express.js

## 📞 Support

For issues or questions:
1. Check the BACKEND_INTEGRATION_GUIDE.md
2. Review browser console and backend logs
3. Verify all environment variables are set
4. Test API endpoints with Postman

## 🎯 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Task categories/tags
- [ ] Task priority levels
- [ ] File attachments
- [ ] Task sharing between users
- [ ] Real-time notifications
- [ ] Task comments
- [ ] Recurring tasks
- [ ] Dark mode
- [ ] Mobile app (React Native)

---

Happy Task Managing! 🎉
