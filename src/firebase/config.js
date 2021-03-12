import * as firebase from "firebase";
import '@firebase/auth'
import '@firebase/Firestore'


const firebaseConfig={
    apiKey:'AIzaSyDn-Msfd7fYNsnaNvvV3tL-Yd7ZFcZVAec',
    authDomain:'',
    databaseURL:'',
    projectId:'react-native-project1-987fb',
    storageBucket:'react-native-project1-987fb.appspot.com',
    messagingSenderId:'626409029615',
    appId:'1:626409029615:android:2bdfd17df07d2485b4001a',


};

if (firebase.app.length){
    firebase.initializeApp(firebaseConfig);

}

export {firebase};