import { useHttpModule } from "../BaseServices"
import config from "environments/config"
export class AuthService {
    static signIn = (data) => {
        return useHttpModule().post(config.useApiPath.api.signin, data)
    }
    static signUp = (data) => {
        return useHttpModule().post(config.useApiPath.api.signup, data)
    }
}