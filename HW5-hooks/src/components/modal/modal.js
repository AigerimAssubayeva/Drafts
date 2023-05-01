/**
   * Modal component
   * @param onAdd {function}
   * @param onCancel {function}
   * @returns {HTMLDivElement} - Modal element
   */
function Modal({ onAdd, onCancel }) {
  // Create a modal dialog element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create a content area within the modal
  const content = document.createElement("div");
  content.classList.add("modal-content");

  // Create an input field for the task name
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter task name";
  input.classList.add("modal-input");

  // Create an "Add Task" button
  const addBtn = Button({
    text: "Add Task",
    onClick: () => {
      onAdd(input.value);
      input.value = "";
    },
  });

  // Create a "Cancel" button
  const cancelBtn = Button({
    text: "Cancel",
    onClick: () => {
      onCancel();
      input.value = "";
    },
  });

  // Add the input field and buttons to the content area
  content.append(input, addBtn, cancelBtn);
  // Add the content area to the modal
  modal.append(content);

  // Return the modal element
  return modal;
}

export default Modal