import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rolling from "../mockup/MockUpRolling";
import { adds, removes, add } from "../reducer/cartSlice";
import Product from "./Product";
export default function RollinkPaper({ item }) {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(add(item));
    }
    return (
        <>
            <h1 className="container fw-bold fs-4 mt-5">Rolling paper & tobacco</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-5 max-w-7xl mx-auto ">
                {Rolling.map((item) => {
                    return (
                        <>
                            <Product key={item.id} item={item} />
                        </>
                    )
                })}
            </div>
        </>
    )
}