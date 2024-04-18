
// Create a class for the element
class ViewPager extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        let i;
        let index = 0;

        for(i of this.children) {
            if(this.children[index] == i) {} else {
            i.style.display = 'none';
            }
        }

        this.onwheel = function (e) {
            this.children[index].style.display = 'none';
            if (e.deltaY == 100 && index != this.children.length) {
                index++;
            } else if(!index == 0) {
                index--;
            }
            console.log(this.children[index])
            this.children[index].style.removeProperty('display');
        }
    }
}

customElements.define("view-pager", ViewPager);  