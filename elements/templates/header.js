import { registry } from '../../utils/customeElementsDefine.js';
// Create a class for the element
class Header extends HTMLElement {

    static observedAttributes = ["logIn"]; // true or false
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
        this.innerHTML = `<header>
        ` + await addHomeLink() + `
        ` + await addLogIn(this) + `
        
        </header>`;

    }

    async attributeChangedCallback(name, oldValue, newValue) {
        doAttributeCheck('boolean', 'logIn', this.getAttribute('logIn'));

        this.innerHTML = '';
        this.innerHTML = `<header>
        ` + await addHomeLink() + `
        ` + await addLogIn(this) + `
        
        </header>`;
    }
}

function addHomeLink() {
    return new Promise((resolve) => {
        let int = window.setInterval(() => {
            if (window['options'].homeLink === '') {
                clearInterval(int);
                resolve(`<x-icon></x-icon>
            <x-title></x-title>`);

            } else {
                clearInterval(int);
                resolve(`<a href='` + window['options'].homeLink + `'>
        <x-icon></x-icon>
        <x-title></x-title>
        </a>`);
            }
        }, 1);
    });
}

function addLogIn(e) { // allows the developer to remove the logIn from the template
    return new Promise((resolve) => {
            if (e.getAttribute('logIn') == 'true') {
                resolve(`<log-in></log-in>
        <display-profile></display-profile>`);

            } else {
                resolve(``);
            }
    });
}

registry.define("template-header", Header);