import {Routes, Route} from 'react-router-dom'

import './App.sass';
import ScrollToTop from './components/scrollToTop'

import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { Account } from './pages/Account'
import { SignInPage } from './pages/SignInPage'
import { SignUpPage } from './pages/SignUpPage'
import { Hotels } from './pages/Hotels'
import { SingleHotel } from './pages/SingleHotel'

function App() {

  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='signin' element={<SignInPage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='account' element={<Account />} />
          <Route path=':localSearch' element={<Hotels />} />
          <Route path=':localSearch/:IDHotel' element={<SingleHotel />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
