import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: import.meta.env['VITE_API_KEY'].replace(/[" ,]/g, ''),
    authDomain: import.meta.env['VITE_AUTH_DOMAIN'].replace(/[" ,]/g, ''),
    projectId: import.meta.env['VITE_PROJECT_ID'].replace(/[" ,]/g, ''),
    storageBucket: import.meta.env['VITE_STORAGE_BUCKET'].replace(/[" ,]/g, ''),
    messagingSenderId: import.meta.env['VITE_MESSAGING_SENDER_ID'].replace(/[" ,]/g, ''),
    appId: import.meta.env['VITE_APP_ID'].replace(/[" ,]/g, '')
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;