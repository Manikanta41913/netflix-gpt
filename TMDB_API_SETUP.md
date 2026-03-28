# 🎬 TMDB API Setup Guide - Permanent Solution

## 🚨 Problem: API Errors Keep Happening

If you're seeing CORS errors or "Failed to fetch" errors repeatedly, it's because:

1. TMDB API tokens can expire
2. Rate limits can be hit
3. Network issues can occur
4. Invalid tokens cause immediate failures

## ✅ Permanent Solution Implemented

We've implemented a robust error handling system with:

### 1. **Retry Logic with Exponential Backoff**

- Automatically retries failed requests 3 times
- Waits progressively longer between retries (1s, 2s, 4s)
- Prevents overwhelming the API

### 2. **Graceful Error Handling**

- Returns empty arrays instead of crashing
- Logs detailed error messages for debugging
- Continues working even if some API calls fail

### 3. **Error Boundary**

- Catches any unexpected errors
- Shows user-friendly error message
- Provides reload button

### 4. **Loading States**

- Shows loading spinner while fetching data
- Better user experience

## 🔧 How to Get Your TMDB API Token

### Step 1: Create TMDB Account

1. Go to https://www.themoviedb.org/
2. Click "Join TMDB" (top right)
3. Fill in your details and verify email

### Step 2: Request API Access

1. Go to https://www.themoviedb.org/settings/api
2. Click "Request an API Key"
3. Choose "Developer"
4. Fill in the application form:
   - **Application Name:** Netflix GPT Clone
   - **Application URL:** http://localhost:5173
   - **Application Summary:** Learning project - Netflix clone with React

### Step 3: Get Your Token

1. Once approved, you'll see your API Key and Read Access Token
2. Copy the **"API Read Access Token (v4 auth)"** (starts with "eyJ...")

### Step 4: Update Your Code

**Option A: Quick Fix (Not Recommended for Production)**
Update `src/utils/constants.js`:

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_TOKEN_HERE",
  },
};
```

**Option B: Secure Method (Recommended)**

1. Create `.env.local` file in project root:

```env
VITE_TMDB_BEARER_TOKEN=your_actual_token_here
```

2. Update `src/utils/constants.js`:

```javascript
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
  },
};
```

3. Restart dev server:

```bash
npm run dev
```

## 🛡️ What We've Fixed

### Before (Fragile):

```javascript
// Would crash on any error
const data = await fetch(url, API_OPTIONS);
const json = await data.json();
dispatch(addMovies(json.results));
```

### After (Robust):

```javascript
// Handles errors gracefully with retries
const data = await fetchFromTMDB(url);
if (data && data.results) {
  dispatch(addMovies(data.results));
} else {
  dispatch(addMovies([])); // Empty array instead of crash
}
```

## 🎯 Benefits of New System

1. **Auto-Retry:** Failed requests automatically retry 3 times
2. **No Crashes:** App continues working even if some API calls fail
3. **Better Logging:** Clear console messages show what's happening
4. **User-Friendly:** Error boundary catches unexpected errors
5. **Graceful Degradation:** Shows empty lists instead of breaking

## 🔍 Debugging Tips

### Check if API is working:

Open browser console and look for:

- ✅ `Successfully fetched data from TMDB` - Working!
- ❌ `All 3 attempts failed` - Token issue or network problem

### Common Issues:

**Issue 1: "401 Unauthorized"**

- **Cause:** Invalid or expired token
- **Fix:** Get new token from TMDB

**Issue 2: "429 Too Many Requests"**

- **Cause:** Rate limit exceeded
- **Fix:** Wait a few minutes, retry logic will handle it

**Issue 3: "Network Error"**

- **Cause:** Internet connection or CORS
- **Fix:** Check internet, retry logic will handle temporary issues

**Issue 4: "Failed to fetch"**

- **Cause:** CORS or invalid URL
- **Fix:** Verify token is correct, check browser console

## 📊 Rate Limits

TMDB Free Tier:

- 40 requests per 10 seconds
- 1000 requests per day

Our app makes ~5 requests on load (Now Playing, Popular, Top Rated, Upcoming, Trailer), so you're well within limits.

## 🚀 Testing Your Setup

1. Clear browser cache (Ctrl+Shift+R)
2. Open browser console (F12)
3. Reload page
4. Look for green checkmarks: ✅ Successfully fetched data
5. If you see red X's: ❌ Check your token

## 📝 Maintenance

**Token Expiration:**

- TMDB tokens typically don't expire
- If they do, just get a new one following Step 3 above

**Backup Plan:**

- Keep your old token in a safe place
- Generate a new token before the old one expires
- Update `.env.local` with new token

## 🎉 You're All Set!

With this setup:

- ✅ Automatic retries on failure
- ✅ Graceful error handling
- ✅ No more crashes
- ✅ Better user experience
- ✅ Easy to debug

Your app will now handle API issues like a production application! 🚀
