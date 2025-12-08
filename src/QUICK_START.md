# ⚡ Quick Start Guide

Get your Personal Task Manager running in 5 minutes!

## 📦 What You'll Need

- Node.js installed
- MongoDB Atlas account (or your backend's MongoDB URI)
- 2 terminal windows

## 🚀 Step-by-Step Setup

### Terminal 1: Backend

```bash
# 1. Navigate to backend folder
cd personal-task-manager-backend

# 2. Install dependencies (first time only)
npm install

# 3. Create .env file with these contents:
# MONGO_URI=mongodb+srv://root:toor@devcluster0.pvlgwkk.mongodb.net/personal_task_manager?retryWrites=true&w=majority
# JWT_SECRET=this_is_my_very_very_strong_jwt_secret
# PORT=5000

# 4. Start the backend
npm run dev

# ✅ You should see: "Server started on port 5000" and "MongoDB connected"
```

### Terminal 2: Frontend

```bash
# 1. Navigate to frontend folder
cd personal-task-manager

# 2. Install dependencies (first time only)
npm install

# 3. Create .env file with:
# REACT_APP_API_URL=http://localhost:5000

# 4. Start the frontend
npm start

# ✅ Browser opens automatically at http://localhost:3000
```

## 🎯 First Use

1. **Register a new account:**
   - Click "Register"
   - Fill in: Name, Email, Password
   - Click "Create Account"
   - Auto-logged in → Dashboard

2. **Create your first task:**
   - Click "Add New Task"
   - Fill in task details
   - Click "Save Task"
   - Task appears!

3. **Explore:**
   - Dashboard shows stats
   - Tasks page has full CRUD
   - Search and filter tasks
   - Edit/Delete tasks

## ⚠️ Common Issues

### Issue: Backend won't start
```bash
# Solution: Check your MongoDB URI
# Make sure MONGO_URI is correct in backend/.env
# Ensure MongoDB Atlas allows your IP
```

### Issue: Frontend can't connect
```bash
# Solution: Check backend is running
# Visit http://localhost:5000 in browser
# Should see: "Personal Task Manager API is running"

# Also verify .env in frontend:
# REACT_APP_API_URL=http://localhost:5000
```

### Issue: Login/Register fails
```bash
# Check backend terminal for errors
# Ensure MongoDB is connected
# Clear browser localStorage and try again
```

## 📱 Quick Test

After setup, try this flow:

1. ✅ Register: test@example.com / password123
2. ✅ Create task: "My First Task"
3. ✅ Edit the task
4. ✅ Delete the task
5. ✅ Logout
6. ✅ Login again

## 🔗 URLs

- **Frontend:** http://localhost:3000
- **Backend:** http://localhost:5000
- **API Test:** http://localhost:5000/api/users (should return 404, means it's working!)

## 📋 Ports Used

| Service | Port | URL |
|---------|------|-----|
| Frontend | 3000 | http://localhost:3000 |
| Backend | 5000 | http://localhost:5000 |

## 🛑 Stopping Servers

Press `Ctrl + C` in each terminal window

## 🎨 What You Get

- ✅ Full authentication system
- ✅ Dashboard with task statistics
- ✅ Create, Read, Update, Delete tasks
- ✅ Search and filter functionality
- ✅ Beautiful, responsive UI
- ✅ Secure JWT authentication
- ✅ MongoDB database storage

## 📚 Next Steps

1. Read `BACKEND_INTEGRATION_GUIDE.md` for detailed info
2. Read `README_BACKEND_INTEGRATION.md` for full documentation
3. Customize the app to your needs!

## 🆘 Need Help?

1. Check browser console (F12)
2. Check backend terminal logs
3. Verify both .env files are correct
4. Ensure MongoDB is accessible
5. Try clearing browser cache/localStorage

## 🎉 Success Checklist

- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] MongoDB connected
- [ ] Can register a new user
- [ ] Can login
- [ ] Can create a task
- [ ] Can view tasks
- [ ] Can edit a task
- [ ] Can delete a task
- [ ] Can logout

---

**That's it! You're ready to go! 🚀**

If everything works, you should have a fully functional task management app running locally!
