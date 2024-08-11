import { TodoProvider } from '../TodoContext';
import './App.css';
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {text: 'cortar cebolla', completed:true},
//   {text: 'curso', completed:false},
//   {text: 'cortar cebolla 2', completed:false},
// ]

function App() {

  return (
    <TodoProvider>
       <AppUI/>
    </TodoProvider>
  );
}

export default App;
