import { createSelector } from "reselect";
import { RootState } from "../../interfaces";

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections,
);
