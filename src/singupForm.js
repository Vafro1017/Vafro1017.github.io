import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth} from './firebase.js'

const singupForm = document.querySelector('#singup-form')

singupForm.addEventListener('submit', async(e)=>{
    e.preventDefault()

    const email = singupForm['singup-email'].value
    const password = singupForm['singup-password'].value

    console.log(email,password)

    

    try {
        const userCridentials = await createUserWithEmailAndPassword(auth,email,password)
        console.log(userCridentials)

        const singupmodal = document.querySelector('#SigUpModal')
        const modal= bootstrap.Modal.getInstance(singupmodal)
        modal.hide()
        
    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/invalid-email'){
            alert('invalid email, please submit an email that exist')
        }
        else  if (error.code === 'auth/weak-password'){
            alert('unsafe password')
        }
        else  if (error.code === 'auth/email-already-in-use'){
            alert('email already in use')
        }

    }
})