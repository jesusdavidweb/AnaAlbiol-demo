# FIX APPLIED: Home Page Content Visibility

I have fixed the issue where the home page content was invisible.

The problem was in `css/style.css`: the parent container (`.hero-content`) was set to `opacity: 0`, which hid everything inside relevant for the animation.

**I have updated `css/style.css` to fix this.**

## REQUIRED ACTION:
**Please re-upload `css/style.css` to your server.**

The animation should now work correctly, revealing the text and images smoothly.
