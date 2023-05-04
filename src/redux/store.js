//import { legacy_createStore as createStore } from "@reduxjs/toolkit" <-- This is for use createStore instate of configureStore
import { configureStore } from "@reduxjs/toolkit"
import reducer from './reducer'

//export default createStore(reducer) <-- This is use with legavy_createStore
export default configureStore({ reducer: reducer })