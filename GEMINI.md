# Johnny Castaway Web - Project Context

Johnny Castaway Web is a modern, web-based homage to the classic 1992 Sierra screensaver. It features an animated island scene where the character "Johnny" performs various activities based on a randomized state machine and the local system time.

## 🚀 Project Overview

*   **Purpose:** Provides a nostalgic, ambient screensaver experience for web browsers, smart TVs, and car infotainment systems.
*   **Core Technology:** Static Web Stack (HTML5, CSS3, ES6 JavaScript).
*   **Key Features:**
    *   **Dynamic Island Scene:** CSS/SVG-based visuals for resolution independence.
    *   **Johnny's State Machine:** Randomized behaviors (Fishing, Sleeping, Exercising, etc.).
    *   **Day/Night Cycle:** Automatic visual updates based on local system time.
    *   **Ambient Audio:** Gentle ocean waves and seagull cries.
*   **Architecture:** Single-page application (SPA) with a lightweight behavioral state machine.

## 🛠️ Building and Running

Since this is a static web application, it does not require a compilation step.

*   **Local Development:** Open `index.html` directly in any modern web browser.
*   **Deployment:** Host via GitHub Pages or any static web server.

## 📂 Key Files

*   `index.html`: Main UI structure and container for the island scene.
*   `style.css`: Visual layout, CRT effects, and keyframe animations.
*   `script.js`: Core behavioral logic and environment management.
*   `GEMINI.md`: Project-specific context and development guidelines.

## 📜 Development Conventions

*   **Compatibility:** Maintain high performance and compatibility for mobile and tablet browsers (e.g., car infotainment screens).
*   **Version Tracking:** Update the version tag in `index.html` (`#version-tag`) when making changes. The format is `vX.X.X (YYYY-MM-DD HH:mm TIMEZONE)`.
*   **Visuals:** Use CSS/SVG as much as possible to ensure the scene looks sharp on high-resolution displays.

## 🧪 Testing

Testing is performed manually by:
1.  Verifying the island and Johnny display correctly on different screen sizes.
2.  Ensuring Johnny transitions between states without logic errors.
3.  Manually adjusting system time to verify the Day/Night cycle works as intended.
