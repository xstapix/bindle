import { Link, useNavigate } from "react-router-dom";
import './Sign.sass'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

const SignInPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [emailActive, setEmailActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const [passVisible, setPassVisible] = useState(false)
  const [emailError, setEmailError] = useState('Email cannot be empty')
  const [passError, setPassError] = useState('Password cannot be empty')
  const [errorSignInWithEmail, setErrorSignInWithEmail] = useState(false)

  const handleSignIn = () => {
    if (!emailError && !passError) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }))
          navigate('/')
        })
        .catch(setErrorSignInWithEmail(true))
    }
  }

  const handlerBlure = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailActive(true)
        setErrorSignInWithEmail(false)
        break;
      
      case 'password':
        setPassActive(true)
        setErrorSignInWithEmail(false)
        break;
    }
  }

  const handlerEmail = (e) => {
    setEmail(e.target.value)

    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(!re.test(String(e.target.value).toLowerCase())){
     setEmailError('Email not correct') 
    } else {
      setEmailError('') 
    }
  }

  const handlerPassword = (e) => {
    setPass(e.target.value)
    
    if (e.target.value.length < 6) {
      setPassError('Password must contain more than 6 digits')
    } else {
      setPassError('')
    }
  }

  const handlerVisible = () => {
    passVisible ? setPassVisible(false) : setPassVisible(true)
  }
  
  return (
    <div className='signIn'>
      <h1 className='signIn_hello'>Hello Again!</h1>
      <p className='signIn_text'>We're glad to see you</p>
      <div className='container'>
        {(emailActive && emailError) && <p style={{color: '#FF5E60'}}>{emailError}</p>}
        <input 
          className='inputEmail'
          name='email'
          type='email' 
          placeholder='Type your email address'
          value={email}
          onBlur={e => handlerBlure(e)}
          onChange={e => handlerEmail(e)}/>
          
        {(passActive && passError) && <p style={{color: '#FF5E60'}}>{passError}</p>}
        <form className="passForm">
          <input 
            className='inputPassword' 
            name='password'
            type={passVisible ? 'text' : 'password'} 
            placeholder='Type your password'
            value={pass}
            onBlur={e => handlerBlure(e)}
            onChange={e => handlerPassword(e)}/>

          <img onClick={handlerVisible} alt="visibility" src="./image/svg/passVisi.svg"/>
        </form>
        <p className='recovery'>Recovery password</p>

        {errorSignInWithEmail ? <p style={{color: '#FF5E60'}}>Incorrect credentials</p> : <></>}
        {(!passError && !emailError) ? 
          <button className='button_signin button_signin-active' onClick={handleSignIn}>Sign In</button>
        : <button className='button_signin button_signin-disable' onClick={handleSignIn}>Sign In</button>}
        <div className='footer_line'></div>
        <p className='havenotAcc'>Don’t have an account? <Link className="signup" to='/signup'>Sign up</Link></p>
      </div>
    </div>
  )
}

export {SignInPage}