import React from 'react';

class NoteInput extends React.Component {
constructor(props) {
super(props);

this.state = {
    title: '',
    body: '',
    titleMaxLenght: 50,
    bodyMaxLenght: 5000,
}

this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
}

onTitleChangeEventHandler(event) {
this.setState(() => {
    return {
        title: event.target.value.slice(0, this.state.titleMaxLenght)
    }
});
}

onBodyChangeEventHandler(event) {
this.setState(() => {
    return {
        body: event.target.value.slice(0, this.state.bodyMaxLenght)
    }
});
}

onSubmitEventHandler(event) {
event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
        title: '',
        body: '',
    });
}
render() {
return (
    <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <input
            className="note-input__title"
            type="text"
            placeholder="Enter the title of your note..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required />
        
        <h6
            className="note-input__title__char-limit">
            Remaining characters {this.state.titleMaxLenght - this.state.title.length}
        </h6>
        <textarea
            className="note-input__body"
            placeholder="Start writing your notes here..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required />
        <h6
            className="note-input__title__char-limit">
            Remaining characters {this.state.bodyMaxLenght - this.state.body.length}</h6>
        <br></br>
        <button type="submit">Add</button>
    </form>
)
}
}

export default NoteInput;