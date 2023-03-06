

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import uuid from "react-uuid";
import Sidebar from "./Sidebar";


function Layout( { currID, setCurrID } ) {

    const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
    const[currNote, setCurrNote] = useState(false);
    const[hideRightSide, setHideRightSight] = useState(false);
  
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
      const answer  = window.confirm("Are you sure?");
      if (answer) {
        setNotes(notes.filter((note) => note.id !== idToDel ));
      }
    }
  
    const getCurrNote = () => {
      return notes.find((note) => note.id === currNote);
    }
  
    //need to change so update occurs on button press instead of auto
    const onUpdateNote = (updatedNote) => {
      const updatedNotesArr = notes.map((note)=>{
        if(note.id === currNote) { 
          return updatedNote;
        }
  
        return note;
      });
      setNotes(updatedNotesArr);
    };
  
    useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes));
    },[notes]);
  
    const onHideSideBar = () => {
      if (hideRightSide === false) {
        setHideRightSight(true);
      } else {
        setHideRightSight(false);
      }
    }


    return (
        <>
          <div id="main-container">
              <nav>
                  <button id="notes-vision" onClick={() => onHideSideBar()}>&#9776;</button>
                  <div className="nav-header">
                      <h1>Lotion</h1>
                      <h6>Like Notion, but worse</h6>
                  </div>
              </nav>

              <div id="note-container"> 
                  <section id="left-side">
                      <Sidebar notes={notes} onNewNote={onNewNote} currNote={currNote} setCurrNote={setCurrNote} hideRightSide={hideRightSide} />
                  </section>
                  <section id="right-side">
                      <Outlet context={[getCurrNote, onDeleteNote, onUpdateNote, hideRightSide, notes, setCurrID, currID]}/>
                  </section>
              </div>
          </div>
        </>
    )
}

export default Layout;
