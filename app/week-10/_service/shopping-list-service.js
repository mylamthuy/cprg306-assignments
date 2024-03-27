import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


// retrieve all items for a specific user
export const getItems = async (userId) => {
    try {
      const userItemCollectionRef = collection(db, "users", userId, "items");
      const userItemSnapshot = await getDocs(userItemCollectionRef);
  
      const items = userItemSnapshot.docs.map((userItemDoc) => ({
        id: userItemDoc.id,
        ...userItemDoc.data(),
      }));
  
      return items;

    } catch (fetchUserItemError) {
      console.error("Error in getItems: ", fetchUserItemError);
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