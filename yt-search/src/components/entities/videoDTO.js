class VideoDTO {
    constructor(id, channelTitle, title, imageUrl) {
        this._id = id;
        this._channelTitle = channelTitle;
        this._title = title;
        this._imageUrl = imageUrl;
    }

    get id() {
        return this._id;
    }
    get channelTitle() {
        return this._channelTitle;
    }

    get title() {
        return this._title;
    }

    get imageUrl() {
        return this._imageUrl;
    }

}

export default VideoDTO;