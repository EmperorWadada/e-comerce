import { firestore } from "../../components/firebase/firebase.util";
import shopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsError = (errorMessage) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('user');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapShot => {
            const collectionsMap= [];
            // const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            dispatch(fetchCollectionsSuccess(collectionsMap));
        }).then(error => dispatch(fetchCollectionsError(error.message)))
    }
}