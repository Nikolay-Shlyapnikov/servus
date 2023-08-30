import axios from "axios";
import { URL } from "shared/config";

// Потенциально, можно передавать accessToken
export const apiInstance = axios.create({
    baseURL: URL
});