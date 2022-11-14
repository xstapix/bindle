import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null
}

const locationSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setData(state, action) {
      state.location = action.payload.location
    }
  }
})

export const {setData} = locationSlice.actions

export default locationSlice.reducer