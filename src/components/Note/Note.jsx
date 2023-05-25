
function Note(props){
    
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    
    function deleteHandle()
    {
        props.ondeleteNote(props.id);

    }

    return (
        <div className="note">
      
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p align="right"> <b>{currentDate} </b> </p>
            <button onClick={deleteHandle}>Delete </button>

        </div>
    );
}

export default Note