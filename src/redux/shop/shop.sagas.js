// This will listen to every action
import {takeEvery, call, put} from 'redux-saga/effects'

// Import the actions to listen to
import shopActionTypes from './shop.types'

// Use generator funtion to fun shopAction Types

function* fetchCollectionAsync() {
   yield console.log('I am being fired');

      // Using saga
     /** export function* fectionCollectionsAsync() {
      *   yield console.log("i am fired")
      * try{
      * * const collectionRef = firestore.collection('user')
      * const snapShot = yield collectionRef.get();
      * const collectionMap = yield call(converColletionShapToMap, snapshot)
      * }catch(err){
      *  call the handle error function to dispatch using 'put' as sagas dispatch method
      * yield put(fetchCollectionsFailure(colletionsMap))
      * }
      *     yield put(fetchCollectionsFailure(error.message))
      * } */
}

// import the function below into the store where to use it
export function* fetchCollectionsStart(){
    yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}