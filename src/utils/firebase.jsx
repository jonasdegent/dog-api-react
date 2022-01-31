import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getDatabase, ref, set, get, child, remove } from "firebase/database";
// import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "dog-api-react-fixed"
};

const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);


// export const writeItem = (item) => {
//   const id = uuidv4();
//   set(ref(firebase, "dog-favorites/" + id), item);
// };

// export const updateItem = (id, item) => {
//   set(ref(firebase, "dog-favorites/" + id), item);
// };

// export const readItem = async (itemId) => {
//   const dbRef = ref(firebase);
//   const snapshot = await get(child(dbRef, `dog-favorites/${itemId}`));
//   if (snapshot.exists()) {
//     return snapshot.val();
//   }
// };

// export const removeItem = async (id) => {
//   await remove(ref(firebase, "dog-favorites/" + id));
// };