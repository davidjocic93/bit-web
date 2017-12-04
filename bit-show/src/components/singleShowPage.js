
import React from "react";
import { communicationService } from "../service/communicationService";
import PropTypes from "prop-types"


class SingleShowPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: null
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.loadData(id);
    }

    componentWillReceiveProps(nextProps) {
        this.loadData(nextProps.match.params.id);
    }

    loadData(id) {

        communicationService.getRequest(`shows/${id}?embed[]=cast&embed[]=seasons`,
            (serverResponseData) => {

                this.setState({
                    show: serverResponseData.data
                });
                console.log(this.state.show);
            },
            (serverError) => {
                console.log(serverError);
            });
    }

    render() {

        if (this.state.show == null) {
            return <p>Loading...</p>
        }

        console.log(this.state.show);
        const seasons = this.state.show._embedded.seasons;
        const cast = this.state.show._embedded.cast;

        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12" style={{marginBottom:"30px"}}>{this.state.show.name}</h1>
                </div>
                <div className="row">
                    <img className="col-6" style={{ height: "50%" }} src={this.state.show.image.original} alt="" />
                    <div className="col-6">
                        <h3> Seasons ({this.state.show._embedded.seasons.length})</h3>
                        <ul style={{ listStyleType: "none" }}>
                            {seasons.map((season) => {
                                return <li key={season.id}><b>Season {season.number}</b>: {season.premiereDate} - {season.endDate}</li>
                            })}
                        </ul>
                        <h3>Cast</h3>
                        <ul style={{ listStyleType: "none" }}>
                            {cast.map((acter) => {
                                return <li key={acter.character.id}>{acter.person.name}</li>
                            })}
                        </ul>
                        <h3>Show Details</h3>
                        {this.state.show.summary}
                    </div>
                </div>
            </div>
        );
    }
}

SingleShowPage.propTypes = {
    match: PropTypes.object
};

export default SingleShowPage;