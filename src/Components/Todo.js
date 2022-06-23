import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

function closeModalHandler() {
  setModalIsOpen(false);
}


  function deleteHandler() {
    //console.log(props.text + ' Clicked')
    setModalIsOpen(true);
  }

  return (
    <div className="card">
      <h2> {props.text}</h2>
      {/* this concept is called props */}
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
      { modalIsOpen && <Backdrop onClick={closeModalHandler} />  }
    </div>
  );
}

export default Todo;
