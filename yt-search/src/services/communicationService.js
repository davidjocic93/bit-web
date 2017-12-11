import { API_KEY} from "../constants";
import axios from "axios";

class CommunicationService {
    constructor() { }


    getRequest(url, queryParam, succesHandler, errorHandler) {

        const requestUrl = `${BASE_URL}${url}`;

        axios.get(requestUrl, {
            params: {
                "q": queryParam,
                "APPID": APPID,
                "units": "metric"
            }
        })
            .then(response => succesHandler(response))
            .catch((error) => errorHandler(error));
    }

}


export const communicationService = new CommunicationService();