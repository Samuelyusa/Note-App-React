import React from 'react';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils';
import NoteInput from './NoteInput';
import NoteSearch from './NoteSearch';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
        this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
        return {
            notes: [
            ...prevState.notes,
                {
                    id: +new Date(),
                    title,
                    body,
                    createdAt: showFormattedDate(+new Date()),
                    archived: false,
            }
            ]
        }
        });
    }

    onArchiveEventHandler(id) {
        const notes = this.state.notes.map((note) => note.id === id
            ? { ...note, archived: !note.archived } 
            : note)
        this.setState({ notes });
    }

    onNoteSearchHandler(event) {
    this.setState(() => {
        return {
            search : event.target.value
        }
        })
    }

    render() {

        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const onActive = notes.filter((note) => {
            return note.archived === false
        });
        const unActive = notes.filter((note) => {
            return note.archived === true
        });
        

    return (
        <div className="note-app">
            <div className="note-app__header">
                <h1>Note App</h1>
                <NoteSearch search={this.state.search} onSearchChange={this.onNoteSearchHandler}/>
            </div>
            
            <div className="note-app__body">
                <h2>Add Note</h2>
                <NoteInput addNote={this.onAddNoteHandler} />

                <h2>Note List</h2>
                <NoteList keyword={this.state.keyword} notes={onActive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveEventHandler} />
                
                <h2>Archive Note</h2>
                <NoteList keyword={this.state.keyword} notes={unActive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveEventHandler} />
            </div>
            
        </div>
    );
    }
}

export default NoteApp;