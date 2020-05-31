const hamBtn = document.getElementById('hamMenu');
const exitBtn = document.getElementById('exitMenu');
const menu = document.getElementById('sideMenu');
const menuLinks = document.querySelectorAll('#sideMenu li a');

hamBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

exitBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
