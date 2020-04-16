import React from "react";

import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import { SignInAndSignUpContainer } from "./styles";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
