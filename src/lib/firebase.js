import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file
// import { seedDatabase} from '../seed';

const config = {    
    apiKey: 'AIzaSyDn-swyJvSD7Eab6qANSy3xdCyn2rRVt8k',
    authDomain: 'instagram-clone-6c51b.firebaseapp.com',
    projectId: 'instagram-clone-6c51b',
    storageBucket: 'instagram-clone-6c51b.appspot.com',
    messagingSenderId: '1001041141053',
    appId: '1:1001041141053:web:1115dedb57e4ef1893b954'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed (Once)
// seedDatabase(firebase);



export { firebase, FieldValue };