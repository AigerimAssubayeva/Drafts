import App from "./components/app.js";

/**
 * Global application state
 * @template T
 * @param {T} initialValue
 * @returns {[T, function(T): void]}
 */
function useState(initialValue) {
    // Define state as undefined
    let state;
    // Use a closure to preserve the state between calls
    state = state || initialValue;
  
    // Define a function to set the value of state
    function setValue(newValue) {
      // Update the state with the new value
      state = newValue;
      // Call the renderApp function to update the UI
      renderApp();
    }
  
    // Return an array containing the current state and the setValue function
    return [state, setValue];
  }
  
  export { useState };
  