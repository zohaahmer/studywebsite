history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  location.hash = "#home";
});

const headerHeight = document.querySelector("header").offsetHeight;

function smoothScrollTo(targetId) {
  const targetSection = document.querySelector(targetId);
  if (!targetSection) return;

  const sectionPosition =
    targetSection.getBoundingClientRect().top +
    window.pageYOffset -
    headerHeight;

  window.scrollTo({
    top: sectionPosition,
    behavior: "smooth"
  });
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollTo(this.getAttribute("href"));
  });
});

const getInTouchBtn = document.querySelector("#home button");

if (getInTouchBtn) {
  getInTouchBtn.addEventListener("click", function () {
    smoothScrollTo("#contact");
  });
}