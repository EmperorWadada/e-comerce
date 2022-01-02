
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
    // const collectionRef = firestore.collection('user')

    const snapShot = await userRef.get()
    // const collectionSnapShot = await collectionRef.get();
    // console.log({collectionSnapShot: collectionSnapShot.docs.map(doc => doc.data())});

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

export const addCollectionAndDocument = async (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    
    const batch = firestore.batch();
    objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        // console.log(newDocRef);

        batch.set(newDocRef, obj)
    })

    return await batch.commit();
}

// Creating a promised base unsubscribe to be use by saga

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
};

//Read data from firestor database

// export const convertCollectionsSnpashotToMap = (collections) => {
//     const transformedCollection = collections.docs.map(doc => {
//         const {title, items} = doc.data();

//         return {
//             routeName: encodeURI(title.toLowerCase()),
//             id: doc.id,
//             title,
//             items
//         }
//     });

//     return transformdCollection.reduce((accumulator, collection) => {
        //  accumulator[collection.titlte.toLowerCase()] = collections;
        // return acculator },
        // {})
// }

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
