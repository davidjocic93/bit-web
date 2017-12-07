import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ""
        };

    }


    handleInputChange = (event) => {

        const searchString = event.target.value;

        this.setState({
            searchTerm: searchString
        });
    }

    dispatchSearch = (event) => {
        event.preventDefault();
        const searchString = this.state.searchTerm;
        this.props.search(searchString);
    }



    render() {

        return (

            <form>
                <input style={{ width: "90%" }} onChange={this.handleInputChange} value={this.state.searchTerm} type="search" placeholder="Search" required />
                <button className="waves-effect waves-light btn" onClick={this.dispatchSearch}>Search</button>
            </form>

        );
    }
}

export default Search;