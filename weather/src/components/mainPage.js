import React from "react";
import { communicationService } from "../service/communicationService";
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesBars } from 'react-sparklines';
import MyMapComponent from "./mapComponent";
import { ON_LOAD } from "../constants";
import City from "./dto/cityDTO";



class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            citiesData: [],
            newCities: []
        }
    }

    componentDidMount() {
        this.loadData(ON_LOAD);
    }

    loadData = (cities) => {
        let citiesData = [];

        cities.map((singleCity) => {
            communicationService.getRequest("/forecast", singleCity,
                (response) => {
                    const { city, list } = response.data;
                    const temp = list.map(dt => dt.main.temp);
                    const humidity = list.map(dt => dt.main.humidity);
                    const newCity = new City(city.id, city.name, city.coord.lon, city.coord.lat, temp, humidity);
                    citiesData.push(newCity);
                    this.setState({
                        citiesData: citiesData,
                        searchTerm: ""
                    });
                    // return citiesData;
                },
                (error) => {
                    console.log(error);
                });
            // citiesData = this.state.citiesData;
        });

        // Promise.all(citiesData)
        //     .then(data => {
        //         data
        //             .sort()
        //             .map((siti) => {
        //                 this.setState({
        //                     citiesData: this.state.citiesData.push(siti)
        //                 });
        //             });
        //     });
    }


    searchCities = (event) => {

        const city = this.state.searchTerm;
        this.loadData([city]);
        
    }

    handleInputChange = (event) => {
        const searchString = event.target.value;

        this.setState({
            searchTerm: searchString
        });
    }

    render() {

        const citiesData = this.state.citiesData;

        if (typeof(this.state.citiesData) !== "object") {
            return <p>Loading</p>;
        }

        console.log(this.state.citiesData);

        return (
            <div>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" onChange={this.handleInputChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.searchCities}>Search</button>
                </form>

                {citiesData.map((city) => {
                    return (
                        <div key={city.id} className="row">
                            <div className="col-3 text-center" >
                                <h3>{city.name}</h3>
                                <MyMapComponent lon={city.lng} lat={city.lat}
                                    isMarkerShown={true}
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `200px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />} />
                            </div>
                            <div className="col-4 offset-1 my-auto pb-5" >
                                <h3>Temperature on every 3 hours</h3>
                                <Sparklines data={city.temp}>
                                    <SparklinesBars style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }} />
                                    <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
                                    <SparklinesReferenceLine type="mean" />
                                </Sparklines>
                            </div>
                            <div className="col-4 my-auto pb-5">
                                <h3>Humidity on every 3 hours</h3>
                                <Sparklines data={city.humidity}>
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