export class AuthState {
    response;
    isSignedIn;
    constructor(props) {
        this.response = props.response;
        this.isSignedIn = props.isSignedIn
    }
}