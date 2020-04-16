import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { UserCredentials } from "../../interfaces";

import FormInput from "../form-input";
import CustomButton from "../custom-button";

import { signUptStart } from "../../redux/user/actions";

import { SignUpContainer, SignUpTitle } from "./styles";

type Props = {
  signUptStart({ ...data }: UserCredentials): void;
};

const SignUp = ({ signUptStart }: Props) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    signUptStart({ displayName, email, password });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form action="" className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUptStart: (userCredentials: UserCredentials) =>
    dispatch(signUptStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
