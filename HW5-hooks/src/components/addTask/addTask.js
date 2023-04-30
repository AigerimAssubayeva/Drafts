

    /**
     * addTask component
     * @param addTask {function}
     * @param cancel {function}
     * @returns {HTMLDivElement} - div element
     */
    function addTask({cancel, addTask}) {
        const button = document.createElement("button");
        button.innerHTML = text;
        button.onclick = onClick;
        button.classList.add('button')
        return button;
    }

    export default addTask