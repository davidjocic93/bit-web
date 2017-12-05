class City {
    constructor(id, name, lng, lat, temp, humidity) {
        this._id = id;
        this._name = name;
        this._lng = lng;
        this._lat = lat;
        this._temp = temp;
        this._humidity = humidity;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get lng() {
        return this._lng;
    }

    get lat() {
        return this._lat;
    }

    get temp() {
        return this._temp;
    }
    
    get humidity() {
        return this._humidity;
    }
}

export default City;