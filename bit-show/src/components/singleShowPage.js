
import React from "react";
import { communicationService } from "../service/communicationService";
import PropTypes from "prop-types";


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

    showImage = (show) => {

        if (show.image === null) {
            return <img className="col-6 offset-3 singleShowImage" style={{ height: "100%", marginBottom: "50px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWUjRvzKJXEbrYcobqBiJSg9LuwdxNo295VlLHNg0umCiDwPoLAQ" alt="" />
        }
        return <img className="col-6 offset-3 singleShowImage" style={{ height: "100%", marginBottom: "50px" }} src={show.image.original} alt="" />
    }

    showSeasons = (show) => {
        const seasons = show._embedded.seasons;

        console.log(seasons);

        return (

            <div className="card bg-dark">
                <div className="card-header" role="tab" id="headingOne">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Seasons ({seasons.length})
                  </a>
                    </h5>
                </div>

                <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                        <ul style={{ listStyleType: "none", textAlign: "center" }}>
                            {seasons.map((season) => {
                                return <li key={season.id}><b>Season {season.number}</b>: {season.episodeOrder} episodes</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    showCast = (show) => {

        const cast = show._embedded.cast;

        return (

            <div className="card bg-dark">
                <div className="card-header" role="tab" id="headingTwo">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Cast
                              </a>
                    </h5>
                </div>

                <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                        {cast.map((acter) => {

                            let personalImageUrl = acter.person.image.original;

                            if (personalImageUrl === null) {
                                personalImageUrl = "https://via.placeholder.com/100x100"
                            }

                            return (
                                <div className="row" key={acter.person.id + 100}>
                                    <img src={personalImageUrl} alt={acter.person.name} className="col-2" style={{ height: "3%" }} />
                                    <p key={acter.person.id + 200} className="col-4" style={{ height: "3%", paddingTop: "1%" }}>{acter.person.name}</p>
                                    <p className="col-1" style={{ height: "3%", paddingTop: "1%" }}>-</p>
                                    <p key={acter.character.id + 300} className="col-4" style={{ height: "3%", paddingTop: "1%" }}>{acter.character.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    showSummary = (show) => {

        let summary = show.summary;

        if (summary === null) {
            summary = "There is no summary for this show."
        }

        return (

            <div className="card bg-dark">
                <div className="card-header" role="tab" id="headingThree">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            Summary
                              </a>
                    </h5>
                </div>

                <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                        <p>{summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
                        <a target="_blank" href={`http://www.imdb.com/title/${show.externals.imdb}`}>Check out details on IMDB</a>
                    </div>
                </div>
            </div>
        )
    }


    render() {

        console.log(this.state.show);

        if (this.state.show == null) {
            return <p>Loading...</p>
        }

        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12" style={{ marginBottom: "30px" }}>{this.state.show.name}</h1>
                </div>
                <div className="row">
                    {this.showImage(this.state.show)}
                    <div className="col-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
                        <div id="accordion" role="tablist" style={{ marginBottom: "50px" }}>
                            {this.showSummary(this.state.show)}
                            {this.showSeasons(this.state.show)}
                            {this.showCast(this.state.show)}
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