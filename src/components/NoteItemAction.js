import React from 'react';

function NoteItemAction({ id, onDelete, onArchive, isArchive }) {
    return (
        <div className='note-item__action'>
            <button className='note-item__delete-button' onClick={() => onDelete(id)}>DELETE</button>
            <button className='note-item__archive-button' onClick={() => onArchive(id)}>{isArchive ? 'UNARCHIVE':'ARCHIVE'}</button>
        </div>
    );
}

export default NoteItemAction;