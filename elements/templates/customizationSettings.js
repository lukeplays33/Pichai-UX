import { registry } from '../../utils/customeElementsDefine.js';
import { pickFiles } from '../../functions/filePicker.js';

// Create a class for the element
class customSettings extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
        let checked = window.localStorage.getItem(`${window.storageName}transperncy`) == '1' ? '' : 'checked';

        this.innerHTML = `<list-viewer actionButton="${window.default_edit_icon}">
                <li id='wallpaper'>Wallpaper</li>
                <li>Color Order</li>
                <li>Transparency Mode <input id='Pichai - transperencyMode' type='checkbox' class='actionButton' ${checked}></input></li>
                <li>Font</li>
                <li>Border style</li>
                <li>Icon packs</li>
                <hr>
                <li>Reset data</li>
            </list-viewer>`;

        this.firstChild.addEventListener('itemSelected', function (e) {
            if (e.detail.index == 0) {
                pickFiles(function (file) {
                    window.localStorage.setItem(`${window.storageName}bgImageChange`, file);

                    window.location.reload();
                });
            } else if (e.detail.index == 2) {
                let li = document.getElementById(e.detail.value);

                li.children[0].checked = !li.children[0].checked;

                if (li.children[0].checked) {
                    window.localStorage.setItem(`${window.storageName}transperncy`, 0.75);
                } else {
                    window.localStorage.setItem(`${window.storageName}transperncy`, 1.0);
                }

                window.location.reload();
            }
        });
    }
}

registry.define("template-customization-settings", customSettings);