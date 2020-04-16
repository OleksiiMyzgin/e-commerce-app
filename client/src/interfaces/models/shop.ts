import { Collections, FirebaseError } from "../index";

export type Shop = {
  collections: Collections | null;
  isFetching: boolean;
  errorMessage: FirebaseError | undefined;
};
