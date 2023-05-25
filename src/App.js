import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note/Note';
// import notes from './components/Note/notes';
import CreateNote from './components/Note/CreateNote';
import { useState } from 'react';


function App() {

const [notes, setNewNote]=useState([]);

function noteAdd(note){
    setNewNote(prevNotes => {
      return [...prevNotes,note];
    });
}

function noteDelete(id)
{
  setNewNote(prevNotes=> {
      return prevNotes.filter((itemNote,index)=>{
        return index !== id;
      });
  });
}

  return (
    <div className="App">
        <Header/>
        <CreateNote onAddhandler={noteAdd}/>
        {notes.map((itemNote,index)=>{
          return(
           <Note
              id={index}
              key={index}
              title={itemNote.title}
              content={itemNote.content}
              ondeleteNote={noteDelete}
           />);
          })}
        
        <Footer/>
    </div>
  );
}

export default App;
