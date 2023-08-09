import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCED7DI_Fg39WkgPRA2lwJE3m2Gtl42wzo",
  authDomain: "webcarros-42774.firebaseapp.com",
  projectId: "webcarros-42774",
  storageBucket: "webcarros-42774.appspot.com",
  messagingSenderId: "592303658252",
  appId: "1:592303658252:web:d53ed4aaee8f4cdb81e529"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }