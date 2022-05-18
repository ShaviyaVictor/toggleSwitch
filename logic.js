const stylesheet = document.documentElement.style;
const toggle = document.querySelector('.switch_input[data-theme-toggle]');

toggle.addEventListener('click', () => {

  // getting the css variable
  const color1 = 
  getComputedStyle(document.documentElement).getPropertyValue(
    '--color1'
  );
  const color2 =
  getComputedStyle(document.documentElement).getPropertyValue(
    '--color2'
  );

  // switching the css variables
  stylesheet.setProperty('--color1', color2);
  stylesheet.setProperty('--color2', color1);

});
console.log("🚀 ~ file: logic.js ~ line 8 ~ toggle.addEventListener ~ color1")