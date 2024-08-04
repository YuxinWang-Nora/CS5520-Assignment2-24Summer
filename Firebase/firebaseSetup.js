import { initializeApp } from "firebase/app";
import { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId } from "@env";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);