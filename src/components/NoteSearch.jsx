import React from "react";

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(e) {
        this.setState({
            searchTerm: e.target.value,
        });

        this.props.onSearch(e.target.value);
    }
    render() {
        return (
        <div className="note-search">
            <input 
                type="text"
                placeholder="Cari catatan ..."
                value={this.state.searchTerm}
                onChange={this.onSearchChange}
            />
        </div>
        );
    }
}

export default NoteSearch;