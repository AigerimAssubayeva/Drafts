  /**
   * Button component
   * @param text {string}
   * @param onClick {function}
   * @returns {HTMLButtonElement} - Button element
   */
  function Button({ text, onClick }) {
    // Create a button element with the specified text and onClick event handler
    const button = document.createElement("button");
    button.innerHTML = text;
    button.onclick = onClick;
    return button;
  }

  export default Button