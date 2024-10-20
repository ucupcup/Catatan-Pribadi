import React from "react";
import NoteContent from "./NoteContent";
import NoteAction from "./NoteAction";

function NoteItem({ title, createdAt, body, id, archived, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteContent title={title} createdAt={createdAt} body={body} />
            <NoteAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteItem;