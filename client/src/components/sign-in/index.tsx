import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import FormInput from "../form-input";
import CustomButton from "../custom-button";

import { googleSignInStart, emailSignInStart } from "../../redux/user/actions";

import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";

type Props = {
  emailSignInStart(email: string, password: string): void;
  googleSignInStart(): void;
};

const SignIn = ({ emailSignInStart, googleSignInStart }: Props) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span> Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
