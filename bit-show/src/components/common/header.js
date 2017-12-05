import React from "react";
import { Link } from "react-router-dom";
import { communicationService } from "../../service/communicationService";

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
            searchTerm: "",
            visibility: "hidden"
        };

        this.clearSearch = this.clearSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.searchShows = this.searchShows.bind(this);
    };

    handleChange(event) {

        const searchString = event.target.value;

        this.setState({
            searchTerm: searchString
        });

        this.searchShows(searchString);
    }



    loadData(query) {
        communicationService.getRequest(`/search/shows?q=${query}`,
            (shows) => {
                this.setState({
                    shows: shows.data
                });
            });
    }

    clearSearch() {
        this.setState({
            shows: [],
            visibility: "hidden",
            searchTerm: ""
        });
    }

    searchShows(searchString) {

        this.setState({
            searchTerm: searchString
        });

        this.loadData(searchString);

        this.setState({
            visibility: ""
        });

    }


    render() {

        const shows = this.state.shows;

        return (

            <div>

                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

                    <Link className="navbar-brand" id="logo" to="/">BitShow</Link>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" onChange={this.handleChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>

                <div style={{ visibility: this.state.visibility, position: "absolute", top: "50px", right: "4%", textAlign: "center", width: "100%", zIndex: 20, backgroundColor: "white"}}>
                    <ul style={{listStyleType: "none"}}>
                        {shows.map((show) => {
                            return <li onClick={this.clearSearch} style={{borderBottom: "1px solid grey"}}> <Link to={`/${show.show.id}`}>{show.show.name}</Link></li>;
                        })}
                    </ul>
                </div>

            </div>

        );
    }
};

export default Header;