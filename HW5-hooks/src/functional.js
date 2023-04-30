// import Header from './header/header'
import Button from './components/button/button.js';
// import App from './components/app.js';
import List from './components/list/list.js';
import Modal from './components/modal/modal.js';
import addTask from './components/addTask/addTask.js'

(function () {
    let state = undefined;

    /**
     * Global application state
     * @template T
     * @param {T} initialValue
     * @returns {[T, function(T): void]}
     */
    function useState(initialValue) {
        state = state || initialValue;

        function setValue(newValue) {
            state = newValue;
            renderApp();
        }

        return [state, setValue];
    }

    /**
     * App container
     * @returns {HTMLDivElement} - The app container
     */
    function App() {
        const [items, setItems] = useState([
            {id: 1, title: 'todo 1', status: true},
            {id: 2, title: 'todo 2', status: true},
            {id: 3, title: 'todo 3', status: false}
        ]);

        Modal

        // function showModal() {
        //     const modal = Modal();
        //     document.querySelector('#root').append(modal);
        // }

        function showModal () {
            setState({...state, isModal: true}),
            console.log(showModal)
        }
    
        // const closeModal = () => {
        //     setState({...state, isModal: false})
        // }
    

        function addItem() {
            const newItem = {
                id: items.length + 1,
                title: `todo ${items.length + 1}`, 
                status: false
            }
            setItems([...items, newItem]);
        }


        const div = document.createElement("div");
        const list = List({items});
        const button = Button({text: "+ New Task", onClick: showModal});
        div.append(list, button);
        return div;

    }

    /**
     * Render the app.
     * On change whole app is re-rendered.
     */
    function renderApp() {
        const appContainer = document.getElementById("functional-example");
        appContainer.innerHTML = "";
        appContainer.append(App());
    }

    // initial render
    renderApp();
})();

// export default {useState}