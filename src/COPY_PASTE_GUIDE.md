# Copy-Paste Guide for Visual Studio Code

This guide provides a step-by-step process to copy all files from Figma Make to Visual Studio Code.

## Quick Start Checklist

- [ ] Create project folder
- [ ] Open VS Code
- [ ] Copy all source files
- [ ] Copy UI components from Figma
- [ ] Copy logo asset
- [ ] Install dependencies
- [ ] Start development server

## Step 1: Create Project Structure

Open a terminal and run:

```bash
mkdir personal-task-manager
cd personal-task-manager
mkdir -p public src/components/ui src/contexts src/styles src/assets
```

## Step 2: Create Files in VS Code

Open Visual Studio Code in your project folder:

```bash
code .
```

Now create each file by copying the content from the sections below.

---

## Files to Copy

### 1. public/index.html

**Location**: `public/index.html`

**Content**: Copy from `/public/index.html`

---

### 2. src/index.js

**Location**: `src/index.js`

**Content**: Copy from `/src/index.js`

---

### 3. src/App.js

**Location**: `src/App.js`

**Content**: Copy from `/src/App.js`

---

### 4. src/contexts/AuthContext.jsx

**Location**: `src/contexts/AuthContext.jsx`

**Content**: Copy from `/src/contexts/AuthContext.jsx`

---

### 5. src/components/ProtectedRoute.jsx

**Location**: `src/components/ProtectedRoute.jsx`

**Content**: Copy from `/src/components/ProtectedRoute.jsx`

---

### 6. src/components/Welcome.jsx

**Location**: `src/components/Welcome.jsx`

**Content**: Copy from `/src/components/Welcome.jsx`

---

### 7. src/components/Login.jsx

**Location**: `src/components/Login.jsx`

**Content**: Copy from `/src/components/Login.jsx`

---

### 8. src/components/Register.jsx

**Location**: `src/components/Register.jsx`

**Content**: Copy from `/src/components/Register.jsx`

---

### 9. src/components/Dashboard.jsx

**Location**: `src/components/Dashboard.jsx`

**Content**: Copy from `/src/components/Dashboard.jsx`

---

### 10. src/components/TaskList.jsx

**Location**: `src/components/TaskList.jsx`

**Content**: Copy from `/src/components/TaskList.jsx`

---

### 11. src/components/UserMenu.jsx

**Location**: `src/components/UserMenu.jsx`

**Content**: Copy from `/src/components/UserMenu.jsx`

---

### 12. src/components/CreateTaskModal.jsx

**Location**: `src/components/CreateTaskModal.jsx`

**Content**: Copy from `/src/components/CreateTaskModal.jsx`

---

### 13. src/components/EditTaskModal.jsx

**Location**: `src/components/EditTaskModal.jsx`

**Content**: Copy from `/src/components/EditTaskModal.jsx`

---

### 14. src/components/Unauthorized.jsx

**Location**: `src/components/Unauthorized.jsx`

**Content**: Copy from `/src/components/Unauthorized.jsx`

---

### 15. package.json

**Location**: `package.json` (root)

**Content**: Copy from `/package.json`

---

### 16. .gitignore

**Location**: `.gitignore` (root)

**Content**: Copy from `/.gitignore`

---

## Step 3: Copy from Your Figma Project

### A. UI Components Folder

Copy the entire `components/ui/` folder from your Figma project to `src/components/ui/`

This should include files like:
- button.jsx
- input.jsx
- label.jsx
- select.jsx
- dialog.jsx
- dropdown-menu.jsx
- textarea.jsx
- etc.

### B. Global Styles

Copy your `styles/globals.css` file from Figma to `src/styles/globals.css`

This file should contain:
- Tailwind CSS directives (@tailwind base, components, utilities)
- Custom CSS variables
- Typography styles
- Any custom component styles

### C. Logo Asset

Copy your ZM logo image file to `src/assets/logo.png`

### D. Update Logo Imports

After copying the logo, update all logo imports in these files:
- `src/components/Welcome.jsx`
- `src/components/Login.jsx`
- `src/components/Register.jsx`
- `src/components/Dashboard.jsx`
- `src/components/TaskList.jsx`

