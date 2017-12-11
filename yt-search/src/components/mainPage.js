import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import { API_KEY } from "../constants";
import VideoDTO from "./entities/videoDTO";

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: "",
            newVideos: [],
            previousVideo: {},
            previousVideoDisplay: "none"
        }

    }

    componentDidMount() {
        this.loadData("");
    }

    loadData = (term) => {

        const options = { term, key: API_KEY };

        YTSearch(options, (videos) => {

            console.log(videos);

            const newVideos = [];

            videos.map((video) => {
                const id = video.id.videoId;
                const channelTitle = video.snippet.channelTitle;
                const title = video.snippet.title;
                const imageUrl = video.snippet.thumbnails.high.url;
                const newVideo = new VideoDTO(id, channelTitle, title, imageUrl);
                newVideos.push(newVideo);
            });
            this.setState({
                newVideos
            })
        });
    }

    dispatchSearch = (event) => {
        event.preventDefault();
        const term = this.state.searchTerm;

        if (!term) {
            return;
        }

        this.loadData(term);
        this.setState({
            searchTerm: ""
        });
    }

    handleInputChange = (event) => {
        const searchString = event.target.value;

        this.setState({
            searchTerm: searchString
        });
    }

    handleClick = (event) => {
        const splittedVideoTitle = event.target.title.split(" ");

        if (splittedVideoTitle.length >= 12) {
            const videoTitle = splittedVideoTitle.slice(0, (splittedVideoTitle.length - 11)).join(" ");
            this.loadData(videoTitle);
        }
        this.loadData(event.target.title);
        this.setState({
            previousVideo: this.state.newVideos[0],
            previousVideoDisplay: ""
        });
    }

    processVideoUrl = (video) => {
        return (
            <div>
                <iframe width="90%" height="615" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullScreen title={video.title}></iframe>
                <h5 title={video.title} className="col-12">{video.title}</h5>
            </div>
        );
    }

    processVideoThumbnail = (video) => {
        return (
            <div key={video.id} title={video.title} className="col-12" style={{ textAlign: "left" }}>
                <img src={video.imageUrl} style={{ width: "200px" }} title={video.title} alt={video.title} />
                <p title={video.title}>{video.title}</p>
                <p title={video.title}>Recommended for you</p>
            </div>
        );
    }



    logoClickHandler = () => {
        this.loadData("");
    }

    render() {

        if (this.state.newVideos.length === 0) {
            return <p>Loading...</p>;
        }

        console.log(this.state.previousVideo);

        return (
            <div>
                <div>


                    <nav className="navbar navbar-dark bg-dark justify-content-between">
                        <a className="navbar-brand" onClick={this.logoClickHandler} style={{ color: "white" }}>YTSearch</a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" onChange={this.handleInputChange} value={this.state.searchTerm} type="text" placeholder="Search" />
                            <button className="btn btn-info my-2 my-sm-0" onClick={this.dispatchSearch}>Search</button>
                        </form>
                    </nav>

                    <div className="row">
                        <div className="col-7 offset-1 mainVideoContainer">
                            {this.processVideoUrl(this.state.newVideos[0])}
                        </div>


                        <div className="col-3 offset-1">
                            <div onClick={this.handleClick} className="previousVideoContainer" style={{ display: this.state.previousVideoDisplay }}>
                                <h1>Previous video</h1>
                                {this.processVideoThumbnail(this.state.previousVideo)}
                            </div>
                            <div onClick={this.handleClick} className="sideVideosContainer">
                                <h1>Recommended videos</h1>
                                {this.state.newVideos.slice(1).map((video) => {
                                    return this.processVideoThumbnail(video);
                                })}
                            </div>
                        </div>
                    </div>

                </div >
            </div>
        );
    }
}

export default MainPage;