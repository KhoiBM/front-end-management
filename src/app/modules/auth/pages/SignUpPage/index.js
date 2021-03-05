import React, { useState, useCallback } from "react";
import SignUp from "../../components/SignUp";

const SignUpPage = () => {
    let [isVisible, setVisible] = useState(true);
    const useToggle = useCallback(() => {
        setVisible(!isVisible);
    }, [isVisible]);
    console.log("isVisible" + isVisible);
    return (
        <>
            {/* <p>hello SignUpPage</p> */}
            <SignUp toggle={useToggle} isVisible={isVisible}></SignUp>
        </>
    );
};

export default SignUpPage;
