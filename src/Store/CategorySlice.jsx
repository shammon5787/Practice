import { createSlice } from "@reduxjs/toolkit";


const CategorySlice = createSlice({
    name: 'Category',
    initialState:{
        Category : "All"
    },
    reducers:{
        addcategory: (state, action)=>{
            state.Category = action.payload
        }
    }
})

export const {addcategory} = CategorySlice.actions
export default CategorySlice.reducer