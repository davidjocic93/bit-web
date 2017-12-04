import { BASE_URL } from "../constants";
import axios from "axios";

class CommunicationService {
    // constructor() { }

    // createHeaders() {

    //     let sessionId = sessionStorage.getItem(SESSION_ID);

    //     if (sessionId) {
    //         return {
    //             "Key": API_KEY,
    //             "SessionId": sessionId
    //         };
    //     }

    //     return {
    //         "Key": API_KEY
    //     };
    // }

    getRequest(url, successHandler, errorHandler) {
        const requestUrl = `${BASE_URL}${url}`;

        axios.get(requestUrl)
            .then(response => successHandler(response))
            .catch((error) => errorHandler(error));
    }


}

export const communicationService = new CommunicationService();