import { useEffect } from "react"
import { firestore } from "../firebase/firebase.util"

const collectionPage1 = () => {

    useEffect(()=> {
        console.log('I am subscribing');
        const unSubscribeFromAuth = firestore.collection('use').onSnapshot(snapShot =>
            console.log(snapShot)
            )
        // clean up function
        return () => {
            console.log('i am unsubscribing!..');
            unSubscribeFromAuth();
        }
    }, [])
}