

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function SavedText( ) {
    const [getCurrNote , onDeleteNote, onUpdateNote, hideRightSide, notes, setCurrID, currID] = useOutletContext();
    const currNote = getCurrNote();

    const navigate = useNavigate();

    let searchId;
    if (!currNote) {
        searchId="none";
    } else {
        searchId=currNote.id;
        for (let i = 0; i < notes.length; i++) {
            const key = notes[i].id;
            if (key === searchId){
                setCurrID(i.toString());
                break;
            }
        }
    }

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };

    const editSaveButton = document.getElementById('edit-save-text');
    let isEditing = false;
    if (editSaveButton){
        editSaveButton.addEventListener('click', () => {
            if (isEditing) {
            editSaveButton.innerText = 'Save';
            navigate(`/notes/${currID}/edit`);
            } else {
            editSaveButton.innerText = 'Edit';
            }
            isEditing = !isEditing;
        });
    }

    if(!currNote) return <div className="no-active-note">Select a note, or create a new one</div>;

    return (
        <>
            <section id="right-side" className={hideRightSide ? "other-div full-page" : "other-div"}>
                <div id="titleName">
                    <div>
                        <h1 id='noteName-read-only'>{currNote.title}</h1>
                        <h6 id='datetime-input-read-only'>{formatDate(currNote.date)}</h6>
                    </div>

                    <button id="edit-save-text">&emsp;Edit&emsp;</button>
                    <button id="delete-text" onClick={() => onDeleteNote(currNote.id)}>&emsp;Delete&emsp;</button>
                </div>

                <div id="bodyText">
                    <ReactQuill id='body-read-only' readOnly={true} value={currNote.body} modules={{ toolbar: false }}/>
                </div>
            </section>
        </> 
    );
};
  
export default SavedText;