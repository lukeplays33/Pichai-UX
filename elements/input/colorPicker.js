import { registry, doAttirbuteCheck } from '../../utils/customeElementsDefine.js';

// Create a class for the element
class ColorPicker extends HTMLElement {
    static observedAttributes = ["src", "dynamic"];

    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
        this.innerHTML = window.default_user_icon;
        this.classList.add('material-symbols-outlined');

        this.onclick = function () {
            let dialog = window['options'].loginDialog;

            if(dialog.parentNode == document.body) {
                dialog.remove();
                return;
            }
            document.body.appendChild(dialog);
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
                // Get the favicon link element
                const faviconLink = document.querySelector("link[rel='icon']") || document.querySelector("link[rel='shortcut icon']");

                // Get the favicon URL
                const faviconUrl = faviconLink ? faviconLink.href : null;
        
                if (!this.hasAttribute('dynamic') || this.getAttribute('dynamic') == 'true') {
                    window.onload = async () => {
                        let newIcon = await generateDynamicIcon(faviconUrl);
                        this.style.backgroundImage = `url(${newIcon})`;
                    }
                } else {
                    this.style.backgroundImage = this.src ?? `url("${faviconUrl}")`;
                }
    }
}

registry.define("color-picker", ColorPicker);