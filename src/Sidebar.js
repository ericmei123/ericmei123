import { Link } from "react-router-dom";


function Sidebar( { notes, onNewNote, currNote, setCurrNote, hideRightSide, setCurrID ,currID } ) {

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

            {/* <div className="sidebar-notes">
                {notes.map((note) => (
                    <div className={`sidebar-note ${note.id === currNote ? "active" : ""}`} onClick={() => setCurrNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title && note.title.substr(0,20) + "..."}</strong>
                        </div>
                        <small className="note-date">{formatDate(note.date)}</small>
                        <p dangerouslySetInnerHTML={{ __html: note.body.substr(0,20) + "..." }} />
                    </div>
                ))}
            </div> */}

            <div className="sidebar-notes">
                {notes.map((note) => (
                    <Link to={`/notes/${currID}/`} style={{textDecoration: 'none', color:'black'} }>
                        <div className={`sidebar-note ${note.id === currNote ? "active" : ""}`} onClick={() => setCurrNote(note.id)}>
                            <div className="sidebar-note-title">
                                <strong>{note.title && note.title.substr(0,20) + "..."}</strong>
                            </div>
                            <small className="note-date">{formatDate(note.date)}</small>
                            <p dangerouslySetInnerHTML={{ __html: note.body.substr(0,20) + "..." }} />
                        </div>
                    </Link>
                ))}
            </div>

            

{/* 
            <div className="sidebar-notes">
                {notes.map((note) => (
                    <>
                        {currID ? (
                            <Link to={`/notes/${currID}/`} style={{textDecoration: 'none', color:'black'} }>
                                <div className={`sidebar-note ${note.id === currNote ? "active" : ""}`} onClick={() => setCurrNote(note.id)}>
                                    <div className="sidebar-note-title">
                                        <strong>{note.title && note.title.substr(0,20) + "..."}</strong>
                                    </div>
                                    <small className="note-date">{formatDate(note.date)}</small>
                                    <p dangerouslySetInnerHTML={{ __html: note.body.substr(0,20) + "..." }} />
                                </div>
                            </Link>
                        ) : (
                            <div className={`sidebar-note ${note.id === currNote ? "active" : ""}`} onClick={() => setCurrNote(note.id)}>
                                <div className="sidebar-note-title">
                                    <strong>{note.title && note.title.substr(0,20) + "..."}</strong>
                                </div>
                                <small className="note-date">{formatDate(note.date)}</small>
                                <p dangerouslySetInnerHTML={{ __html: note.body.substr(0,20) + "..." }} />
                            </div>
                        )}
                    </>
                ))}
            </div> */}

        </div>
    );
};

export default Sidebar;
