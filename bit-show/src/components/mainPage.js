
import React from "react";
import { communicationService } from "../service/communicationService";
import ShowDTO from "../components/dto/showDTO";
import ShowComponent from "./showComponent";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: []
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let shows = [];
        communicationService.getRequest("shows",
            (serverResponseData) => {
                serverResponseData.data.forEach(element => {

                    const name = element.name;
                    const imageUrl = element.image.original;
                    const id = element.id;

                    const show = new ShowDTO(name, imageUrl, id);

                    shows.push(show);
                });

                this.setState({
                    shows: shows
                });
            },
            (serverError) => {
                console.log(serverError);
            });
    }




    render() {

        console.log(this.state.shows);
        const shows = this.state.shows;

        return (
            <div style={{marginTop: "100px"}}>
                <h1>Popular Shows</h1>
                <div className="container">
                    <div className="row">
                        {shows.map((show) => {
                            return <ShowComponent show={show} key={show._id} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;