import axios from "axios";

const httpClient = axios.create(
    {
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }
    }
);

export default httpClient;
