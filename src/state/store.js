import { configureStore } from '@reduxjs/toolkit'
import behaviourSlice from './slices/behaviorSlice'
export default configureStore({
      reducer:{
        behaviours: behaviourSlice,
    }
})