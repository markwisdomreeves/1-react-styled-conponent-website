import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjThree } from "./SignupData";


function SignUp() {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
        </>
    );
}


export default SignUp;