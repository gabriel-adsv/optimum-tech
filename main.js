let logoColor = document.getElementById('logo');
let buttonTheme = document.getElementById('switch');

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  let logoDark = logoColor.querySelector('.logo-desktop-black');
  logoDark.classList.toggle('hide');

  let logoLight = logoColor.querySelector('.logo-desktop-white');
  logoLight.classList.toggle('hide');

  let moonIcon = buttonTheme.querySelector('.icon-dark');
  moonIcon.classList.toggle('hide');

  let sunIcon = buttonTheme.querySelector('.icon-light');
  sunIcon.classList.toggle('hide');
}