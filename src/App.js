
import { useState } from "react";
import uuid from "react-uuid";
import Sidebar from "./Sidebar";
import TextEditor from "./TextEditor";


function App() {

  const [notes, setNotes] = useState([]);
  const[currNote, setCurrNote] = useState(false);

  const onNewNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untilted",
      body: "...",
      date: "",
    };

    setNotes([newNote, ...notes]);

  };

  const onDeleteNote = (idToDel) => {
    setNotes(notes.filter((note) => note.id !== idToDel ));
  }

  const getCurrNote = () => {
    return notes.find((note) => note.id === currNote);
  }

  return (
  <div id="main-container">
    <nav>
      <button id="notes-vision">&#9776;</button>
      <div className="nav-header">
        <h1>Lotion</h1>
        <h6>Like Notion, but worse</h6>
      </div>
    </nav>
  
    {/*change this to a button so it activates the sidebar area*/}
    <div id="note-container"> 
      <section id="left-side">
        <Sidebar notes={notes} onNewNote={onNewNote} currNote={currNote} setCurrNote={setCurrNote} />
      </section>
      <section id="right-side">
        <TextEditor currNote={getCurrNote()} onDeleteNote={onDeleteNote} />
      </section>
    </div>

  </div>
  )
}

export default App;
