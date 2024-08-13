import { db } from "../firebase";
import { getDoc, doc } from "firebase/firestore"

const CRUDGetDocsId = async (id) => {
    try{
        //we add the document as such to the collection
        const docRef = doc ( db, 'users', id);
        const docSnapshot = await getDoc ( docRef );
        const docData = docSnapshot.data();

        return docData;
    }
    catch (error) {
        return 0;
    }
}
 
export default CRUDGetDocsId ;