Change from:
```javascript
import logo from 'figma:asset/c62f533105c0c1e5b2518d71113997455d7bb5ad.png';
```

To:
```javascript
import logo from '../assets/logo.png';
```

---

## Step 4: Install Dependencies

Open the integrated terminal in VS Code (Ctrl+` or View → Terminal) and run:

```bash
npm install
```

Wait for all dependencies to install.

---

## Step 5: Start Development Server

In the same terminal, run:

```bash
npm start
```

The application should automatically open in your browser at http://localhost:3000

---

## Verification Checklist

After starting the dev server, verify that:

- [ ] Welcome page loads with ZM logo
- [ ] Can navigate to Login page
- [ ] Can navigate to Register page
- [ ] Can register a new user
- [ ] Can login with registered user
- [ ] Dashboard shows with user name
- [ ] Can view Tasks page
- [ ] Can create a new task
- [ ] Can edit a task
- [ ] Can delete a task
- [ ] Can search tasks
- [ ] Can filter tasks by status
- [ ] Logout button works
- [ ] User menu dropdown works
- [ ] Protected routes redirect when not logged in

---

## Troubleshooting Common Issues

### Issue 1: "Module not found: Can't resolve './ui/button'"

**Fix**: Copy all UI components from your Figma project to `src/components/ui/`

### Issue 2: Logo not displaying

**Fix**: 
1. Make sure logo.png is in `src/assets/`
2. Update all logo imports as shown in Step 3D

### Issue 3: Styles not applying

**Fix**:
1. Ensure `globals.css` is copied to `src/styles/`
2. Verify it's imported in `src/index.js`
3. Check that Tailwind directives are present

### Issue 4: "npm: command not found"

**Fix**: Install Node.js from https://nodejs.org/

### Issue 5: Port 3000 already in use

**Fix**: 
- Close other apps using port 3000
- Or the dev server will prompt to use another port (e.g., 3001)

---

## File Summary

Here's what you should have after copying everything:

```
personal-task-manager/
├── public/
│   └── index.html                    ✓ Created
│
├── src/
│   ├── components/
│   │   ├── ui/                       ✓ Copy from Figma
│   │   ├── Welcome.jsx               ✓ Created
│   │   ├── Login.jsx                 ✓ Created
│   │   ├── Register.jsx              ✓ Created
│   │   ├── Dashboard.jsx             ✓ Created
│   │   ├── TaskList.jsx              ✓ Created
│   │   ├── UserMenu.jsx              ✓ Created
│   │   ├── CreateTaskModal.jsx       ✓ Created
│   │   ├── EditTaskModal.jsx         ✓ Created
│   │   ├── Unauthorized.jsx          ✓ Created
│   │   └── ProtectedRoute.jsx        ✓ Created
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx           ✓ Created
│   │
│   ├── styles/
│   │   └── globals.css               ✓ Copy from Figma
│   │
│   ├── assets/
│   │   └── logo.png                  ✓ Copy from Figma
│   │
│   ├── App.js                        ✓ Created
│   └── index.js                      ✓ Created
│
├── .gitignore                        ✓ Created
├── package.json                      ✓ Created
├── README.md                         ✓ Created
└── SETUP_GUIDE.md                    ✓ Created
```

---

## Next Steps After Setup

1. **Test the application thoroughly**
   - Try all features
   - Check responsive design
   - Test on different browsers

2. **Customize to your needs**
   - Modify colors
   - Add new features
   - Adjust layouts

3. **Prepare for production**
   - Run `npm run build`
   - Deploy to hosting service
   - Set up backend API if needed

4. **Version control**
   - Initialize git: `git init`
   - Commit changes: `git add . && git commit -m "Initial commit"`
   - Push to GitHub if desired

---

## Additional Resources

- **React Docs**: https://react.dev/
- **React Router**: https://reactrouter.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Lucide Icons**: https://lucide.dev/

---

## Support

If you run into issues:
1. Check the browser console (F12)
2. Review terminal errors
3. Ensure all files are copied correctly
4. Verify dependencies are installed
5. Check file paths and imports

Happy coding! 🎉
