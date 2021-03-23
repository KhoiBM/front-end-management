import axios from "axios";
import config from "src/environments/config";
export const useHttpModule = (headers = {}, authorization = true) => {
    const instance = axios.create({
        baseURL: `${config.useApiPath.apiEndpoint}`,
        headers: headers
    });

    instance.interceptors.request.use(
        async (value) => {
            if (authorization) { value.headers.common['authorization'] = `Bearer ${localStorage.getItem('pps-token')}`; }
            // console.log("value request axios: " + JSON.stringify(value))
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in request axios")
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        async (value) => {
            return Promise.resolve(value);
        }, (error) => {
            console.log("error in response axios")
            return Promise.reject(error);
        }
    );
    return instance;
};



    // headers: {
    //     "X-Amz-Content-Sha256": "beaead3198f7da1e70d03ab969765e0821b24fc913697e929e726aeaebf0eba3",
    //     "X-Amz-Date": "20210206T175703Z",
    //     "Authorization": "AWS4-HMAC-SHA256 Credential=AKIA43ERJJJVK4DJ5BF5/20210206/ap-southeast-1/execute-api/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=fcc52e4b5c1265b36aac2fa9ad8e04e7ec1bb0b1ee5f0f1ddbe071eac7f3c8e3",
    //     "Content-Type": "application/json"
    // }