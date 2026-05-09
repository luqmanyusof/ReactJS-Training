// Topic 30: Deployment Basics
// Learn how to deploy your React app to production

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1>Topic 30: Deployment Basics</h1>

      <div style={{ backgroundColor: '#d1fae5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>🎉 Congratulations!</h2>
        <p>You've completed all 30 React topics!</p>
        <p>Now let's deploy your app to the internet!</p>
      </div>

      <hr />

      <h2>Step 1: Build for Production</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`# Run build command
npm run build

# Creates 'dist' folder with optimized files
# ✓ Minified JavaScript
# ✓ Optimized CSS
# ✓ Compressed assets
# ✓ Production-ready`}
        </pre>
      </div>

      <hr />

      <h2>Step 2: Test Build Locally</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`# Preview production build
npm run preview

# Opens at http://localhost:4173
# Test everything works before deploying`}
        </pre>
      </div>

      <hr />

      <h2>Step 3: Choose Hosting Platform</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px', margin: '20px 0' }}>
        <div style={{ border: '2px solid #2563eb', padding: '15px', borderRadius: '8px' }}>
          <h3>Vercel (Recommended)</h3>
          <p>✓ Free for personal projects</p>
          <p>✓ Automatic deployments</p>
          <p>✓ Custom domains</p>
          <p>✓ Best for React/Vite</p>
        </div>

        <div style={{ border: '2px solid #10b981', padding: '15px', borderRadius: '8px' }}>
          <h3>Netlify</h3>
          <p>✓ Free tier available</p>
          <p>✓ Easy to use</p>
          <p>✓ Forms and functions</p>
          <p>✓ Great for static sites</p>
        </div>

        <div style={{ border: '2px solid #f59e0b', padding: '15px', borderRadius: '8px' }}>
          <h3>GitHub Pages</h3>
          <p>✓ Completely free</p>
          <p>✓ GitHub integration</p>
          <p>✓ yourname.github.io</p>
          <p>✓ Good for demos</p>
        </div>
      </div>

      <hr />

      <h2>Deploy to Vercel (Easiest)</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
        <h3>Option 1: Using Vercel CLI</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`# Install Vercel CLI
npm install -g vercel

# Deploy (in project folder)
vercel

# Follow prompts
# ✓ Login with GitHub
# ✓ Link project
# ✓ Deploy!

# Your app is live at: https://your-app.vercel.app`}
        </pre>

        <h3>Option 2: Using Vercel Website</h3>
        <ol>
          <li>Go to <a href="https://vercel.com" target="_blank">vercel.com</a></li>
          <li>Sign up with GitHub</li>
          <li>Click "New Project"</li>
          <li>Import your GitHub repository</li>
          <li>Click "Deploy" (auto-detects Vite!)</li>
          <li>Done! Your app is live!</li>
        </ol>
      </div>

      <hr />

      <h2>Deploy to Netlify</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
        <h3>Using Netlify Drop</h3>
        <ol>
          <li>Run: <code>npm run build</code></li>
          <li>Go to <a href="https://app.netlify.com/drop" target="_blank">app.netlify.com/drop</a></li>
          <li>Drag and drop the <code>dist</code> folder</li>
          <li>Done! Instant deployment!</li>
        </ol>

        <h3>Using Netlify CLI</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod

# Follow prompts to link site`}
        </pre>
      </div>

      <hr />

      <h2>Important Files for Deployment</h2>
      
      <h3>1. Create .gitignore</h3>
      <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`node_modules/
dist/
.env.local
.DS_Store`}
      </pre>

      <h3>2. Check package.json scripts</h3>
      <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}`}
      </pre>

      <hr />

      <h2>Post-Deployment Checklist</h2>
      <div style={{ backgroundColor: '#fff3cd', padding: '15px', borderRadius: '5px' }}>
        <p>✅ Test all pages work</p>
        <p>✅ Check responsive design</p>
        <p>✅ Test forms and API calls</p>
        <p>✅ Check browser console for errors</p>
        <p>✅ Test on mobile devices</p>
        <p>✅ Share your live URL!</p>
      </div>

      <hr />

      <h2>Custom Domain (Optional)</h2>
      <p>1. Buy domain from Namecheap, GoDaddy, etc.</p>
      <p>2. Add domain in Vercel/Netlify settings</p>
      <p>3. Update DNS records (platform provides instructions)</p>
      <p>4. Wait for DNS propagation (few hours)</p>
      <p>5. Your app is live at your domain!</p>

      <hr />

      <h2>Continuous Deployment</h2>
      <div style={{ backgroundColor: '#e0f2fe', padding: '15px', borderRadius: '5px' }}>
        <p>When you connect GitHub to Vercel/Netlify:</p>
        <p>✓ Push to main branch = Auto deploy</p>
        <p>✓ Preview deployments for PRs</p>
        <p>✓ Rollback to previous versions</p>
        <p>✓ Environment variables management</p>
      </div>

      <hr />

      <h2>Common Issues</h2>
      <div style={{ backgroundColor: '#fee2e2', padding: '15px', borderRadius: '5px' }}>
        <h3>404 on refresh</h3>
        <p>Solution: Add redirect rules (platform-specific)</p>
        
        <h3>Environment variables not working</h3>
        <p>Solution: Add them in platform settings, rebuild</p>
        
        <h3>Build fails</h3>
        <p>Solution: Check build logs, fix errors, try locally first</p>
      </div>

      <hr />

      <div style={{ backgroundColor: '#d1fae5', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
        <h2>🚀 You're Ready!</h2>
        <p>You now know how to build and deploy React applications!</p>
        <p>Keep learning, keep building, and share your projects!</p>
        <p><strong>Happy Coding! 💻✨</strong></p>
      </div>

    </div>
  )
}

export default App
