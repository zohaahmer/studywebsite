// always go to top on refresh/reload
history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  location.hash = "#home";
});


const headerHeight = document.querySelector("header").offsetHeight;

/* reusable smooth scroll function */
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

/* navbar links */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScrollTo(this.getAttribute("href"));
  });
});

/* ✅ Get In Touch button */
const getInTouchBtn = document.querySelector("#home button");

if (getInTouchBtn) {
  getInTouchBtn.addEventListener("click", function () {
    smoothScrollTo("#contact");
  });
}




