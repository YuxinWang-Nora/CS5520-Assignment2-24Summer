import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(data, collectionName) {
    try {
        await addDoc(collection(database, collectionName), data);
        console.log(collectionName, data, "successfully written to DB!");
    }
    catch (err) {
        console.log(err)
    }
}

export async function deleteFromDB(id, collectionName) {
    try {
        await deleteDoc(doc(database, collectionName, id));
        console.log(collectionName, id, "successfully deleted!");
    }
    catch (err) {
        console.log(err)
    }
}

export async function updateDB(id, collectionName, updatedData) {
    try {
        await updateDoc(doc(database, collectionName, id), updatedData);
        console.log(collectionName, id, "successfully updated as", updatedData);
    }
    catch (err) {
        console.log(err)
    }
}