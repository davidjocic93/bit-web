
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
            },
            (serverError) => {
                console.log(serverError);
            });
    }

    render() {

        console.log(this.state.show);

        if (this.state.show == null) {
            return <p>Loading...</p>
        }

        const seasons = this.state.show._embedded.seasons;
        const cast = this.state.show._embedded.cast;

        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12" style={{ marginBottom: "30px" }}>{this.state.show.name}</h1>
                </div>
                <div className="row">
                    <img className="col-8 offset-2" style={{ height: "50%" }} src={this.state.show.image.original} alt="" />
                    <div className="col-6 offset-3">
                        <h3> Seasons ({this.state.show._embedded.seasons.length})</h3>
                        <ul style={{ listStyleType: "none" }}>
                            {seasons.map((season) => {
                                return <li key={season.id}><b>Season {season.number}</b>: {season.premiereDate} - {season.endDate}</li>
                            })}
                        </ul>
                        <h3>Cast</h3>
                        {cast.map((acter) => {
                            return (
                                <div className="row">
                                    <img src={acter.person.image.original} alt={acter.person.name} className="col-3" style={{ height: "5%" }} />
                                    <p key={acter.person.id} className="col-3">{acter.person.name}</p>
                                    <p className="col-1">---</p>
                                    <p key={acter.character.id} className="col-3">{acter.character.name}</p>
                                </div>
                            )
                        })}
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                {<p style={{ textAlign: "center" }} id="collapseExample"><h5>Summary</h5><br></br>{this.state.show.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>}
                                <a target="_blank" href={`http://www.imdb.com/title/${this.state.imdb}`}>Check out details on IMDB</a>
                            </div>
                        </div>
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