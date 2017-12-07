import { API_KEY, BASE_URL} from "../constants";
import axios from "axios";

class CommunicationService {
    constructor() { }


    getRequest(url, queryParam, succesHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;

        axios.get(requestUrl, {
            params: {
                "q": queryParam,
                "api_key": API_KEY,
                "limit": 100,
                "offset": 0,
                "rating": "G",
                "lang": "en..."
            }
        })
            .then(response => succesHandler(response))
            .catch((error) => errorHandler(error));
    }

}


export const communicationService = new CommunicationService();