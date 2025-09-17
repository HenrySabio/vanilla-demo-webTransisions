
# Vanilla Demo: Web Transitions

This portfolio demo project showcases basic applications of smooth page transitions and UI animations using [Barba.js](https://barba.js.org/) and [GSAP](https://greensock.com/gsap/) in a vanilla JavaScript project. The project demonstrates modern web transition techniques for single-page and multi-page experiences, ideal for photographers, designers, or anyone wanting a visually engaging site.

## Features

- **Seamless Page Transitions:** Uses Barba.js to handle navigation between pages without full reloads, enabling smooth transitions and preserving UI state.
- **Animated UI Elements:** GSAP powers the animations for headers, footers, images, and content fade-ins, creating a dynamic and polished look.
- **Intersection Observer Effects:** Elements animate into view as you scroll, enhancing user engagement.
- **Responsive Design:** Works across devices and screen sizes.

## Technologies Used

- HTML5 & CSS3
- Vanilla JavaScript
- [Barba.js](https://barba.js.org/) for page transitions
- [GSAP](https://greensock.com/gsap/) for animations
- [imagesLoaded](https://imagesloaded.desandro.com/) for image load detection

## How It Works

1. **Barba.js** wraps the main content and listens for navigation events. When a user clicks a link, Barba.js intercepts the navigation and triggers custom transition hooks (`once`, `leave`, `enter`).
2. **GSAP** animates the opacity and position of page elements during transitions, such as fading out the current page and fading in the next.
3. **Intersection Observer** detects when headers and images enter the viewport, adding animation classes for scroll-based effects.
4. **imagesLoaded** ensures images are fully loaded before starting transitions, preventing layout shifts.

## Purpose

This demo is showcases general ability to build modern, animated web experiences using lightweight libraries. 

It demonstrates proficiency in:
- Advanced JavaScript animation techniques
- SPA-like navigation for multi-page sites
- Clean, maintainable code structure

---
**Author:** Henry Sabio
**Note:** All images used in this project are original works created by the author. All rights and copyrights are reserved.