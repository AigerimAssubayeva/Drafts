import List from "./list/list.js";
import Modal from "./modal/modal.js";
import Button from "./button/button.js";
import { useState } from "../functional.js";

/**
 * App container
 * @returns {HTMLDivElement} - The app container
 */
function App() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const [showModal, setShowModal] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  function addItem() {
    setItems([...items, newItemName]);
    setNewItemName("");
    setShowModal(false);
  }

  function closeModal() {
    setNewItemName("");
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  const div = document.createElement("div");
  const list = List({ items });
  const button = Button({ text: "Add item", onClick: openModal });

  div.append(list, button);

  if (showModal) {
    const modal = Modal({
      children: [
        {
          type: "input",
          props: {
            type: "text",
            placeholder: "Enter item name",
            value: newItemName,
            oninput: (event) => setNewItemName(event.target.value),
          },
        },
        {
          type: "button",
          props: { text: "Add", onClick: addItem },
        },
        {
          type: "button",
          props: { text: "Cancel", onClick: closeModal },
        },
      ],
    });

    div.append(modal);
  }

  return div;
}

const appContainer = App();
document.body.appendChild(appContainer);

export default App;