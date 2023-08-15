// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDeZfJEWznFQ_Y_Zzh8iroawvz4IqGPS7E',
    authDomain: 'todo-app-52801.firebaseapp.com',
    projectId: 'todo-app-52801',
    storageBucket: 'interview-tracker-d9236.appspot.com',
    messagingSenderId: '961721982303',
    appId: '1:961721982303:web:ae37cc46b718ccf8cfaaea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};
