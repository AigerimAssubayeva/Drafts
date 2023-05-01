  /**
   * Functional component for the list
   * @param items {string[]}
   * @returns {HTMLElement} - List element
   */
  function List({ items }) {
    // Create an unordered list element with list items from the items array
    const listItems = items.map((item) => `<li>${item}</li>`).join("");
    const ul = document.createElement("ul");
    ul.innerHTML = listItems;
    return ul;
  }

export default List