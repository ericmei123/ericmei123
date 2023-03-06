
// import { useEffect, useState } from "react";
// import uuid from "react-uuid";
// import Sidebar from "./Sidebar";
// import TextEditor from "./TextEditor";

// function App() {

//   const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
//   const[currNote, setCurrNote] = useState(false);
//   const[hideRightSide, setHideRightSight] = useState(false);

//   const onNewNote = () => {
//     const newNote = {
//       id: uuid(),
//       title: "Untilted",
//       body: "...",
//       date: "",
//     };

//     setNotes([newNote, ...notes]);

//   };

//   const onDeleteNote = (idToDel) => {
//     const answer  = window.confirm("Are you sure?");
//     if (answer) {
//       setNotes(notes.filter((note) => note.id !== idToDel ));
//     }
//   }

//   const getCurrNote = () => {
//     return notes.find((note) => note.id === currNote);
//   }

//   //need to change so update occurs on button press instead of auto
//   const onUpdateNote = (updatedNote) => {
//     const updatedNotesArr = notes.map((note)=>{
//       if(note.id === currNote) { 
//         return updatedNote;
//       }

//       return note;
//     });
//     setNotes(updatedNotesArr);
//   };

//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   },[notes]);

//   const onHideSideBar = () => {
//     if (hideRightSide === false) {
//       setHideRightSight(true);
//     } else {
//       setHideRightSight(false);
//     }
//   }

//   return (
//   <div id="main-container">
//     <nav>
//       <button id="notes-vision" onClick={() => onHideSideBar()}>&#9776;</button>
//       <div className="nav-header">
//         <h1>Lotion</h1>
//         <h6>Like Notion, but worse</h6>
//       </div>
//     </nav>
    
//       {/*change this to a button so it activates the sidebar area*/}
    // <div id="note-container"> 
    //   <section id="left-side">
    //     <Sidebar notes={notes} onNewNote={onNewNote} currNote={currNote} setCurrNote={setCurrNote} hideRightSide={hideRightSide} />
    //   </section>
    //   <section id="right-side">
    //     <TextEditor currNote={getCurrNote()} onDeleteNote={onDeleteNote} onUpdateNote={onUpdateNote} hideRightSide={hideRightSide} />
    //   </section>
    // </div>

//   </div>
//   )
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TextEditor from "./TextEditor";
// import Layout from "./Layout";
// import SavedText from "./SavedText";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<TextEditor />}></Route>
//           <Route path="/notes/:noteNum/edit" element={<TextEditor />}></Route>
//           <Route path="/notes/:noteNum" element={<SavedText />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }


// export default App;

// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import TextEditor from './TextEditor';
// import Layout from './Layout';
// import SavedText from './SavedText';

// function App() {
//   const [noteNum, setNoteNum] = useState(null);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<TextEditor noteNum={noteNum} setNoteNum={setNoteNum} />} />
//           <Route path="/notes/:noteNum/edit" element={<TextEditor noteNum={noteNum} setNoteNum={setNoteNum} />} />
//           <Route path="/notes/:noteNum" element={<SavedText noteNum={noteNum} />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TextEditor from './TextEditor';
import Layout from './Layout';
import SavedText from './SavedText';
import { useState } from 'react';

function App() {
  const[currID, setCurrID] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout currID={currID} setCurrID={setCurrID} />}>
          <Route path="/notes" element={<TextEditor  />} />
          <Route path="/notes/:noteNum/edit" element={<TextEditor />} />
          <Route path="/notes/:noteNum" element={<SavedText  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
