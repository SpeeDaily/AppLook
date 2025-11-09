# AppLook.js
> Make your PWA feel like a real native app — instantly.

AppLook is a minimal, plug-and-play CSS + JS utility that adds mobile-app polish to any web project.  
It disables browser quirks, removes unwanted gestures, and makes your Progressive Web App feel like a native experience.

---

## 🚀 Features

- 🎨 Disables blue tap highlights and text/image selection.
- 🈲 **Hides Google Translate popups** automatically using  
  `<meta name="google" content="notranslate">`.
- 🧭 Prevents pinch-zoom and accidental gestures (keeps pull-to-refresh intact).
- 🚫 Blocks long-press, context menu, and multi-click (Ctrl/Shift) actions on links & images.
- 🧩 Handles fullscreen orientation for videos (e.g., YouTube, Vimeo).
- ⚙️ Optional built-in Service Worker registration.


---

## ⚙️ Service Worker Setup

AppLook includes a minimal, editable Service Worker template to help you get started with offline support.

> 🧠 You **must edit this file** to match your project structure!

**Default file:**  
[`service-worker.js`](./service-worker.js)

### 🔧 What You Should Change:
- Update `CACHE_NAME` to your app’s version name (e.g., `"MyApp-v1"`).
- Update the `FILES_TO_CACHE` list with your actual file paths.
- Replace `/offline.html` with your custom offline page or remove it entirely.
- (Optional) Add caching strategies for APIs or dynamic data.

Example:
```js
const CACHE_NAME = 'MyAwesomeApp-v2';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/css/main.css',
  '/js/app.js',
  '/offline.html'
];
---


## ⚡ Quick Usage

Add these lines inside your project’s `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/speedaily/AppLook/applook.css">
<script src="https://cdn.jsdelivr.net/gh/speedaily/AppLook/applook.js" defer></script>
