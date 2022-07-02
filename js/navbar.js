"use strict";

// Variables
const hamburgerBtn = document.querySelector(`.hamburger-btn`);
const forumsBtn = document.querySelector(`.forums-btn`);
const hamburgerMenu = document.querySelector(`.hamburger-menu`);
const forumsMenu = document.querySelector(`.forums-menu`);
const sectionOne = document.querySelector(`header`);
const subHeader = document.querySelector(`.sub-header`);



class App {
    constructor () {
        hamburgerBtn.addEventListener(`click`, this._openCloseHamburgerMenu);
        forumsBtn.addEventListener(`click`, this._openCloseForumsMenu);
        this._stickyOnScroll();
    }

    _openCloseHamburgerMenu () {
        hamburgerMenu.classList.toggle(`hamburger-active`);
    }

    _openCloseForumsMenu () {
        forumsMenu.classList.toggle(`forums-active`);
    }

    _stickyOnScroll () {
        const sectionOneOptions = {};

        const sectionOneObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    subHeader.classList.add(`sticky`);
                    hamburgerMenu.classList.add(`hamburger-sticky`);
                } else {
                    subHeader.classList.remove(`sticky`);
                    hamburgerMenu.classList.remove(`hamburger-sticky`);
                }
            })
        }, sectionOneOptions);

        sectionOneObserver.observe(sectionOne);
    }
}

const app = new App();