// import firebase from 'firebase/app';
// import 'firebase/firestore'
// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBUg3bgd2xsHTZTT-151fgRdWhiEubc0w0",
    authDomain: "crown-db-9f6e6.firebaseapp.com",
    projectId: "crown-db-9f6e6",
    storageBucket: "crown-db-9f6e6.appspot.com",
    messagingSenderId: "178434100661",
    appId: "1:178434100661:web:8a935267eaf3101d689dfc",
    measurementId: "G-RZ6WH19435"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if ( !userAuth ) return;
    
    const userRef = firestore.doc(`user/${userAuth.uid}`);
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user' + error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
