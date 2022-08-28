import { configureStore } from '@reduxjs/toolkit'
import behaviourSlice from './slices/behaviorSlice'
import userSlice from './slices/userSlice'
export default configureStore({
      reducer:{
        behaviours: behaviourSlice,
        user:userSlice
    }
})