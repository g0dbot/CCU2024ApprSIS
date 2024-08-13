import { db } from '../firebase'
import { doc, deleteDoc } from "firebase/firestore";

async function CRUDDeleteDoc(id) {
    const docRef = doc(db, "users", id);
  
    try {
      await deleteDoc(docRef);
      return true
    } catch (e) {
      console.error("Error deleting doc: ", e);
      return false;
    }
}

export default CRUDDeleteDoc;