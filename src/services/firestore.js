import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBSE_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBSE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBSE_MEASUERMENT_ID
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const firestore = firebase.firestore()

export {firestore}