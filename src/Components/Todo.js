function Todo(props) {

    function deleteHandler() {
        
      //console.log(props.text + ' Clicked')
      

    }

  return (
    <div className="card">
      <h2> {props.text}</h2> 
      {/* this concept is called props */}
      <div className="actions">
        <button className="btn"  onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
