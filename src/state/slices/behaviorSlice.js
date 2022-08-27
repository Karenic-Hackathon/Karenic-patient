import { createSlice } from "@reduxjs/toolkit";
const behaviourSlice = createSlice({
    name:'behaviours',
    initialState:{
        addModalShow:false,
    },
    reducers:{
        openAddModal:(state)=>{
            state.addModalShow = true
        },
        closeAddModal:(state)=>{
            state.addModalShow = false
        }
    }
})

export const {openAddModal,closeAddModal} = behaviourSlice.actions
export default behaviourSlice.reducer