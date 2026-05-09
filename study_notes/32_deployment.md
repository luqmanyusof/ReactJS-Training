# Topic 30: Deployment Basics

## What is it?
The process of building and publishing your React application to the internet so anyone can access it.

## Why Deploy?

1. **Share Your Work**
   - Show projects to employers
   - Share with friends/clients
   - Portfolio demonstrations

2. **Test in Production**
   - Real-world performance
   - Actual user experience
   - Find production-only bugs

3. **Get Feedback**
   - Users can access and test
   - Collect real feedback
   - Iterate and improve

4. **Learn the Full Cycle**
   - Complete development workflow
   - Understand deployment process
   - Professional experience

## Build Process

### Step 1: Build for Production
```bash
npm run build
```

**What happens:**
- Code is minified and optimized
- Dead code is eliminated
- Assets are compressed
- Output goes to `dist/` folder
- Ready for production use

### Step 2: Test Build Locally
```bash
npm run preview
```

**Why test:**
- Catch build issues early
- Verify everything works
- Check for broken links
- Test before going live

## Popular Hosting Platforms

### 1. Vercel (Recommended for React/Vite)

**Pros:**
- ✅ Free for personal projects
- ✅ Automatic deployments from Git
- ✅ Built-in CI/CD
- ✅ Optimized for modern frameworks
- ✅ Custom domains included
- ✅ Serverless functions support

**How to deploy:**
```bash
# Method 1: CLI
npm install -g vercel
vercel

# Method 2: Import from GitHub
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Import repository
# 4. Click Deploy
```

### 2. Netlify

**Pros:**
- ✅ Free tier generous
- ✅ Drag-and-drop deployment
- ✅ Forms and functions
- ✅ Split testing
- ✅ Great documentation

**How to deploy:**
```bash
# Method 1: Drag and drop
npm run build
# Upload dist/ folder at app.netlify.com/drop

# Method 2: CLI
npm install -g netlify-cli
netlify deploy --prod
```

### 3. GitHub Pages

**Pros:**
- ✅ Completely free
- ✅ yourname.github.io domain
- ✅ Perfect for demos/portfolios
- ✅ GitHub integration

**How to deploy:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

### 4. Other Options

- **Render**: Full-stack hosting
- **Railway**: Apps and databases
- **Cloudflare Pages**: Fast global CDN
- **Firebase Hosting**: Google platform

## Deployment Workflow

### Standard Process
```
1. Write code locally
   ↓
2. Test in development (npm run dev)
   ↓
3. Commit to Git
   ↓
4. Push to GitHub
   ↓
5. Deploy to hosting platform
   ↓
6. Platform builds and publishes
   ↓
7. Your app is live!
```

### Continuous Deployment
```
Push to GitHub
   ↓
Automatic build
   ↓
Automatic tests (if configured)
   ↓
Automatic deployment
   ↓
Live in minutes!
```

## Essential Files

### .gitignore
```gitignore
# Don't commit these
node_modules/
dist/
.env.local
.DS_Store
*.log
```

### package.json (check scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### .env files
```bash
# .env.production
VITE_API_URL=https://api.production.com
VITE_APP_NAME=My App
```

## Configuration Examples

### Vercel (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Netlify (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Environment Variables in Production

### Add in Platform Settings
1. Go to project settings
2. Find "Environment Variables"
3. Add your variables:
   - `VITE_API_URL`
   - `VITE_API_KEY`
   - etc.
4. Redeploy

**Important:** Don't commit secrets to Git!

## Custom Domains

### Steps (Platform-specific)
1. Buy domain (Namecheap, GoDaddy, etc.)
2. Go to platform settings
3. Add custom domain
4. Platform provides DNS records
5. Update DNS at domain registrar
6. Wait for DNS propagation (few hours)
7. Enable HTTPS (automatic on most platforms)

### Example DNS Records
```
Type: CNAME
Name: www
Value: your-app.vercel.app

Type: A
Name: @
Value: 76.76.21.21 (platform's IP)
```

## Common Deployment Issues

### 1. 404 on Page Refresh
**Problem:** Single-page apps need special routing

**Solution:** Add redirect rule
```toml
# Netlify
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Environment Variables Not Working
**Problem:** Variables from .env not available

**Solution:**
- Add them in platform settings
- Make sure they start with `VITE_`
- Rebuild the app

### 3. Build Fails
**Problem:** Build works locally but fails on platform

**Solution:**
- Check Node.js version match
- Read build logs carefully
- Test `npm run build` locally
- Check for missing dependencies

### 4. Assets Not Loading
**Problem:** Images/files show 404

**Solution:**
- Use `/` prefix for public assets
- Check `public` folder structure
- Verify build includes assets

## Performance Optimization

### Before Deploying
- [ ] Remove console.logs
- [ ] Optimize images (compress, use WebP)
- [ ] Code splitting (React.lazy)
- [ ] Remove unused dependencies
- [ ] Enable gzip/brotli compression
- [ ] Add meta tags for SEO

### After Deploying
- Use Lighthouse in Chrome DevTools
- Check Core Web Vitals
- Test on slow connections
- Monitor bundle size

## Monitoring & Analytics

### Add to Your App
```jsx
// Google Analytics example
import ReactGA from 'react-ga4'

ReactGA.initialize('G-XXXXXXXXXX')
ReactGA.send("pageview")
```

### Platform Analytics
- Vercel Analytics
- Netlify Analytics
- Cloudflare Web Analytics

## Post-Deployment Checklist

After deploying, verify:

✅ **Functionality**
- All pages load correctly
- Links work
- Forms submit
- API calls succeed

✅ **Responsive Design**
- Test on mobile
- Test on tablet
- Test different browsers

✅ **Performance**
- Page load speed
- Images optimized
- No console errors

✅ **SEO**
- Meta tags present
- Open Graph tags
- Proper titles

## Rollback Strategy

Most platforms allow:
- View deployment history
- Rollback to previous version
- Instant with one click

```bash
# Vercel CLI
vercel rollback

# Or use dashboard
```

## Best Practices

1. **Always test locally first**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use environment variables**
   - Different configs per environment
   - Keep secrets secure

3. **Set up automatic deployments**
   - Connect GitHub repository
   - Auto-deploy on push

4. **Monitor your app**
   - Set up error tracking
   - Monitor performance
   - Check analytics

5. **Keep dependencies updated**
   ```bash
   npm outdated
   npm update
   ```

## Resources

- **Vercel Docs**: vercel.com/docs
- **Netlify Docs**: docs.netlify.com
- **Vite Deployment**: vitejs.dev/guide/static-deploy
- **GitHub Pages**: pages.github.com

## Next Steps

After deploying:
1. Share your live URL!
2. Add to portfolio
3. Get feedback from users
4. Iterate and improve
5. Build more projects!

🎉 **Congratulations on deploying your React app!**
