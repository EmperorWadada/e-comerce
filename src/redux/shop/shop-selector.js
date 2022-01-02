import { createSelector } from "reselect";

// AFTER NORMALIZATION SHOPDATA IN ARRAY IN NOW COVERTED TO OBJECT

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    shop => shop.shopData
)

// export const selectCollectionFromObject = createSelector(
//     [selectShopData],
//     shopData => Object.keys(shopData).map(key => shopData[key])
// )

export const selectCollection = collectionId => 
createSelector(
    [selectShopData],
    // Before normalization

    shopData => shopData.find(shopData => shopData.id === COLLECTION_ID_MAP[collectionId])
    // After normalization
    // shopData => shopData[collectionId]
)

export const selectIsCollectionFetching = createSelector(
    [selectShopData],
    shop => shop.isFetching
)
