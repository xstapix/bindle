import { Link } from "react-router-dom";
import './Sign.sass'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

const SignInPage = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()

  const handleSignIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
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
      <h1 className='signIn_hello'>Hello Again!</h1>
      <p className='signIn_text'>We're glad to see you</p>
      <div className='container'>
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
        <p className='recovery'>Recovery password</p>
        <button className='button_signin' onClick={handleSignIn}>Sign In</button>
        <div className='footer_line'></div>
        <p className='havenotAcc'>Don’t have an account? <Link className="signup" to='/signup'>Sign up</Link></p>
      </div>
    </div>
  )
}

export {SignInPage}