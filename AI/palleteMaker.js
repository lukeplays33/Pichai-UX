import ColorThief from './colorThief.js';

import { getTextColor } from './textColorFInder.js';

import { PichaiUX } from '../init.js';

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`.split(',') : null;
  }

function RGBToHSL(value) {
    let r = value[0];
    let g = value[1];
    let b = value[2];
    // Make r, g, and b fractions of 1
    r = r / 255;
    g = g / 255;
    b = b / 255;

    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;

    let h = 0;
    let s = 0;
    let l = (cmax + cmin) / 2;

    // Calculate hue
    if (delta === 0) {
        h = 0; // No difference
    } else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Convert to percentage
    s = Math.round(s * 100);
    l = Math.round(l * 100);

  return `${h}, ${s}, ${l}`;
}

function getPallete(options) {
    return new Promise((resolve) => {
        if (String(options.source).includes('#')) {

        } else {
            const colorThief = new ColorThief();
            const img = new Image();

            img.addEventListener('load', () => {
                resolve(colorThief.getPalette(img));
            });

            img.crossOrigin = 'Anonymous';
            img.src = options.source;
        }
    });
}

function generateContainerColor (colors) {
    let i;
    let newColors = [];

    for(i of colors) {
        let hsl = RGBToHSL(i).split(',');
        let h = hsl[0];
        let s = hsl[1] + '%';
        let l = String(Number(hsl[2]) + 20) + '%';

        newColors.push([h,s,l]);
    }

    return newColors;
}

function generateContainerTextColor (colors) {
    let i;
    let newColors = [];

    for(i of colors) {
        let hsl = hslToHex(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]));
        let rgb = hexToRgb(hsl);

        newColors.push(rgb);
    }

    return newColors;
}

async function generate3ColorPallete(options) {
        let colors = await getPallete(options);

        let position = options.extractionPosition;

        const root = document.documentElement;
        root.style.setProperty('--primary', `rgb(${colors[position].toString()})`);
        root.style.setProperty('--secondairy', `rgb(${colors[position + 4].toString()})`);
        root.style.setProperty('--tertiary', `rgb(${colors[position + 9].toString()})`);

        root.style.setProperty('--primaryTextColor', getTextColor(colors[0]));
        root.style.setProperty('--secondairyTextColor', getTextColor(colors[4]));
        root.style.setProperty('--tertiaryTextColor', getTextColor(colors[9]));

        let hls = generateContainerColor(colors);

        root.style.setProperty('--primaryContainer', `hsl(${hls[position].toString()})`);
        root.style.setProperty('--secondairyContainer', `hsl(${hls[position + 4].toString()})`);
        root.style.setProperty('--tertiaryContainer', `hsl(${hls[position + 9].toString()})`);

        let textColors = generateContainerTextColor(hls);

        root.style.setProperty('--primaryContainerTextColor', `${getTextColor(textColors[position])}`);
        root.style.setProperty('--secondairyContainerTextColor', `${getTextColor(textColors[position + 4])}`);
        root.style.setProperty('--tertiaryContainerTextColor', `${getTextColor(textColors[position + 9])}`);
}

export { generate3ColorPallete };