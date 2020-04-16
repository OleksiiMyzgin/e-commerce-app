import { ShopActionTypes } from "./action-types";

import { Collections, FirebaseError } from "../../interfaces";

type FetchCollectionsStart = {
  type: ShopActionTypes.FETCH_COLLECTIONS_START;
};

type FetchCollectionsSuccess = {
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS;
  payload: Collections;
};

type FetchCollectionsFailure = {
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE;
  payload: FirebaseError;
};

export const fetchCollectionsStart = (): FetchCollectionsStart => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (
  collectionsMap: Collections,
): FetchCollectionsSuccess => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage: FirebaseError) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export type Action =
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsFailure;
