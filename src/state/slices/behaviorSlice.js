
import { createSlice } from "@reduxjs/toolkit";
const behaviourSlice = createSlice({
    name:'behaviours',
    initialState:{
        addModalShow:false,
        showBookinModal:false,
        showLogin:false,
    },
    reducers:{
        openAddModal:(state)=>{
            state.addModalShow = true
        },
        closeAddModal:(state)=>{
            state.addModalShow = false
        },
        openBookinModal:(state)=>{
            state.showBookinModal = true
        },
        closeBookinModal:(state)=>{
            state.showBookinModal = false
        },openLogin:(state)=>{
            state.showLogin = true
        },
        closeLogin:(state)=>{
            state.showLogin = false
        }
    }
})

export const {
    openAddModal,
    closeAddModal,
    openBookinModal,
    closeBookinModal,
    openLogin,
    closeLogin
} = behaviourSlice.actions
export default behaviourSlice.reducer