import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './src/firebase.js'


import './src/singupForm.js'
import './src/logut.js'
import './src/signinForm.js'
import { loginCheck} from './src/loginCheck.js'

onAuthStateChanged(auth, async (user)=>{
    
        loginCheck(user)
    
})