    /**
     * Functional component for the list
     * @param items {string[]}
     * @returns {HTMLElement} - List element
     */
    function List({items, setItems}) {
        const listItems = items.map((item) => `<li>${item.title}</li>`).join("");
        console.log(items);
        const ul = document.createElement("ul");
        ul.innerHTML = listItems;
        return ul;

    }

    export default List