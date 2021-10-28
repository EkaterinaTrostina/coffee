import { Component } from 'react';
import './search.scss';

class Search extends Component{
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.searchItem(term);
    }

    render() {
        return (
            <label>
                Lookiing for
                <input
                    className="search-input"
                    placeholder= "start typing here..."
                    value= {this.state.term}
                    onChange = {this.onUpdateSearch}
                />
            </label>
        )
    }

}

export default Search;