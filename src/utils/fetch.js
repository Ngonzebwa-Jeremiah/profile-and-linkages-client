/* eslint-disable */
import { app } from "../firebase/firebase";
import {
  getFirestore,
  getDoc,
  getDocs,
  collection,
  doc,
} from "@firebase/firestore";

const db = getFirestore();

const fetchAll = async (collectionName) => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    return data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};

const fetchOne = async (collectionName, id) => {
  const data = await getDoc(doc(db, collectionName, id));
  return data.data();
};

export { fetchAll, fetchOne };
