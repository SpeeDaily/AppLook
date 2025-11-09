// AppLook.js — Make any PWA feel like a native app
// © 2025 speedaily. Licensed under MIT.

/* ----------------------------------------------------------
   BASIC APP-LIKE POLISH
---------------------------------------------------------- */

/**
 * Disable Google Translate alerts/popups
 * by adding <meta name="google" content="notranslate">
 * This prevents browsers from showing the “Translate this page?” banner.
 */
(() => {
  const meta = document.createElement('meta');
  meta.name = 'google';
  meta.content = 'notranslate';
  document.head.appendChild(meta);
})();

// Optionally set <html lang="en">
document.documentElement.setAttribute('lang', 'en');

// Disable context menu globally
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable long-press & middle/shift click on links/images
const disableLongPress = el => {
  el.addEventListener('touchstart', e => e.preventDefault(), { passive: false });
  el.addEventListener('click', e => {
    if (e.which === 2 || e.shiftKey || e.ctrlKey || e.metaKey) {
      e.preventDefault();
      alert("Opening in new tabs/windows is disabled.");
    }
  });
};
document.querySelectorAll('a, img').forEach(disableLongPress);

// Optional: block pinch zoom gestures
document.addEventListener('gesturestart', e => e.preventDefault());

// Register Service Worker (if available)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(reg => console.log('[AppLook] Service Worker registered:', reg.scope))
      .catch(err => console.error('[AppLook] Service Worker failed:', err));
  });
}

/* ----------------------------------------------------------
   SMART ORIENTATION HANDLING (e.g. for video fullscreen)
---------------------------------------------------------- */
document.addEventListener('fullscreenchange', async () => {
  try {
    const fsElement = document.fullscreenElement;

    // Check if the fullscreen element is likely a video iframe
    if (fsElement && fsElement.tagName === 'IFRAME' && /youtube|vimeo|video/i.test(fsElement.src)) {
      await screen.orientation.unlock?.();
      await screen.orientation.lock?.('landscape');
      console.log('[AppLook] Landscape mode enabled for fullscreen media');
    } else {
      await screen.orientation.lock?.('portrait');
      console.log('[AppLook] Returned to portrait mode');
    }
  } catch (err) {
    console.warn('[AppLook] Orientation handling failed:', err);
  }
});
