//Использую firebase проект Portfolio

import {initializeApp} from 'firebase/app';
import {getDatabase, get, set, ref} from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCZdpNFfeo4_1X6_hBUPMRqYcN6xRvkQXU",
  authDomain: "myportfolio-f2b83.firebaseapp.com",
  databaseURL: "https://myportfolio-f2b83-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myportfolio-f2b83",
  storageBucket: "myportfolio-f2b83.appspot.com",
  messagingSenderId: "386251317971",
  appId: "1:386251317971:web:706111e97eff1895fe6a26",
  measurementId: "G-45N5XGJYSG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getDataList = async (recourse: string) => {
    const recourseRef = ref(db, recourse);
    const data = await get(recourseRef);
    const recourseValue = data.val();
    return recourseValue;
}

export const postDataList = async (recourse: string, elem: string, id: number) => {
  const recourseRef = ref(db,`${recourse}/${id}`);

  try{
    set(recourseRef, elem);
    console.log('good')
  } catch(err) {
    console.error(err);
  }
}
