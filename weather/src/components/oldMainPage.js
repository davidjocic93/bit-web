import React from "react";
import { communicationService } from "../service/communicationService";
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
import MyMapComponent from "./mapComponent";
import { ON_LOAD } from "../constants";



class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            cityData: [],
        }
    }

    componentDidMount() {
        ON_LOAD.forEach((city) => {
            communicationService.getRequest("forecast", city,
                (response) => {
                    const cityDataState = this.state.cityData;
                    const city = {};
                    city.coordinates = response.data.city.coord;
                    city.dataPerHour = response.data.list;
                    city.name = response.data.city.name;
                    cityDataState.unshift(city);
                    this.setState({
                        cityData: cityDataState,
                    });
                },
                (error) => {
                    console.log(error);
                });
        });
    }


    searchCities = (event) => {

        event.preventDefault();

        const city = this.state.searchTerm;

        communicationService.getRequest("forecast", city,
            (response) => {
                const cityDataState = this.state.cityData;
                const city = {};
                city.coordinates = response.data.city.coord;
                city.dataPerHour = response.data.list;
                city.name = response.data.city.name;
                cityDataState.unshift(city);
                this.setState({
                    cityData: cityDataState,
                    searchTerm: ""
                });
            },
            (error) => {
                console.log(error);
            })
    }

    handleInputChange = (event) => {
        const searchString = event.target.value;

        console.log(searchString);

        this.setState({
            searchTerm: searchString
        });
    }

    render() {


        if (this.state.cityData === []) {
            return <p>Loading</p>;
        }



        return (

            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" onChange={this.handleInputChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.searchCities}>Search</button>
                </form>

                {this.state.cityData.map((city) => {

                    const tempByHours = [];
                    city.dataPerHour.map((item) => {
                        tempByHours.push(Math.round(item.main.temp));
                    });

                    const humidityByHours = [];
                    city.dataPerHour.map((item) => {
                        humidityByHours.push(item.main.humidity);
                    })

                    return (
                        <div style={{ display: "table", textAlign: "center", margin: "0 auto" }}>
                            <div style={{ width: "30%", display: "table-cell", verticalAlign: "middle", padding: "50px" }}>
                                <h3>{city.name}</h3>
                                <MyMapComponent lon={city.coordinates.lon} lat={city.coordinates.lat}
                                    isMarkerShown={true}
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `200px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />} />
                            </div>
                            <div style={{ width: "30%", display: "table-cell", verticalAlign: "middle", padding: "50px" }}>
                                <h3>Temperature on every 3 hours</h3>
                                <Sparklines data={tempByHours}>
                                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </div>
                            <div style={{ width: "30%", display: "table-cell", verticalAlign: "middle", padding: "50px" }}>
                                <h3>Humidity on every 3 hours</h3>
                                <Sparklines data={humidityByHours}>
                                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </div>
                        </div>
                    );

                })}


            </div>
        );



    }
}

export default MainPage;