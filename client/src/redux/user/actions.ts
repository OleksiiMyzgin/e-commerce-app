import { UserActionTypes } from "./action-types";

import {
  FirebaseUser,
  FirebaseError,
  EmailSign,
  UserCredentials,
  UserAdditionalData,
  UserData,
} from "../../interfaces";

export type SignInSuccess = {
  type: UserActionTypes.SIGN_IN_SUCCESS;
  payload: UserData;
};

export type SignOutSuccess = {
  type: UserActionTypes.SIGN_OUT_SUCCESS;
};

export type SignInFailure = {
  type: UserActionTypes.SIGN_IN_FAILURE;
  payload: FirebaseError;
};

export type SignOutFailure = {
  type: UserActionTypes.SIGN_OUT_FAILURE;
  payload: FirebaseError;
};

export type SignUpFailure = {
  type: UserActionTypes.SIGN_UP_FAILURE;
  payload: FirebaseError;
};

export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword: EmailSign) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user: UserData): SignInSuccess => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: FirebaseError): SignInFailure => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signOutStart = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = (): SignOutSuccess => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error: FirebaseError): SignOutFailure => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUptStart = (userCredentials: UserCredentials) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({
  user,
  additionalData,
}: {
  user: FirebaseUser;
  additionalData: UserAdditionalData;
}) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error: FirebaseError): SignUpFailure => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export type Action =
  | SignInSuccess
  | SignOutSuccess
  | SignInFailure
  | SignOutFailure
  | SignUpFailure;
