import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload)
        },
        adds(state, action) {
            state.push(action.payload)
        },
        removes(state, action) {
            state.pop(action.payload)
        },
        removefromcart(state, action) {

        }
        // add(state, action) {
        //     const itemIndex = state.cartItem.findIndex(item => item.id === action.payload.id);
        //     if (itemIndex >= 0) {
        //         state.cartItem[itemIndex].cartQuantity += 1;
        //     }
        //     else {
        //         const tempProduct = { ...action.payload, cartQuantity: 1 };
        //         state.cartItem.push(tempProduct)
        //     }
        // },

    }
})
export const { add, remove, adds, removes } = cartSlice.actions;
export default cartSlice.reducer;