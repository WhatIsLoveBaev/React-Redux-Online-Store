import { combineReducers } from 'redux'

import DataBase from './DataBase'
import Basket from './Basket'
import HeaderReducer from './Header'
import CollageState from './Collage'
import Liked from './Liked'

export default combineReducers({
    DataBase,
    HeaderReducer,
    CollageState,
    Basket,
    Liked
})