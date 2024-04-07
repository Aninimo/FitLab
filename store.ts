import { configureStore } from '@reduxjs/toolkit'

import SliceReducer from './redux'

export default configureStore({
  reducer:{
    added: SliceReducer
  }  
})
