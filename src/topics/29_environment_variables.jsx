// Topic 29: Environment Variables
// Learn how to use environment variables in React

function App() {
  // In Vite, env variables must start with VITE_
  // Access them with import.meta.env
  
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
  const appName = import.meta.env.VITE_APP_NAME || 'My React App'
  const isDev = import.meta.env.DEV
  const isProd = import.meta.env.PROD
  const mode = import.meta.env.MODE

  return (
    <div style={{ padding: '20px' }}>
      <h1>Topic 29: Environment Variables</h1>

      <h2>Current Environment</h2>
      <p>Mode: {mode}</p>
      <p>Development: {isDev ? 'Yes' : 'No'}</p>
      <p>Production: {isProd ? 'Yes' : 'No'}</p>

      <hr />

      <h2>Custom Environment Variables</h2>
      <p>App Name: {appName}</p>
      <p>API URL: {apiUrl}</p>

      <hr />

      <h2>What are Environment Variables?</h2>
      <p>✓ Configuration values stored outside code</p>
      <p>✓ Different values for dev/staging/production</p>
      <p>✓ Keep sensitive data secure</p>
      <p>✓ Easy to change without code changes</p>

      <h2>Why Use Environment Variables?</h2>
      <p>✓ Store API keys securely</p>
      <p>✓ Different configs per environment</p>
      <p>✓ No hardcoded values</p>
      <p>✓ Team members use own configs</p>

      <h2>How to Use (Vite)</h2>
      <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '5px' }}>
        <h3>Step 1: Create .env file</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`# .env file in project root
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My Awesome App
VITE_API_KEY=your-api-key-here`}
        </pre>

        <h3>Step 2: Access in code</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME`}
        </pre>

        <h3>Step 3: Use the values</h3>
        <pre style={{ backgroundColor: '#1f2937', color: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
{`fetch(import.meta.env.VITE_API_URL + '/users')
  .then(res => res.json())
  .then(data => console.log(data))`}
        </pre>
      </div>

      <hr />

      <h2>Environment Files</h2>
      <p>✓ .env - Default for all environments</p>
      <p>✓ .env.local - Local overrides (gitignored)</p>
      <p>✓ .env.development - Development only</p>
      <p>✓ .env.production - Production only</p>

      <h2>Built-in Vite Variables</h2>
      <p>✓ import.meta.env.MODE - current mode</p>
      <p>✓ import.meta.env.DEV - is development?</p>
      <p>✓ import.meta.env.PROD - is production?</p>
      <p>✓ import.meta.env.BASE_URL - base URL</p>

      <h2>Important Rules</h2>
      <p>⚠️ Must start with VITE_ (Vite requirement)</p>
      <p>⚠️ Restart dev server after changing .env</p>
      <p>⚠️ Add .env.local to .gitignore</p>
      <p>⚠️ Never commit sensitive keys to git</p>

      <h2>Security Note</h2>
      <div style={{ backgroundColor: '#fee2e2', padding: '15px', borderRadius: '5px', border: '2px solid #ef4444' }}>
        <p><strong>⚠️ Warning:</strong> Environment variables in Vite are embedded in the client-side code!</p>
        <p>✗ Don't store secret API keys here (users can see them)</p>
        <p>✓ Only store public configuration values</p>
        <p>✓ Use backend/server for sensitive operations</p>
      </div>

    </div>
  )
}

export default App
