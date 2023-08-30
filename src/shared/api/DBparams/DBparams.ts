import type { AxiosPromise } from "axios";
import { apiInstance } from "./base";
import type { DBparams } from "./model";
import {URL} from "../../config";
const PARAM_URL = URL + "/DBparam"

export const getDBParam = (): AxiosPromise<DBparams[]> => {
    return apiInstance.get(PARAM_URL);
};

export const setDBParam = ( data: DBparams): AxiosPromise<DBparams> => {
    return apiInstance.put(PARAM_URL, data);
};