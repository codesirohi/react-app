import Modal from "./Components/Modal";
import Todo from "./Components/Todo";
import Backdrop from "./Components/Backdrop";

function App() {
  return (
    <div>
      <h1>MY TODO</h1>
      <Todo text='First Todo'/> <br/>
      <Todo text='Second Todo'/> <br/>
      <Todo text='Third Todo'/> <br/>
      <Todo text='Fourth Todo'/> <br/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
