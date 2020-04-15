import firebase from "firebase/app";

export type FirebaseUser = firebase.User | null;
export type QuerySnapshot = firebase.firestore.QuerySnapshot;
export type FirebaseError = firebase.FirebaseError;
