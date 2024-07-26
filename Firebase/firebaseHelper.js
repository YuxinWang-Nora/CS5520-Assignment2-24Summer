import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
    try {
        await addDoc(collection(database, collectionName), data);
    }
    catch (err) {
        console.log(err)
    }
}