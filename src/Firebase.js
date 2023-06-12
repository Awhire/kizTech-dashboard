import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxPFD5zfsWmUMEwGCy_1GgWpOX80WECec",
  authDomain: "admin-dashboard-8aa5f.firebaseapp.com",
  projectId: "admin-dashboard-8aa5f",
  storageBucket: "admin-dashboard-8aa5f.appspot.com",
  messagingSenderId: "830784745943",
  appId: "1:830784745943:web:c3eaa18f038d57dceadb92"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()