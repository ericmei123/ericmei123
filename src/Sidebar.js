import { Link } from "react-router-dom";


function Sidebar( { notes, onNewNote, currNote, setCurrNote, hideRightSide, noteID } ) {

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

    return (
        <div className={hideRightSide ? "sidebar hidden" : "sidebar"}>
            <div className="sidebar-header">
                <h1>Notes</h1>
                <button onClick={onNewNote}>+</button>
            </div>
            
            <div>{notes.length === 0 && <p className="no-curr-note">No Note Yet</p>}</div>


            <div className="sidebar-notes">
                {notes.map((note, noteID) => (
                    <Link to={`/notes/${noteID}/edit`} style={{textDecoration: 'none', color:'black'} }>
                        <div className={`sidebar-note ${note.id === currNote ? "active" : ""}`} onClick={() => setCurrNote(noteID)}>
                            <div className="sidebar-note-title">
                                <strong>{note.title && note.title.substr(0,20) + "..."}</strong>
                            </div>
                            <small className="note-date">{formatDate(note.date)}</small>
                            <p dangerouslySetInnerHTML={{ __html: note.body.substr(0,20) + "..." }} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
