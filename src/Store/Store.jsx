import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import categoryReducer from './CategorySlice.jsx'


const Store = configureStore({
    reducer:{
        cart : CardReducer,
        category : categoryReducer,
    }
}
)
export default Store