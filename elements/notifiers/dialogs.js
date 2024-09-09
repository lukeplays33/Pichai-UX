// this functions adds the possibility to turn all elements into a dialog
// it simply creates a clone that will be shown in the dialog

/** @description 
* A Dialog is a powerfull way of notifying the user on important matters.
*/

/** @usage 
 * Used for showing bits of information, notifying or having an user select something
*/

/** @codeUsage 
* You can call the showAsDialog function on all elements, using the setDialogMode attribute of the element allwos you to set how the element reacts and works with this function.
* Events and Functions can be attached to all elements.
*/

const submit = new Event("submit"); // dialog form submitted event

function showAsDialog(clone, cancelable = true, titleText = 'Dialog') { // turns the element into a visible dialog
    let wrapper = document.createElement('article');
    wrapper.classList.add('dialogWrapper');
    wrapper.id = `${this.id}Dialog`;

    let controlWrapper = document.createElement('article');
    controlWrapper.classList.add('titleWrapper');

    let submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit';
    submitButton.classList.add('submitDialogButton');

    submitButton.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        this.closeDialog();
        this.dispatchEvent(submit);
    });

    controlWrapper.append(submitButton);

    let titleWrapper = document.createElement('article');
    titleWrapper.classList.add('titleWrapper');

    let title = document.createElement('h3');
    title.classList.add('dialogTitle');
    title.innerHTML = titleText;

    titleWrapper.append(title);

    if (cancelable) {
        wrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();

            if (e.target.classList.contains('dialogWrapper')) {
                this.closeDialog();
            }
        });

        let closeButton = document.createElement('button');
        closeButton.innerHTML = 'Cancel';
        closeButton.classList.add('closeDialogButton');

        closeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();

            this.closeDialog();
        });

        controlWrapper.append(closeButton);
    }

    let dialogForm = document.createElement('form'); // creates an input who it's value changes when the custom input element does
    dialogForm.classList.add('dialog');

    dialogForm.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
    });

    let children = this.dialogMode == 'dialog' ? this : this.cloneNode(true);
    dialogForm.append(children);

    wrapper.append(titleWrapper, dialogForm, controlWrapper); // append all items to the dialog wrapper

    document.body.append(wrapper);

    let width = parseInt(window.getComputedStyle(dialogForm)['width']) + 16; //sets the title width to the same width as the dialog
    titleWrapper.style.width = `${width}px`;
    controlWrapper.style.width = `${width}px`;
}

function closeDialog() { // hides the dialog created by a element.
    let data = new FormData(document.getElementById(`${this.id}Dialog`).firstChild);

    document.getElementById(`${this.id}Dialog`).remove();
    this.setAttribute('formData', data); // saves the form data as a attribute so dev can aces it after accidentally closing pop-up

    return data; // returns the any filled in form data
}

function setDialogMode(mode) { // sets the elements mode for a dialog pop-up
    this.dialogMode = mode;
    if (mode == 'clone') {
        this.style.removeProperty('display');
    } else {
        this.style.display = 'none';
    }
}

// Attach the function to the HTMLElement prototype
HTMLElement.prototype.showAsDialog = showAsDialog;
HTMLElement.prototype.closeDialog = closeDialog;
HTMLElement.prototype.dialogMode = setDialogMode; // can be either way clone to clone the element into a dialog or dialog wich hides the element and shows it in a dialog