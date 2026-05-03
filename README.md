# 💼 Boosetty Eswara Varaprasad - Portfolio

A modern and responsive personal portfolio website showcasing my projects, coding profiles, and skills. Built using **HTML, CSS, and JavaScript** with interactive UI and smooth animations.

---

## 🚀 Live Demo

🔗 https://eswar-89.github.io/Portfolio/

---

## ✨ Features

* 🎬 Apple-style intro animation
* 🎯 Hero section with typing effect
* 📱 Fully responsive design
* 🧩 Dynamic project rendering (via JavaScript)
* 🎥 Project modals with **video previews**
* 🌐 Fallback to live preview if no video
* 📊 Coding profiles section (LeetCode, HackerRank, GitHub)
* 📧 Contact section with direct email support
* 🔗 Social links (LinkedIn, GitHub)
* ⚡ Smooth scrolling navigation

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3 (Grid + Flexbox)**
* **JavaScript (Vanilla JS)**

---

## 📁 Folder Structure

```
PORTFOLIO/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── videos/
    ├── 2048.mp4
    ├── Amazon.mp4
    ├── login.mp4
    ├── RPS.mp4
    └── Tic-Tac-Toe.mp4
```

---

## 🧠 How to Add a New Project

Projects are managed in `script.js`.

Just add a new object inside the `projects` array:

```js
{
  id: "pX",
  title: "Project Name",
  desc: "Short description",
  link: "https://your-live-link.com",
  preview: "https://your-live-link.com",
  video: "videos/yourvideo.mp4"
}
```

✅ No need to edit HTML — it updates automatically.

---

## 🎥 Project Preview System

* If `video` is provided → shows video preview 🎬
* If empty → loads live project in iframe 🌐

---

## 📊 Coding Profiles

* 💻 GitHub: https://github.com/Eswar-89
* 💼 LinkedIn: https://www.linkedin.com/in/boosetty-eswara-varaprasad-4374242ab/
* 🧩 LeetCode: https://leetcode.com/u/Eswar89/
* 🏆 HackerRank: https://www.hackerrank.com/profile/eswarcoding08

---

## ⚠️ Notes

* Keep video sizes small for better performance
* Some websites may block iframe previews
* Replace placeholder links with your real projects

---

## 📜 License

This project is open-source and free to use.

---

## 🙌 Author

**Boosetty Eswara Varaprasad**
