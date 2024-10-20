import React from "react";

class NoteInput extends React.Component {
    state = {
        title: '',
        body: '',
        maxTitleLength: 50,
    };

    onTitleChangeEventHandler = (e) => {
        const { maxTitleLength } = this.state;
        if (e.target.value.length <= maxTitleLength) {
            this.setState({
                title: e.target.value,
            });
        }
    };

    onBodyChangeEventHandler = (e) => {
        this.setState({
            body: e.target.value,
        });
    };

    onSubmitEventHandler = (e) => {
        e.preventDefault();
        const { title, body } = this.state;

        if (title.trim() && body.trim()) {
            this.props.addNote({
                title: title.trim(),
                body: body.trim(),
                createdAt: new Date().toISOString(),
                archived: false,
            });

            this.setState({
                title: '',
                body: '',
            });
        }
    };

    render() {
        const { title, body, maxTitleLength } = this.state;
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: {maxTitleLength - title.length}
                    </p>
                    <input 
                        className="note-input__title"
                        type="text"
                        placeholder="Ini adalah judul ..."
                        value={title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea 
                        className="note-input__body"
                        placeholder="Tuliskan catatan di sini ..."
                        value={body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;
