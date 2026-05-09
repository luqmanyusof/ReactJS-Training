# Topic 29: Environment Variables

## What is it?
Configuration values stored outside your code that can change between different environments (development, staging, production) without modifying code.

## Why Use Environment Variables?

1. **Security**
   - Keep API keys out of code
   - Don't commit secrets to git
   - Different keys per environment

2. **Flexibility**
   - Change config without code changes
   - Different settings per environment
   - Easy to update

3. **Team Collaboration**
   - Each developer has own config
   - No conflicts in shared code
   - Local overrides possible

4. **Environment-Specific Settings**
   - Dev: localhost API
   - Staging: staging API
   - Production: live API

## How to Use in Vite

### Step 1: Create .env File
```bash
# .env file in project root
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
VITE_API_KEY=demo-key-123
```

### Step 2: Access in Code
```jsx
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME

console.log(apiUrl)  // https://api.example.com
```

### Step 3: Use Values
```jsx
function fetchUsers() {
  fetch(import.meta.env.VITE_API_URL + '/users')
    .then(res => res.json())
    .then(data => console.log(data))
}
```

## Environment Files

| File | Purpose | Git? |
|------|---------|------|
| `.env` | Default for all envs | ✅ Commit |
| `.env.local` | Local overrides | ❌ Don't commit |
| `.env.development` | Dev mode only | ✅ Commit |
| `.env.production` | Prod build only | ✅ Commit |

**Priority:** `.env.local` > `.env.[mode]` > `.env`

## Built-in Vite Variables

```jsx
import.meta.env.MODE        // 'development' or 'production'
import.meta.env.DEV         // true in dev
import.meta.env.PROD        // true in production
import.meta.env.BASE_URL    // base URL of app
```

## Important Rules

### Vite-Specific
1. **Must start with `VITE_`**
   ```bash
   VITE_API_URL=...    # ✅ Works
   API_URL=...         # ❌ Won't work
   ```

2. **Restart dev server**
   - Changes to .env require restart
   - `npm run dev` again

3. **String values**
   - All values are strings
   - Convert if needed: `Number(import.meta.env.VITE_PORT)`

### Security Rules

1. **Add to .gitignore**
   ```gitignore
   .env.local
   ```

2. **Never commit secrets**
   ```bash
   # ❌ Bad - secret in .env
   VITE_SECRET_KEY=abc123xyz

   # ✅ Good - public config only
   VITE_API_URL=https://api.example.com
   ```

## Example .env Files

### .env (Default - committed)
```bash
# Default values for all environments
VITE_APP_NAME=My React App
VITE_API_URL=https://api.example.com
```

### .env.development (Dev - committed)
```bash
# Development overrides
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

### .env.production (Prod - committed)
```bash
# Production settings
VITE_API_URL=https://api.production.com
VITE_DEBUG=false
```

### .env.local (Personal - NOT committed)
```bash
# Your personal overrides
VITE_API_URL=http://192.168.1.100:3000
VITE_API_KEY=my-personal-key
```

## Common Use Cases

### 1. API URLs
```jsx
const API_URL = import.meta.env.VITE_API_URL

fetch(`${API_URL}/users`)
```

### 2. Feature Flags
```jsx
const showBetaFeatures = import.meta.env.VITE_SHOW_BETA === 'true'

{showBetaFeatures && <BetaFeature />}
```

### 3. Debug Mode
```jsx
const DEBUG = import.meta.env.VITE_DEBUG === 'true'

if (DEBUG) {
  console.log('Debug info:', data)
}
```

### 4. App Configuration
```jsx
const config = {
  appName: import.meta.env.VITE_APP_NAME,
  version: import.meta.env.VITE_VERSION,
  maxUploadSize: Number(import.meta.env.VITE_MAX_UPLOAD_MB)
}
```

## Type Safety (TypeScript)

```typescript
// vite-env.d.ts
interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_NAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

## Best Practices

1. **Use descriptive names**
   - `VITE_API_BASE_URL` better than `VITE_URL`

2. **Provide defaults**
   ```jsx
   const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'
   ```

3. **Document required variables**
   ```bash
   # .env.example (commit this)
   VITE_API_URL=your-api-url-here
   VITE_APP_NAME=your-app-name
   ```

4. **Validate on startup**
   ```jsx
   if (!import.meta.env.VITE_API_URL) {
     throw new Error('VITE_API_URL is required')
   }
   ```

## Security Warning

**⚠️ IMPORTANT: Vite env vars are PUBLIC**

```jsx
// These are embedded in client-side JavaScript
// Anyone can see them in browser DevTools!

// ❌ DON'T store:
VITE_SECRET_API_KEY=...
VITE_DATABASE_PASSWORD=...
VITE_PRIVATE_KEY=...

// ✅ DO store:
VITE_API_URL=...
VITE_APP_NAME=...
VITE_GOOGLE_MAPS_KEY=...  // Public keys only!
```

**For secrets:** Use backend/server-side environment variables instead.

## Troubleshooting

**Variable is undefined:**
- Check it starts with `VITE_`
- Restart dev server
- Check .env file location (project root)

**Changes not applied:**
- Restart dev server
- Clear cache: `npm run dev -- --force`

**Different value in production:**
- Check `.env.production` file
- Verify build process
