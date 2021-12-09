import React,{useState, useEffect} from 'react'
import db from "../../firebase/firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {useParams} from 'react-router-dom'

function Jest() {
    const db = getFirestore();
    const {location,coName} = useParams();


  const [todos, setTodos] = useState([]);
  
  const fetchdata = async () => {
    const querySnapshot = await getDocs(collection(db, "jobs"));
    querySnapshot.forEach((doc) => {
      setTodos((prev) => {
        return [...prev, doc.data()];
      });
    });
  };

  useEffect(() => {
    fetchdata();
  }, []);
    return (
        <div>
            <h2>{coName}</h2>
            <h2>{location}</h2>
        </div>
    )
}

export default Jest;
