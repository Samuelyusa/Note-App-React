import React from 'react';
import NoteItemBody from './NoteItemBody';
import NoteItemAction from './NoteItemAction';

function NoteItem({ title, createdAt, body, id, onDelete, onArchive, isArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody title={title} createdAt={createdAt} body={body} />
            <NoteItemAction id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive} />
        </div>
    );
}

export default NoteItem;