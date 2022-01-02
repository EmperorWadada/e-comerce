import {takeLatest, put, all, call} from 'redux-saga/effects';
import { getCurrentUser } from '../../components/firebase/firebase.util';
import UserActionType from './user.types';
import { auth, googleProvider, createUserProfileDocument } from '../../components/firebase/firebase.util';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpError, signUpSuccess } from './user.action';

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const snapShot = yield userRef.get();
        yield put(signInSuccess({id: snapShot.id, ...snapShot.data()}));
    } catch (error) {
        yield put(signInFailure(error))
    }
}


export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        // const userRef = yield call(createUserProfileDocument, user);
        // const snapShot = yield userRef.get();
        // yield put(signInSuccess({id: snapShot.id, ...snapShot.data()}));
        // console.log(snapShot.data());
        yield getSnapShotFromUserAuth(user);
        yield put(signInSuccess(user))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmailAndPassword({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        // const userRef = yield call(createUserProfileDocument, user);
        // const snapShot = yield userRef.get();
        // yield put(signInSuccess({id: snapShot.id, ...snapShot.data()}));
        // console.log(snapShot.data());
        getSnapShotFromUserAuth(user);
        put(signInSuccess(user))
    } catch (error) {
        put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionType.SIGN_IN_START, signInWithEmailAndPassword)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapShotFromUserAuth(userAuth);
    } catch (error) {
        put(signInFailure(error))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionType.SIGN_OUT_START, signOutUser)
}

export function* signUp({payload:{email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        // yield createUserProfileDocument(user);
       yield put(signUpSuccess({user, additionalData: {displayName}}))
        
    } catch (error) {
       yield put(signUpError(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionType.SIGN_UP_START, signUp)
}

export function* signInAfterSignUP({payload: {user, additionalData}}) {
    yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionType.SIGN_UP_SUCCESS, signInAfterSignUP)
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)]);
}