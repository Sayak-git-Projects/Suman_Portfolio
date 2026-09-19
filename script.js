const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");
const scrollLine = document.getElementById("scrollLine");
const cursor = document.getElementById("cursor");
const cursorDot = document.getElementById("cursorDot");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuPanel.classList.toggle("open");
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".menu-panel a").forEach(link => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    menuPanel.classList.remove("open");
    document.body.classList.remove("menu-open");
  });
});

function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  scrollLine.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
}
window.addEventListener("scroll", scrollProgress, {passive:true});
scrollProgress();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", e => {
    cursor.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`;
    cursorDot.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
  });
  document.querySelectorAll("a, button, .project, .credential").forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}
