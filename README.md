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

## ⚡ Quick Usage

Add these lines inside your project’s `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/speedaily/AppLook/applook.css">
<script src="https://cdn.jsdelivr.net/gh/speedaily/AppLook/applook.js" defer></script>
