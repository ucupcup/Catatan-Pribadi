import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchTerm: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.addNoteHandler = this.addNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => {
            if (note.id === id) {
                return { ...note, archived: !note.archived };
            }
            return note;
        });
        this.setState({ notes });
    }

    addNoteHandler(note) {
        this.setState((prevState) => {
            const newNote = {
                ...note,
                id: Date.now(),
            };
            return {
                notes: [...prevState.notes, newNote],
            };
        });
    }
    

    onSearchHandler(searchTerm) {
        this.setState({ searchTerm });
    }

    render() {
        const { notes, searchTerm } = this.state;

        const filteredNotes = notes.filter(note =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.body.toLowerCase().includes(searchTerm.toLowerCase())
        );

        const activeNotes = filteredNotes.filter(note => !note.archived);
        const archivedNotes = filteredNotes.filter(note => note.archived);

        return (
            <>
                <div className="note-app__header">
                    <h1>Notes</h1>
                    <NoteSearch onSearch={this.onSearchHandler} />
                </div>
                <div className="note-app__body">
                    <NoteInput addNote={this.addNoteHandler} />

                    <h2>Catatan Aktif</h2>
                    {activeNotes.length > 0 ? (
                        <NoteList
                            notes={activeNotes}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler} />
                    ) : (
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                    )}

                    <h2>Arsip</h2>
                    {archivedNotes.length > 0 ? (
                        <NoteList
                            notes={archivedNotes}
                            onDelete={this.onDeleteHandler}
                            onArchive={this.onArchiveHandler} />
                    ) : (
                        <p className="notes-list__empty-message">Tidak ada catatan</p>
                    )}
                </div>
            </>
        );
    }
}

export default NoteApp;
