import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: 'light'
    },
    reducers: {
        changeTheme: (state) => {
           if(state.value === 'light') state.value = 'dark'
           else state.value = 'light'
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer