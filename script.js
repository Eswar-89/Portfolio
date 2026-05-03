const projects = [
  {
    id: "p1",
    title: "2048 Game",
    desc: "A fully functional 2048 game built using JavaScript.",
    link: "https://github.com/Eswar-89/2048",
    preview: "https://eswar-89.github.io/2048/",
    video: "videos/2048.mp4",
  },
  {
    id: "p2",
    title: "Login UI",
    desc: "Animated login page.",
    link: "https://github.com/Eswar-89/Login",
    preview: "https://eswar-89.github.io/Login/",
    video: "videos/login.mp4",
  },
  {
    id: "p3",
    title: "Amazon",
    desc: "clone of amazon website",
    link: "https://github.com/Eswar-89/AmazonClone",
    preview: "https://eswar-89.github.io/AmazonClone/",
    video: "videos/Amazon.mp4",
  },
  {
    id: "p4",
    title: "Rock-Paper-Scissors",
    desc: "Rock Paper Scissors game",
    link: "https://eswar-89.github.io/rock-paper-scissors/",
    preview: "https://eswar-89.github.io/rock-paper-scissors/",
    video: "videos/RPS.mp4",
  },
  {
    id: "p5",
    title: "Tic-Tac-Toe",
    desc: "Tic Tac Toe game",
    link: "https://github.com/Eswar-89/TIC-TAC-TOE",
    preview: "https://eswar-89.github.io/TIC-TAC-TOE/",
    video: "videos/Tic-Tac-Toe.mp4",
  },
];

const container = document.getElementById("projects-container");

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
  `;
  card.onclick = () => openModal(p.id);
  container.appendChild(card);
});

// ==========================
// 🔹 MODAL LOGIC
// ==========================
function openModal(id) {
  const p = projects.find((proj) => proj.id === id);

  const modal = document.getElementById("modal");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const video = document.getElementById("modal-video");
  const iframe = document.getElementById("modal-frame");
  const link = document.getElementById("modal-link");

  title.innerText = p.title;
  desc.innerText = p.desc;
  link.href = p.link;

  // Reset
  video.style.display = "none";
  iframe.style.display = "none";
  video.pause();
  video.src = "";
  iframe.src = "";

  if (p.video) {
    video.src = p.video;
    video.style.display = "block";
    video.play();
  } else {
    iframe.src = p.preview;
    iframe.style.display = "block";
  }

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const video = document.getElementById("modal-video");
  const iframe = document.getElementById("modal-frame");

  video.pause();
  video.src = "";
  iframe.src = "";

  modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function (e) {
  if (e.target.id === "modal") closeModal();
};

// Close modal with ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = this.getAttribute("href");

    if (target.length > 1) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const roles = [
  "Frontend Developer",
  "JavaScript Developer",
  "UI/UX Enthusiast",
];

let i = 0,
  j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  const el = document.querySelector(".typing");
  if (!el) return;

  if (!isDeleting && j <= roles[i].length) {
    currentRole = roles[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    currentRole = roles[i].substring(0, j--);
  }

  el.innerHTML = currentRole;

  if (j === roles[i].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  if (intro) {
    setTimeout(() => {
      intro.classList.add("hide");
    }, 2200);
  }
});
