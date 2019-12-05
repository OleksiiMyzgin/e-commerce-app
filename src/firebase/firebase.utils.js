import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCup3uul-xr9zNo2GHnnkBSTRbXD2I5U1o",
	authDomain: "e-commerce-db-16ef6.firebaseapp.com",
	databaseURL: "https://e-commerce-db-16ef6.firebaseio.com",
	projectId: "e-commerce-db-16ef6",
	storageBucket: "e-commerce-db-16ef6.appspot.com",
	messagingSenderId: "319828611917",
	appId: "1:319828611917:web:1ba1b90d91e75382f65d04",
	measurementId: "G-4BL1SY8MW0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
