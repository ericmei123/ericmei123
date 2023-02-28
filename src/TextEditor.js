
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TextEditor( { currNote, onDeleteNote, onUpdateNote, hideRightSide } ) {
    
    const handleChange = (value) => {
        onUpdateNote({
          ...currNote,
          body: value,
          date: "",
        });
      };

    //need to change so it activates on button instead of auto
    const onSaveChange = (key, value) => {
        onUpdateNote({
            ...currNote,
            [key]: value,
            date: "",
        });
    };

    if(!currNote) return <div className="no-active-note">Select a note, or create a new one</div>;

    return (
        <section id="right-side" className={hideRightSide ? "other-div full-page" : "other-div"}>
            <div id="titleName">
                <div>
                    {/** the value and on change part is new on both this and the textarea */}
                    <input type="text" id="noteName" value={currNote.title} onChange={(event) => onSaveChange("title", event.target.value)} autoFocus />
                    <input type="datetime-local" />
                </div>
                
                <button id="edit-save-text">&emsp;Edit&emsp;</button>
                <button id="delete-text" onClick={() => onDeleteNote(currNote.id)}>&emsp;Delete&emsp;</button>
            </div>

            {/* <div id="textEditor">
                <ReactQuill placeholder="Write Something..."/>
            </div> */}

            <div id="bodyText">
                {/* <textarea id="body" placeholder="Write your note here..." value={currNote.body} onChange={(event) => onSaveChange("body", event.target.value)}/> */}
                {/**RN DOENST WORK HAS THE TAGS */}
                <ReactQuill id='body' value={currNote.body} onChange={handleChange} placeholder="Write your note here..." onBlur={() => onSaveChange("body", currNote.body)} />
            </div>
        </section> 
    );
};
  
export default TextEditor;