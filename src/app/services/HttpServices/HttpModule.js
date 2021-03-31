import axios from "axios";
import config from "src/environments/config";
import { toast } from "react-toastify";
export const useHttpModule = (headers = {}, authorization = true, baseURL = `${config.useApiPath.apiEndpoint}`) => {
    const instance = axios.create({
        baseURL: baseURL,
        headers: {
            ...headers,
        }
    });

    instance.interceptors.request.use(
        async (value) => {
            if (authorization) { value.headers.common['authorization'] = `Bearer ${localStorage.getItem('pps-token')}`; }
            // console.log("value request axios: " + JSON.stringify(value))
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in request axios:" + error)
            toast.error(`${config.useMessage.fetchApiFailure} - ${error}`)
            // return Promise.reject(error);
            throw error
        }
    );

    instance.interceptors.response.use(
        async (value) => {
            // console.log("value response axios: " + JSON.stringify(value))
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in response axios: " + error)
            toast.error(`${config.useMessage.fetchApiFailure} - ${error}`)
            // return Promise.reject(error);
            throw error
        }
    );
    return instance;
};

export const useHttpModuleAWS = (headers = {}) => {
    const instance = axios.create({
        baseURL: "",
        headers: {
            ...headers,
        }
    });

    instance.interceptors.request.use(
        async (value) => {
            console.log("value request AWS  axios: " + JSON.stringify(value))
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in request AWS axios:" + error)
            toast.error(`${config.useMessage.fetchApiFailure} - ${error}`)
            // return Promise.reject(error);
            throw error
        }
    );

    instance.interceptors.response.use(
        async (value) => {
            console.log("value response AWS axios: " + JSON.stringify(value))
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in response AWS axios: " + error)
            toast.error(`${config.useMessage.fetchApiFailure} - ${error}`)
            // return Promise.reject(error);
            throw error
        }
    );
    return instance;
};


