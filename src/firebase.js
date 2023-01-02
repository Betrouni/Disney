import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmx-hWK4joqdFu1Axm3uxgffwbI8AiDRQ",
    authDomain: "disney-clone-a81b3.firebaseapp.com",
    projectId: "disney-clone-a81b3",
    storageBucket: "disney-clone-a81b3.appspot.com",
    messagingSenderId: "814570538133",
    appId: "1:814570538133:web:6f4f4890db369c583d079c",
    measurementId: "G-WPQLG80P18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db