import { initializeApp } from "firebase/app";
import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         GoogleAuthProvider,
         signInWithPopup,
         onAuthStateChanged
} from "firebase/auth";
import { reactive } from "vue";


const firebaseConfig = {
    apiKey: "AIzaSyBxDVYSLfWPPT5YlqmFrJS9sea_TzZucy4",
    authDomain: "authentication-d7b33.firebaseapp.com",
    projectId: "authentication-d7b33",
    storageBucket: "authentication-d7b33.appspot.com",
    messagingSenderId: "317946103387",
    appId: "1:317946103387:web:2e001db5a295859cbae17e"
  };

const app = initializeApp(firebaseConfig);


const auth = getAuth();
const provider = new GoogleAuthProvider();

const authState = reactive({
    isSignedIn: false,
});

onAuthStateChanged(auth, (user) => {
    authState.isSignedIn = user !== null;
});


export const signupUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signoutUser = () => {
    return signOut(auth);
};

export const googleSignIn = () => {
    return signInWithPopup(auth, provider);
};

export const googleAuth = () => {
    return GoogleAuthProvider();
};

export default authState;