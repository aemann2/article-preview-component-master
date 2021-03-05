const button = document.querySelector('.text__footer__share');
const aside = document.querySelector('.text__aside');
const darken = document.querySelector('.text__footer__share--darken');
const arrow = document.querySelector('.text__footer__arrow');

// the reason I set this here and not in the CSS is that style.visibility sets the style inline. if I try to get the CSS style of aside in the event listener below, it's going to do nothing on the first click because the inline style hasn't been set. I could use getComputedStyle, but I'd rather do this because it's simple
aside.style.visibility = 'hidden';

button.addEventListener('click', () => {
  if (aside.style.visibility === 'hidden') {
    aside.style.visibility = 'visible';
    aside.style.opacity = '1';
    darken.style.background = '#48556a';
    arrow.style.filter = 'brightness(250%)';
  } else {
    aside.style.visibility = 'hidden';
    aside.style.opacity = '';
    darken.style.background = '';
    arrow.style.filter = '';
  }
});
