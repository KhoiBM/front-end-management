import axios from "axios";
import config from '../../../environments/config'
export const useHttpModule = () => {
    const instance = axios.create({
        baseURL: `${config.useApiPath.apiEndpoint}`,
    });

    instance.interceptors.request.use(
        async (value) => {
            value.headers.common['authorization'] = `Bearer ${localStorage.getItem('pps-token')}`;
            return Promise.resolve(value);
        }
    );

    instance.interceptors.response.use(
        async (value) => {
            return Promise.resolve(value);
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