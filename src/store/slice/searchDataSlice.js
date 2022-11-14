import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  checkIn: null,
  checkOut: null,
  guests: null,
}

const searchDataSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setData(state, action) {
      state.location = action.payload.location;
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
      state.guests = action.payload.guests;
    }
  }
})

export const {setData} = searchDataSlice.actions

export default searchDataSlice.reducer