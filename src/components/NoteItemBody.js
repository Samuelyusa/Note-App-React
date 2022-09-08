import React from 'react';
import {showFormattedDate} from '../utils/index'

function NoteItemBody({ title, createdAt, body }) {
    return (
    <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <h5 className="note-item__date">{showFormattedDate(createdAt)}</h5>
        <p className="note-item__body">{body}</p>
    </div>
    );
}

export default NoteItemBody;