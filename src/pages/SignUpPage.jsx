import './Sign.sass'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

const SignUpPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  
  const handleSignUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
      })
      .catch(console.error)
  }

  return (
    <div className='signIn'>
      <h1 className='signIn_hello'>Get Started!</h1>
      <p className='signIn_text'>Let’s create your account</p>
      <div className='container'>
        {/* <input className='inputEmail' type='text' placeholder='Type your email address'/> */}
        <input 
          className='inputEmail' 
          type='email' 
          placeholder='Type your email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <input 
          className='inputPassword' 
          type='password' 
          placeholder='Type your password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}/>
        <button className='button_signin' onClick={handleSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export {SignUpPage}