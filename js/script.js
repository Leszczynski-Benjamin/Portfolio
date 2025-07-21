
 document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 3700);
  });


 const menuBtn = document.querySelector(".menub a");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll(".nav__menu li a");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});




