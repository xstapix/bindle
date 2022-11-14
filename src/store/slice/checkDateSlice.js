import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkIn: null,
  checkOut: null,
}

const checkDateSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setData(state, action) {
      state.checkIn = action.payload.checkIn
      state.checkOut = action.payload.checkOut
    }
  }
})

export const {setData} = checkDateSlice.actions

export default checkDateSlice.reducer