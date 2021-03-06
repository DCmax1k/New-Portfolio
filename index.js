const viewSite1 = () => {
  window.open('https://articlez-project.herokuapp.com/');
};
const viewGit1 = () => {
  window.open('https://github.com/DCmax1k/Articlez');
};

const viewSite2 = () => {
  window.open('https://note-keeper-api.herokuapp.com/');
};
const viewGit2 = () => {
  window.open('https://github.com/DCmax1k/note-keeper');
};

const viewSite3 = () => {
  window.open('http://www.socialent.tk/');
};
const viewGit3 = () => {
  window.open('https://github.com/DCmax1k/Socialent');
};

const hamBtn = document.getElementById('hamMenu');
const exitBtn = document.getElementById('exitMenu');
const menu = document.getElementById('sideMenu');
const menuLinks = document.querySelectorAll('#sideMenu li a');

hamBtn.addEventListener('click', () => {
  menu.classList.add('active');
  setTimeout(() => {
    menuLinks[0].classList.add('link-animation');
  }, 100);
  setTimeout(() => {
    menuLinks[1].classList.add('link-animation');
  }, 200);
  setTimeout(() => {
    menuLinks[2].classList.add('link-animation');
  }, 300);
});

exitBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  menuLinks.forEach((link, i) => {
    link.classList.remove('link-animation');
  });
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    menuLinks.forEach((link2, i) => {
      link2.classList.remove('link-animation');
    });
  });
});
