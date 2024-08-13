import { db } from '../firebase'
import { doc, onSnapshot } from "firebase/firestore";

const DocListeners = (id) => {
    const docRef = doc(db, "users", id);

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          const user = docSnap.data();  
          console.log("Current data: ", user);
        } else {
          console.log("No such document!");
        }
    });

    return unsubscribe;
}
 
export default DocListeners;