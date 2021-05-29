import{createSlice} from '@reduxjs/toolkit'
import {retrieveBugs} from '../bugController'

const slice = createSlice({
    name: "bug",
    initialState: [],
    reducers: {
        getBugs: (state,action)=> retrieveBugs(),
        createBug: (state,action)=>{},
        updateBug: (state, action)=>{},
        markComplete: (state, action)=>{}
    }
})

export default slice.reducer
export const {getBugs, createBug, markComplete} = slice.actions