const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');
const themeSwitch = document.querySelector('.theme-switch');
const themeLabel = document.querySelector('.theme-switch__label');
const root = document.documentElement;

const themeKey = 'phsnet-theme';

const applyTheme = (theme) => {
  if (theme === 'light') {
    root.dataset.theme = 'light';
    themeSwitch?.setAttribute('aria-checked', 'true');
    themeSwitch?.setAttribute('aria-label', 'Wechsle zu dunklem Design');
    if (themeLabel) themeLabel.textContent = 'Dark mode';
    return;
  }

  root.dataset.theme = 'dark';
  themeSwitch?.setAttribute('aria-checked', 'false');
  themeSwitch?.setAttribute('aria-label', 'Wechsle zu hellem Design');
  if (themeLabel) themeLabel.textContent = 'Light mode';
};

applyTheme(localStorage.getItem(themeKey) || 'dark');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

themeSwitch?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem(themeKey, nextTheme);
  applyTheme(nextTheme);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});