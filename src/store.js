import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createSearchParams } from 'react-router-dom'
import user from './store/userSlice.js'


let stock = createSlice({
    name : 'stock',
    initialState : [10,11,12]
})

let cartList = createSlice({
    name : 'cartList',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ],
    reducers : {
        changeCnt(state,action){

            const result
             = state.findIndex((item)=>{
                return item.id === action.payload
             });
             state[result].count += 1;
            //  result.count += 1;
        },
        addCart(state,action){
            // console.log(action.payload)
            
            state.push(action.payload);
            console.log(state[2].name);
            // const id = state.findIndex((item)=>{
            //     return item.id === action.payload.id
            // })
            // console.log('id : ',id)
            // if(id === undefined || id === null || id === -1){
            //     //존재하지 않으면?
            //     console.log('id : ',id,' // 존재하지 않으니 push!')
            //     state.push(action.payload);
            //     console.log(state[2]);
            // } else {
            //     //존재하면?
            //     state[id].count ++;
            // }
        }
    }
})
export let {changeCnt , addCart} = cartList.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartList : cartList.reducer,
   }
}) 