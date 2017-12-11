import React, { Component } from 'react';
import { communicationService } from "../services/communicationService";
import MyMapComponent from "./mapComponent";


class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lon: "",
            lat: ""
        }
    }

    // loadData = (cities) => {
    //     // let citiesData = [];

    //     cities.map((singleCity) => {
    //         communicationService.getRequest("/forecast", singleCity,
    //             (response) => {
    //             });
    //     },
    //         (error) => {
    //             console.log(error);
    //         });
    // };

    handleClick = (event) => {
        event.preventDefault();

        console.log(event.target.getAttribute("lon"));
        console.log(event.target.getAttribute("lat"));

        this.setState({
            lon: parseFloat(event.target.getAttribute("lon")),
            lat: parseFloat(event.target.getAttribute("lat"))
        })

        console.log(this.state.lat);
        console.log(this.state.lon);

    }

    componentDidMount() {
        this.setState({
            lon: 55,
            lat: 33
        })
    }


    render() {
        return (
            <div>
                <div>
                    <MyMapComponent lon={this.state.lon} lat={this.state.lat}
                        isMarkerShown={true}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />} />
                </div>
                <button lon="20.448922" lat="44.786568" onClick={this.handleClick}>Belgrade</button>
                <input type="button" lon="18.413076" lat="43.856259" onClick={this.handleClick} value="Sarajevo" />
                <input type="button" lon="21.895759" lat="43.320902" onClick={this.handleClick} value="Nis" />
                <input type="button" lon="23.321868" lat="42.697708" onClick={this.handleClick} value="Sofia" />
                <input type="button" lon="19.690788" lat="44.748861" onClick={this.handleClick} value="Sabac" />
            </div>
        );
    }
}


export default MainPage;