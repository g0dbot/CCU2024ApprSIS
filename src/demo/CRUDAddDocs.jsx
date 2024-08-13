import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"
import { user } from './User'// importing dummy data

const CRUDAddDocs = async() => {
    try{
        //we reference the users collection
        const collRef = collection(db, "users")

        //we add the document as such to the collection
        await addDoc (collRef, user)

        return true
    }

    catch (error) {
        return false
    }
}
 
export default CRUDAddDocs;