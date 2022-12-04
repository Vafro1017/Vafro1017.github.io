import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener( 'submit', async e =>{
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    

     try {
        const credentials = await signInWithEmailAndPassword(auth,email,password)
        console.log(credentials)

        const singinmodal = document.querySelector('#SigInModal')
        const modal= bootstrap.Modal.getInstance(singinmodal)
        modal.hide()

     } catch (error) {
        if (error.code === "auth/wrong-password"){
            alert('wrong password')
        } else if (error.code === "auth/user-not-found"){
            alert('eamil or password are incorrect')
        }
     }
})