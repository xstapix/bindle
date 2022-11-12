import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  checkDate: null,
  guests: null,
}

const searchDataSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setData(state, action) {
      state.location = action.payload.location;
      state.checkDate = action.payload.checkDate;
      state.guests = action.payload.guests;
    }
  }
})

export const {setData} = searchDataSlice.actions

export default searchDataSlice.reducer