

function TextEditor( { currNote, onDeleteNote } ) {

    return (
        <section id="right-side">
            <div id="titleName">
                <div>
                    <input type="text" id="noteName" autoFocus />
                    <input type="datetime-local" />
                </div>
                
                <button id="edit-save-text">&emsp;Edit&emsp;</button>
                <button id="delete-text" onClick={() => onDeleteNote(currNote.id)}>&emsp;Delete&emsp;</button>
            </div>

            <div id="textEditor">
                <div>TEXT EDITOR</div>
            </div>

            <div id="bodyText">
                <textarea id="body" placeholder="Write your note here..."/>
            </div>
        </section> 
    );
};
  
export default TextEditor;