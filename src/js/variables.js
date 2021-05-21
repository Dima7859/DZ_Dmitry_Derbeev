// Main Page
export const log = document.getElementById('log');
export const btnRegistration = document.getElementById('btnRegistration');
export const weExitP = document.getElementById('weExitP');
export const wishExitP = document.getElementById('wishExitP');
export const exitMyPage = document.getElementById('exitMyPage');
export const imgGerOrc = document.getElementById('imgGerOrc');
export const imgGerAl = document.getElementById('imgGerAl');
export const email = document.getElementById('email');

export const exitAcc = () => {
    localStorage.clear();
    window.location.href = '/';
};

export function scrollTop () {

    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;
  
        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}
