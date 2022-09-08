import React from 'react';
import NoteItem from './NoteItem';

function isEmpty(notes) {
    return Object.keys(notes).length === 0;
}

function NoteList({ notes, onDelete, onArchive }) {
    
    if (isEmpty(notes)) {
        return (
            <div className='notes-list__empty-message'>
            <p>Empty Notes</p>
        </div>
        );
    } else {
        return (
            <div className="notes-list">
                {
                notes.map((note) => (
                    <NoteItem   key={note.id}
                                id={note.id}
                                onDelete={onDelete}
                                onArchive={onArchive}
                                isArchive={note.archived}
                                {...note} />
                ))
                }
            </div>
            );
    }
}

export default NoteList;