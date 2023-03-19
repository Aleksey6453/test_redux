import {combineReducers, configureStore} from '@reduxjs/toolkit'

const rootReduser = combineReducers({

})

const setupStore = () => {
  return configureStore({
    reducer: rootReduser
  })
}

export default setupStore
