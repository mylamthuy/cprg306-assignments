import { db } from "../_utils/firebase";
import {
  collection,
  addDoc,
  getDoc,
  onSnapshot,
  query,
  doc,
  where,
} from "firebase/firestore";


// retrieve all items for a specific user
  export const getItems = (userId, onUpdate) => {
    try {
      const userItemCollectionRef = collection(db, "users", userId, "items");
  
      const unsubscribe = onSnapshot(userItemCollectionRef, (snapshot) => {
        const items = snapshot.docs.map((userItemDoc) => ({
          id: userItemDoc.id,
          ...userItemDoc.data(),
        }));
        onUpdate(items);
      });
  
      return unsubscribe;
    } catch (error) {
      console.error("Error in getItems: ", error);
      // Handle the error by calling onUpdate with an empty array or other error handling logic
      onUpdate([]);
    }
  };


// add a new item to a specific user's list of items
export const addItem = async (userId, item) => {
    try {
      const userItemCollectionRef = collection(db, "users", userId, "items");
      const userItemDocRef = await addDoc(userItemCollectionRef, item);
  
      return userItemDocRef.id;
    } catch (addItemError) {
      console.error("Error in addItem: ", addItemError);
    }
};