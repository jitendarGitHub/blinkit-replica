import React from "react";
import { mockComponent } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MockCategory from "../mockup/MockCategory";
import { Categorydesign } from "../component/Categrydesign";
export default function Category(item) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate()
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-10 max-w-7xl mx-auto " >
                {MockCategory.map((data) => {
                    return (
                        <>
                            <Categorydesign key={item.id} data={data} />
                        </>
                    )
                })}

            </div>


        </>
    )
}