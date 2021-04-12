import fb from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyAgqAWYtLcWSkbpoAy4WqcbLHjBvmJcT1Y",
    authDomain: "learning-d285f.firebaseapp.com",
    databaseURL: "learning-d285f.firebaseio.com",
    projectId: "learning-d285f",
    storageBucket: "learning-d285f.appspot.com",
    messagingSenderId: "533278715331",
    appId: "1:533278715331:web:5fabda19ca537c05ce2176",
    measurementId: "G-4XXE1CVNKF"
};
const firebase = !fb.apps.length ? fb.initializeApp(firebaseConfig) : fb.app()
export default firebase
export const auth = firebase.auth()
