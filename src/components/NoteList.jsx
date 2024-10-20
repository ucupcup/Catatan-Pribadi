import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {notes.map((note, index) => {
                console.log("Rendering note with ID:", note.id);
                return (
                    <NoteItem 
                        key={note.id || index}
                        id={note.id}
                        title={note.title}
                        createdAt={note.createdAt}
                        body={note.body}
                        archived={note.archived}
                        onDelete={onDelete}
                        onArchive={onArchive} />
                    );
                })
            }
        </div>
    );
}

export default NoteList;