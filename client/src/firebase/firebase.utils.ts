import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
  FirebaseUser,
  QuerySnapshot,
  DocData,
  Collections,
  Collection,
  UserAdditionalData,
  DocumentReference,
  UserData,
} from "../interfaces";

const config = {
  apiKey: "AIzaSyCup3uul-xr9zNo2GHnnkBSTRbXD2I5U1o",
  authDomain: "e-commerce-db-16ef6.firebaseapp.com",
  databaseURL: "https://e-commerce-db-16ef6.firebaseio.com",
  projectId: "e-commerce-db-16ef6",
  storageBucket: "e-commerce-db-16ef6.appspot.com",
  messagingSenderId: "319828611917",
  appId: "1:319828611917:web:1ba1b90d91e75382f65d04",
  measurementId: "G-4BL1SY8MW0",
};

export const createUserProfileDocument = async (
  userAuth: FirebaseUser,
  additionalData?: UserAdditionalData,
): Promise<DocumentReference | undefined> => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const userData: UserData = {
      displayName,
      email,
      createdAt,
      ...additionalData,
    };

    try {
      await userRef.set(userData);
    } catch (e) {
      console.error("error creating user", e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (
  collections: QuerySnapshot,
): Collections => {
  const transformedCollection: Collection[] = collections.docs.map((doc) => {
    const { title, items } = doc.data() as DocData;

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {} as { [key: string]: Collection });
};

export const getCurrentUser = (): Promise<FirebaseUser | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
