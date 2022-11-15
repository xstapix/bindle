import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adults: 1,
  children: 0,
  rooms: 1
}

const guestSlice = createSlice({
  name: 'Guest',
  initialState,
  reducers: {
    setData(state, action) {
      state.adults = action.payload.adults
      state.children = action.payload.children
      state.rooms = action.payload.rooms
    }
  }
})

export const {setData} = guestSlice.actions

export default guestSlice.reducer