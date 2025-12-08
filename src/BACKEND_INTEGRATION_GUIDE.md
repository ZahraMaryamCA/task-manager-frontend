# Backend Integration Guide

This guide explains how to connect your React frontend with the Express.js backend.

## Prerequisites

- Node.js and npm installed
- MongoDB Atlas account (or local MongoDB)
- Both frontend and backend code downloaded

## Backend Setup

### 1. Backend File Structure

Your backend should have this structure:
```
personal-task-manager-backend/
├── config/
│   └── db.js
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── taskModel.js
│   └── User.js
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
├── .env
├── package.json
└── server.js
```

### 2. Install Backend Dependencies

Navigate to your backend folder:
```bash
cd personal-task-manager-backend
npm install
```

This will install:
- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

### 3. Configure Backend Environment

Your backend `.env` file should contain:
```
MONGO_URI=mongodb+srv://root:toor@devcluster0.pvlgwkk.mongodb.net/personal_task_manager?retryWrites=true&w=majority
JWT_SECRET=this_is_my_very_very_strong_jwt_secret
PORT=5000
```

**Important Security Notes:**
- Change the JWT_SECRET to a strong, unique value
- Never commit .env files to version control
- Use environment-specific credentials for production

### 4. Start Backend Server

```bash
npm run dev
```

The backend should now be running on http://localhost:5000

You should see:
```
Server started on port 5000
MongoDB connected
```

## Frontend Setup

### 1. Install Frontend Dependencies

Navigate to your frontend folder:
```bash
cd personal-task-manager
npm install
```

### 2. Configure Frontend Environment

Create a `.env` file in the frontend root:
```
REACT_APP_API_URL=http://localhost:5000
```

### 3. Start Frontend

```bash
npm start
```

The React app should open at http://localhost:3000

## API Endpoints

### Authentication Endpoints

#### Register User
```
POST /api/users/register
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "message": "User registered successfully"
}
```

#### Login User
```
POST /api/users/login
Body: {
  "email": "john@example.com",
  "password": "password123"
}
Response: {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Task Endpoints (All require Authorization header)

#### Create Task
```
POST /api/tasks
Headers: {
  "Authorization": "your-jwt-token",
  "Content-Type": "application/json"
}
Body: {
  "title": "Complete project",
  "description": "Finish the task manager app",
  "status": "pending",
  "dueDate": "2024-12-31"
}
```

#### Get All Tasks
```
GET /api/tasks
Headers: {
  "Authorization": "your-jwt-token"
}
```

#### Get Single Task
```
GET /api/tasks/:id
Headers: {
  "Authorization": "your-jwt-token"
}
```

#### Update Task
```
PUT /api/tasks/:id
Headers: {
  "Authorization": "your-jwt-token",
  "Content-Type": "application/json"
}
Body: {
  "title": "Updated title",
  "status": "completed"
}
```

#### Delete Task
```
DELETE /api/tasks/:id
Headers: {
  "Authorization": "your-jwt-token"
}
```

## Frontend API Integration

### API Service (`src/utils/apiService.js`)

The frontend uses a centralized API service that:
1. Manages API base URL from environment variables
2. Automatically includes JWT tokens in authenticated requests
3. Handles errors consistently

### Authentication Flow

1. **Registration:**
   - User fills registration form
   - Frontend sends POST to `/api/users/register`
   - Backend creates user with hashed password
   - Frontend automatically logs user in

2. **Login:**
   - User enters credentials
   - Frontend sends POST to `/api/users/login`
   - Backend validates and returns JWT token
   - Frontend stores token in localStorage
   - User redirected to dashboard

3. **Authenticated Requests:**
   - Token retrieved from localStorage
   - Added to Authorization header
   - Backend validates token via auth middleware
   - Request processed if valid

4. **Logout:**
   - Frontend clears token and user data from localStorage
   - User redirected to welcome page

### Task Management Flow

1. **Fetch Tasks:**
   - Dashboard/TaskList component mounts
   - Calls `taskAPI.getAllTasks()`
   - Backend returns user's tasks
   - UI updates with task data

2. **Create Task:**
   - User fills create task form
   - Calls `taskAPI.createTask(taskData)`
   - Backend creates task linked to user
   - New task added to frontend state

3. **Update Task:**
   - User edits task in modal
   - Calls `taskAPI.updateTask(id, taskData)`
   - Backend updates task
   - Frontend state refreshed

4. **Delete Task:**
   - User confirms deletion
   - Calls `taskAPI.deleteTask(id)`
   - Backend removes task
   - Frontend removes from state

## Testing the Integration

### 1. Test Registration

1. Start both servers (backend on :5000, frontend on :3000)
2. Navigate to http://localhost:3000
3. Click "Register"
4. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
5. Click "Create Account"
6. Should redirect to dashboard

### 2. Test Login

1. Go to http://localhost:3000/login
2. Enter:
   - Email: test@example.com
   - Password: password123
3. Click "Login"
4. Should redirect to dashboard

### 3. Test Task Creation

1. From dashboard, click "Add New Task"
2. Fill in:
   - Title: My First Task
   - Description: Testing the task creation
   - Status: Pending
   - Due Date: Select a future date
3. Click "Save Task"
4. Task should appear in list

### 4. Test Task Operations

- **View:** Navigate to Tasks page to see all tasks
- **Edit:** Click pencil icon, modify task, save
- **Delete:** Click trash icon, confirm deletion
- **Search:** Type in search box to filter
- **Filter:** Use status dropdown to filter by pending/completed

## Troubleshooting

### Issue: "Failed to fetch" or Network Error

**Causes:**
- Backend server not running
- CORS not configured properly
- Wrong API URL in frontend .env

**Solutions:**
1. Ensure backend is running on port 5000
2. Check backend has `app.use(cors())` before routes
3. Verify `.env` has `REACT_APP_API_URL=http://localhost:5000`
4. Restart frontend after changing .env

