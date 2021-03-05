import React, { useState, useCallback } from "react";
import SignIn from "../../components/SignIn";

const SignInPage = () => {
  let [isVisible, setVisible] = useState(true);
  const useToggle = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);
  // console.log("isVisible" + isVisible);
  return (
    <>
      {/* <p>hello SignInPage</p> */}
      <SignIn toggle={useToggle} isVisible={isVisible}></SignIn>
    </>
  );
};

export default SignInPage;
