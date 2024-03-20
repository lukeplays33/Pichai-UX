import { generate3ColorPallete } from "./AI/palleteMaker.js";

alert(document.body.style.backgroundImage)
let image = String(document.body.style.backgroundImage);
image = image.substring(3, image.length - 1);

class PichaiUX {
    constructor(options = {
        source: image || '#008dcd',
        darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
        overrideColorsOnScroll: true
    }) {
        this.options = options;
    }

    initialize() {
        let cssId = 'PichaiUXCss';
        if (!document.getElementById(cssId)) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = typeof exports !== 'undefined' ? 'Pichai-UX/CSS/main.css' : 'https://lukeplays33.github.io/Pichai-UX/CSS/main.css';
            link.media = 'all';

            head.appendChild(link);
        }

        generate3ColorPallete(this.options);
    }
}

export { PichaiUX }