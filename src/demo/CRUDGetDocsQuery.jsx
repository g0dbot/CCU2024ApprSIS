import { db } from "../firebase";
import { getDocs, collection, where, limit, query } from "firebase/firestore"

const CRUDGetDocsQuery = async (name) => {
    try{
        //Reference to the users collection
        const usersCollRef = collection(db, 'users');

        //Query for documents where the uid field matches the provided uid
        const q = query(usersCollRef, where('name', '==', name), limit(1));

        // Execute the query and get the snapshot of the results
        const querySnapshot = await getDocs(q);

        //Check if there are any matching documents
        if (!querySnapshot.empty) {

            //Access the first (and only) document in the query results
            const doc = querySnapshot.docs[0];
            
            // Return the data of the document
            return doc.data();

        } else {
            // If no matching document found, return null
            console.log('No user found with the specified UID.');
            return null;
        }
        
    }
    catch (error) {
        return null;
    }
}
 
export default CRUDGetDocsQuery ;