class ShowDTO {
    constructor(name, imageUrl, id ) {
        this._name = name;
        this._imageUrl = imageUrl;
        this._id = id;
    }

    get name(){
        return this._name;
    }

    get imageUrl(){
        return this._imageUrl;
    }
    
    get id(){
        return this._id;
    }


}

export default ShowDTO;