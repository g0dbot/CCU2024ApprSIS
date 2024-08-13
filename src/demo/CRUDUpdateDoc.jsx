import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const CRUDUpdateDoc = async(id) => {
    const updatedData = {
        city: "San Francisco"
    }

    try {
        const docRef = doc(db, "users", id)
        await updateDoc(docRef, updatedData)
        console.log("Data updated")
    } catch (error) {
        console.error("Error updating doc", error)
    }
}
 
export default CRUDUpdateDoc;