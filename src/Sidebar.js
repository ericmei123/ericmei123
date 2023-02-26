
function Sidebar( { notes, onNewNote, currNote, setCurrNote } ) {

    return (

        <div className="sidebar">
            <div className="sidebar-header">
                <h1>Notes</h1>
                <button onClick={onNewNote}>+</button>
            </div>

            <div className="sidebar-notes">
                {notes.map((note) => (
                    <div className="sidebar-note" onClick={() => setCurrNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                        </div>
                        <small className="note-date">{note.date}</small>
                        <p>{note.body && note.body.substr(0,20) + "..."}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;