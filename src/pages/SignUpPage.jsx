import './Sign.sass'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slice/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from 'react';

const SignUpPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [emailActive, setEmailActive] = useState(false)
  const [passActive, setPassActive] = useState(false)
  const [emailError, setEmailError] = useState('Email cannot be empty')
  const [passError, setPassError] = useState('Password cannot be empty')
  const [errorCreateUser, setErrorCreateUser] = useState(false)

  const handleSignUp = () => {
    if (!emailError && !passError) {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, email, pass)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            token: user.accessToken,
            id: user.uid
          }))
          navigate('/')
        })
        .catch(setErrorCreateUser(true))
    }
  }

  const handlerBlure = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailActive(true)
        break;
      
      case 'password':
        setPassActive(true)
        break;
    }
  }

  const handlerEmail = (e) => {
    setEmail(e.target.value)
    setErrorCreateUser(false)

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

  return (
    <div className='signIn'>
      <h1 className='signIn_hello'>Get Started!</h1>
      <p className='signIn_text'>Let’s create your account</p>
      <div className='container'>
        {(emailActive && emailError) && <p style={{color: '#FF5E60'}}>{emailError}</p>}
        <input 
          className='inputEmail'
          name='email'
          type='email' 
          placeholder='Type your email address'
          value={email}
          onBlur={e => handlerBlure(e)}
          onChange={handlerEmail}/>
          
        {(passActive && passError) && <p style={{color: '#FF5E60'}}>{passError}</p>}
        <input 
          className='inputPassword' 
          name='password'
          type='password' 
          placeholder='Type your password'
          value={pass}
          onBlur={e => handlerBlure(e)}
          onChange={e => handlerPassword(e)}/>

        {errorCreateUser ? <p style={{color: '#FF5E60'}}>User with this email already exists</p> : <></>}
        {(!passError && !emailError) ? 
          <button className='button_signin button_signin-active' onClick={handleSignUp}>Sign Up</button>
        : <button className='button_signin button_signin-disable' onClick={handleSignUp}>Sign Up</button>}
      </div>
    </div>
  )
}

export {SignUpPage}