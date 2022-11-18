import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';
const productsSlice = createSlice({
    name:'products',
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    reducers:{
        setProductsStart(state,action){
            state.loading = true
        },
        setProducts(state,action){
            state.data = action.payload
            state.loading = false
        },
        setProductsError(state,action){
            state.error = action.payload
            state.loading = false
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchProducts.pending,(state,action)=>{
    //         state.loading = true
    //     })
    //     .addCase(fetchProducts.fulfilled,(state,action)=>{
    //         state.data = action.payload
    //         state.loading = false
    //     })
    //     .addCase(fetchProducts.rejected,(state,action)=>{
    //         return {...state , error : action.payload , loading : false}
            
    //     })
    // }
})

export const { setProductsStart,setProducts,setProductsError } = productsSlice.actions;
export default productsSlice.reducer;

// Thunk Method 2 
// export const fetchProducts = createAsyncThunk("products/fetch", async ()=>{
//     const { data } = await axios('https://dummyjson.com/products')
//     return data.products;
// })

// Thunk Method 1 
export const fetchProducts = () => async (dispatch,getState) => {
        try{
            dispatch(setProductsStart())
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            dispatch(setProducts(data.products))
        }catch(e){
            console.log(e)
            dispatch(setProductsError(e))
        }
}

// Thunk Method 2 