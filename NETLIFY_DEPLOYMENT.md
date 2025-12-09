# Netlify Deployment Guide

This guide will walk you through deploying your Personal Task Manager frontend to Netlify.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. Your code pushed to a Git repository
3. A Netlify account (free tier is sufficient)

## Step-by-Step Deployment Process

### Step 1: Prepare Your Repository

1. **Commit all your changes:**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   ```

2. **Push to your Git repository:**
   ```bash
   git push origin main
   ```
   (Replace `main` with your branch name if different)

### Step 2: Create a Netlify Account

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Sign up" and choose to sign up with GitHub (recommended)
3. Authorize Netlify to access your GitHub account

### Step 3: Deploy from Git (Recommended Method)

#### Option A: Deploy via Netlify Dashboard

1. **Add a new site:**
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

2. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
   - Netlify should auto-detect these from `netlify.toml`, but verify them

3. **Environment variables (if needed):**
   - Click "Show advanced" → "New variable"
   - If you're using environment variables, add them here
   - For example: `VITE_API_BASE_URL` = `https://personal-task-manager-backend-mrkg.onrender.com/api`

4. **Deploy:**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)

#### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Initialize and deploy:**
   ```bash
   netlify init
   ```
   - Follow the prompts to link your site
   - Choose "Create & configure a new site"
   - Select your team
   - Choose a site name (or use the suggested one)

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

### Step 4: Verify Deployment

1. After deployment, Netlify will provide you with a URL like:
   `https://your-site-name.netlify.app`

2. **Test your application:**
   - Visit the provided URL
   - Test registration and login
   - Test creating, editing, and deleting tasks
   - Verify all routes work (try refreshing on different pages)

### Step 5: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the instructions to configure your domain

## Important Notes

### Build Configuration

- **Build command:** `npm run build`
- **Publish directory:** `build`
- These are configured in `netlify.toml` and will be auto-detected

### Environment Variables

If you need to use different API URLs for different environments:

1. Go to **Site settings** → **Environment variables**
2. Add variables like:
   - `VITE_API_BASE_URL` = `https://personal-task-manager-backend-mrkg.onrender.com/api`

Then update your code to use:
```typescript
const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://personal-task-manager-backend-mrkg.onrender.com/api";
```

### Continuous Deployment

- Netlify automatically deploys when you push to your main branch
- You can configure branch deploys in **Site settings** → **Build & deploy** → **Continuous Deployment**

### Troubleshooting

**Build fails:**
- Check the build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version (should be 18+)

**Routes not working:**
- The `_redirects` file should be in the `public` folder
- Verify `netlify.toml` has the redirect rule

**API calls failing:**
- Check CORS settings on your backend
- Verify the API URL is correct
- Check browser console for errors

## Post-Deployment Checklist

- [ ] Test user registration
- [ ] Test user login
- [ ] Test creating a task
- [ ] Test editing a task
- [ ] Test deleting a task
- [ ] Test all routes (refresh on different pages)
- [ ] Verify API connection to backend
- [ ] Check mobile responsiveness

## Support

If you encounter issues:
1. Check Netlify build logs
2. Check browser console for errors
3. Verify backend is accessible and CORS is configured
4. Review Netlify documentation: https://docs.netlify.com