### Issue: "401 Unauthorized" or "Invalid token"

**Causes:**
- Token expired (1 hour expiry)
- Token not being sent
- JWT_SECRET mismatch

**Solutions:**
1. Log out and log back in to get new token
2. Check Authorization header in Network tab
3. Ensure backend JWT_SECRET hasn't changed
4. Clear localStorage and re-login

### Issue: "Email already exists"

**Solution:**
- Use a different email
- Or delete user from MongoDB and retry

### Issue: Tasks not appearing

**Causes:**
- Tasks belong to different user
- Backend not filtering by userId correctly

**Solutions:**
1. Check browser console for errors
2. Verify token is being sent with GET /api/tasks request
3. Check MongoDB to see if tasks exist
4. Ensure backend middleware `req.user` is set correctly

### Issue: MongoDB connection failed

**Solutions:**
1. Check MongoDB Atlas is accessible
2. Verify MONGO_URI in backend .env
3. Ensure IP address is whitelisted in MongoDB Atlas
4. Check internet connection

## Production Deployment

### Backend Deployment (e.g., Heroku, Railway, Render)

1. Deploy backend to hosting service
2. Set environment variables:
   ```
   MONGO_URI=your-production-mongodb-uri
   JWT_SECRET=your-strong-secret
   PORT=5000
   ```
3. Note your backend URL (e.g., `https://your-api.herokuapp.com`)

### Frontend Deployment (e.g., Vercel, Netlify)

1. Update frontend `.env`:
   ```
   REACT_APP_API_URL=https://your-api.herokuapp.com
   ```
2. Build the app:
   ```bash
   npm run build
   ```
3. Deploy the build folder to your hosting service

### CORS Configuration for Production

Update backend `server.js`:
```javascript
const cors = require('cors');

app.use(cors({
  origin: ['https://your-frontend-url.com', 'http://localhost:3000'],
  credentials: true
}));
```

## Security Best Practices

1. **Never expose sensitive data:**
   - Add `.env` to `.gitignore`
   - Use different secrets for dev/production

2. **Token Management:**
   - Store JWT in httpOnly cookies (more secure than localStorage)
   - Implement token refresh mechanism
   - Set appropriate token expiry

3. **Input Validation:**
   - Validate all inputs on backend
   - Sanitize user data
   - Use libraries like `validator` or `joi`

4. **HTTPS:**
   - Always use HTTPS in production
   - Secure cookies with `secure` flag

5. **Rate Limiting:**
   - Add rate limiting to prevent abuse
   - Use packages like `express-rate-limit`

## Additional Features to Consider

1. **Password Reset**
2. **Email Verification**
3. **Task Categories/Tags**
4. **Task Priority Levels**
5. **File Attachments**
6. **Task Sharing**
7. **Notifications**
8. **Task Comments**

## Support

If you encounter issues:
1. Check browser console (F12)
2. Check backend terminal logs
3. Use MongoDB Compass to inspect database
4. Test API endpoints with Postman
5. Verify all environment variables are set

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/)
- [React Documentation](https://react.dev/)
- [CORS Explanation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
