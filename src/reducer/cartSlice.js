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
        removes(state, action) {
            state.pop(action.payload)
        },






        // addToCart: (state, action) => {
        //     const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        //     if (itemInCart) {
        //         itemInCart.quantity++;

        //         console.log("quantity :  -", itemInCart.quantity++)
        //     } else {
        //         state.cart.push({ ...action.payload, quantity: 1 });
        //     }
        // },
        // incrementQuantity: (state, action) => {
        //     const item = state.cart.find((item) => item.id === action.payload);
        //     item.quantity++;
        // },
        // decrementQuantity: (state, action) => {
        //     const item = state.cart.find((item) => item.id === action.payload);
        //     if (item.quantity === 1) {
        //         item.quantity = 1
        //     } else {
        //         item.quantity--;
        //     }
        // },
    }
})
export const { add, remove, adds, removes, OtpTimer } = cartSlice.actions;
export default cartSlice.reducer;