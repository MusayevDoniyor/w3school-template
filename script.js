document.addEventListener("DOMContentLoaded", () => {
  const menu_toggle = document.getElementById("menu-toggle");

  menu_toggle.addEventListener("click", function () {
    const nav_list = document.querySelector(".nav__list");

    nav_list.classList.toggle("show");
    nav_list.classList.toggle("hide");
  });

  const scrollToTopBtn = document.getElementById("scrollToTop");
  const scrollToTopText = document.getElementById("scrollToTopText");
  const scrollToTopWrapper = document.getElementById("scrollToTopWrapper");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  scrollToTopWrapper.addEventListener("mouseover", () => {
    scrollToTopText.style.display = "block";
    scrollToTopBtn.style.backgroundColor = "#d3d3d3";
    scrollToTopBtn.style.color = "#000";
  });

  scrollToTopWrapper.addEventListener("mouseout", () => {
    scrollToTopText.style.display = "none";
    scrollToTopBtn.style.backgroundColor = "#000";
    scrollToTopBtn.style.color = "#fff";
  });
});
