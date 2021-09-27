const box = document.querySelector('.box');
const hue = document.querySelector('#hue');
const saturation = document.querySelector('#saturation');
const lightness = document.querySelector('#lightness');
const text = document.querySelector('.text');
const grid = document.querySelector('.grid');
const tip = document.querySelector('.tooltip');

let hue1 = hue.value;
let sat1 = saturation.value;
let light1 = lightness.value;

text.textContent = `hsl(${hue1}, ${sat1}%, ${light1}%)`;

hue.addEventListener('input', (e) => {
  hue1 = hue.value;
  box.style.background = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
  text.textContent = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
});

saturation.addEventListener('input', (e) => {
  sat1 = saturation.value;
  box.style.background = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
  text.textContent = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
});

lightness.addEventListener('input', (e) => {
  light1 = lightness.value;
  box.style.background = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
  text.textContent = `hsl(${hue1}, ${sat1}%, ${light1}%)`;
});

box.addEventListener('click', () => {
  let copyText = document.querySelector('.text');

  navigator.clipboard.writeText(copyText.textContent);
  tip.style.transform = 'translateX(-20px)';
  tip.style.transition = 'transform 2s ease';
  console.log(copyText.textContent);
  setTimeout(() => {
    tip.style.transform = 'translateX(320px)';
  }, 2000);
});
