import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './slice/userSlice'
import locationReducer  from './slice/locationSlice'
import checkDateReducer  from './slice/checkDateSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    location: locationReducer,
    checkDate: checkDateReducer,
  }
})