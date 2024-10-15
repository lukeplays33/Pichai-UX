let i;

function enableSetListItems(element) {
    element.listItems = [];

    for (i of element.children) {
        if (i.tagName == 'HR') { } else {
            element.listItems.push(i.innerHTML); //adds the items to the listItems object for setting/getting
        }
    }

    Object.defineProperty(element, 'listItems', {
        get() {
            return element.listItmes;
        },
        set(newValue) {
            console.log('listItems changed to:', newValue);
            element.listItmes = newValue; // update the property
        }
    });
}

export { enableSetListItems }