import { registry } from '../../../utils/customeElementsDefine.js';
// Create a class for the element
class SettingsDrawer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    async connectedCallback() {
        this.innerHTML = `<section class="card" id='quickSettingsPanel'>
        </section>`;
    }
}

registry.define("template-settings-drawer", SettingsDrawer);