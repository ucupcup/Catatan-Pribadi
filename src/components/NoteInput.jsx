import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitleLength: 50,
        };

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const { maxTitleLength } = this.state;
        if (e.target.value.length <= maxTitleLength) {
            this.setState(() => {
                return {
                    title: e.target.value,
                };
            });
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value,
            };
        });
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        const { title, body } = this.state;

        if (title.trim() && body.trim()) {
            this.props.addNote({
                title: title.trim(),
                body: body.trim(),
                createdAt: new Date().toISOString(),
                archived: false,
            });

            this.setState(() => {
                return {
                    title: '',
                    body: '',
                };
            });
        }
    }

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
                        type="text"
                        placeholder="Tuliskan catatanmnu di sini ..."
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