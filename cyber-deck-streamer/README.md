# ⚡ Cyberpunk CRT Terminal UI & Code Streamer (DedSec Edition)

A highly interactive, responsive, and visually stunning retro cyberpunk terminal UI. This project features live code streaming, modern font ligatures, an immersive CRT monitor simulator, and a dedicated Watch Dogs DedSec active node preview panel with fully customizable hacker text effects.

---

## 🚀 Key Features

* **📟 CRT Monitor Effect:** Simulates a vintage cyberdeck display using custom CSS scanlines and localized screen flickering animations.
* **⌨️ Dynamic Code Streamer:** Emulates real-time code injection by streaming localized JavaScript files character-by-character.
* **🛡️ Smart Selection & Copy:** Features an intelligent pause mechanism that detects user mouse selection, halting the typing engine instantly to allow flawless code copying.
* **🔤 Fira Code Ligatures:** Implements `Fira Code` natively to enable high-tech, connected font symbols (`===`, `=>`, etc.).
* **💀 Watch Dogs DedSec Grid:** Incorporates an isolated sidebar panel holding the DedSec node animation and typing system summaries.
* **📱 Ultra Responsive:** Re-flows effortlessly from large desktop interfaces down to small tactical mobile devices.

---

## 📂 Project Structure

Ensure your local directory is organized as follows before uploading to GitHub:

```text
cyberpunk-crt-terminal-ui/
├── assets/
│   └── watch-dogs2-dedsec.jpg    # Your DedSec GIF/Image
├── fonts/
│   └── FiraCode/
│       └── FiraCode-Regular.ttf  # TrueType Font File
├── index.html                    # Root Document
├── app.css                       # Stylings & Animations
├── animation.js                  # Engine & Core Logic
└── README.md                     # Documentation