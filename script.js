document.addEventListener("DOMContentLoaded", () => {
  const menu_toggle = document.getElementById("menu-toggle");

  menu_toggle.addEventListener("click", function () {
    const nav_list = document.querySelector(".nav__list");

    nav_list.classList.toggle("show");
    nav_list.classList.toggle("hide");
  });
});
