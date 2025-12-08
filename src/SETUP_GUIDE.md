# Setup Guide - Personal Task Manager

This guide will help you set up the Personal Task Manager React application in Visual Studio Code.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)

## Step-by-Step Setup

### 1. Create Project Directory

Open your terminal or command prompt and run:

```bash
mkdir personal-task-manager
cd personal-task-manager
```

### 2. Copy Project Files

Copy all the project files from Figma to your `personal-task-manager` folder. Your directory structure should look like this:

```
personal-task-manager/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Welcome.jsx
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── TaskList.jsx
│   │   ├── CreateTaskModal.jsx
│   │   ├── EditTaskModal.jsx
│   │   ├── UserMenu.jsx
│   │   ├── Unauthorized.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── contexts/
│   │   └── AuthContext.jsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

### 3. Install Dependencies

Open Visual Studio Code:
```bash
code .
```

Then open the integrated terminal in VS Code (View → Terminal or Ctrl+`) and run:

```bash
npm install
```

This will install all required dependencies:
- React
- React DOM
- React Router DOM
- Lucide React (icons)
- Tailwind CSS
- and other necessary packages

### 4. Copy UI Components

The project uses pre-built UI components. You'll need to copy the `ui` folder from your Figma project into `src/components/ui/`. This folder should contain components like:
- button.jsx
- input.jsx
- label.jsx
- select.jsx
- dialog.jsx
- dropdown-menu.jsx
- textarea.jsx
- etc.

### 5. Copy Assets

If you have the ZM logo image, place it in the appropriate location. The code references:
```javascript
import logo from 'figma:asset/c62f533105c0c1e5b2518d71113997455d7bb5ad.png';
```

For a standard React setup, you may need to:
1. Place the logo in `src/assets/` or `public/images/`
2. Update all import statements to:
```javascript
import logo from '../assets/logo.png';
// or
import logo from '/images/logo.png';
```

### 6. Copy Global Styles

Ensure your `src/styles/globals.css` file includes all Tailwind CSS configuration and custom styles from the Figma project.

### 7. Start Development Server

Run the following command in the VS Code terminal:

```bash
npm start
```

The application should open automatically in your browser at [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Issue: Module Not Found Errors

**Problem**: You see errors like `Module not found: Can't resolve './ui/button'`

**Solution**: 
- Make sure all UI components are copied to `src/components/ui/`
- Check that file names match the imports (case-sensitive)
- Verify all files have `.jsx` extension

### Issue: Logo Not Displaying

**Problem**: The ZM logo doesn't appear

**Solution**:
1. Copy the logo image to your project
2. Update import paths in all component files:
   - `Welcome.jsx`
   - `Login.jsx`
   - `Register.jsx`
   - `Dashboard.jsx`
   - `TaskList.jsx`

### Issue: Styles Not Applying

**Problem**: The app looks unstyled

**Solution**:
- Ensure `globals.css` is properly imported in `index.js`
- Check that Tailwind CSS is configured correctly
- Verify the `@tailwind` directives are in `globals.css`

### Issue: React Router Not Working

**Problem**: Navigation doesn't work or shows blank pages

**Solution**:
- Verify `react-router-dom` is installed
- Check that all routes in `App.js` are correct
- Ensure `BrowserRouter` is wrapping your routes

## Environment Setup (Optional)

### VS Code Extensions (Recommended)

Install these VS Code extensions for better development experience:
1. **ES7+ React/Redux/React-Native snippets** - Code snippets
2. **Prettier** - Code formatter
3. **ESLint** - JavaScript linter
4. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
5. **Auto Import** - Automatically finds and adds imports

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder, ready for deployment.

## Next Steps

1. Test all functionality:
   - User registration
   - Login/logout
   - Creating tasks
   - Editing tasks
   - Deleting tasks
   - Search and filter

2. Customize as needed:
   - Update colors in component files
   - Modify task fields
   - Add new features

3. Deploy:
   - Use services like Vercel, Netlify, or GitHub Pages
   - Configure backend API if needed

## Support

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Review the terminal output for build errors
3. Ensure all dependencies are installed correctly
4. Verify all files are in the correct locations

## Additional Resources

- [React Documentation](https://react.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

Happy coding! 🚀
