import React, { Component } from 'react';
import { communicationService } from "../services/communicationService";
import Img from "react-image";
import Search from "./common/search";




class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: ""
        }
    }

    componentDidMount() {
        this.loadData("random");
    }

    loadData = (searchTerm) => {

        communicationService.getRequest("", searchTerm,
            (response) => {
                const images = (response.data.data).map(image => image.images.original.url);
                this.setState({
                    images
                });
                console.log(this.state.images);
            },
            (error) => {
                console.log(error);
            });
    }



    processImageUrl = (image) => {

        const onLoad =
            (<div className="preloader-wrapper big active" style={{ marginTop: "200px" }}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>);

        return (
            <div>
                <Img
                    src={image}
                    loader={onLoad}
                />
                <h3>GIF URL:</h3>
                <br />
                <input type="text" value={image} style={{ width: "50%" }} />
            </div>
        )
    }



    render() {

        const randomImageIndex = Math.round(Math.random() * (this.state.images.length - 1));
        console.log(randomImageIndex);
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <Search search={this.loadData} />
                    </div>
                </nav>

                <div style={{ paddingTop: "200px" }}>
                    {this.processImageUrl(this.state.images[randomImageIndex])}
                </div>
            </div>
        );
    }
}

export default MainPage;