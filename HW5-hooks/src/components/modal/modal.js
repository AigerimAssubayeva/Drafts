
    /**
     * Button component
     * @param display {boolean}
     * @param cancel {function}
     * @returns {HTMLDivElement} - div element
     */
    function Modal() {
            const modal = document.createElement('div')
            modal.classList.add('modal-bg')

            const modalWindow = document.createElement('div')
            modal.classList.add('modal-window')

            // const modalTitle = document.createElement('span')
            // modal.innerHTML = "<span>Add New Task</span>";
            // modal.classList.add('modal-title')

            // const cancel = document.createElement('button')
            // cancel_button.classList.add('cancel')

            // buttons container

            // const modalButtons = document.createElement('div')
            // modalButtons.classList.add('modal-buttons')




            modal.append(modalWindow)

            return modal;
    }

    export default Modal