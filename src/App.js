import {Routes, Route} from 'react-router-dom'

 import './App.sass';

import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { Account } from './pages/Account'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'

function App() {

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
