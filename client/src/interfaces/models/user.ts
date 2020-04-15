import { FirebaseUser, FirebaseError } from "../index";

export type User = {
  currentUser: FirebaseUser | null;
  error: FirebaseError | null;
};
