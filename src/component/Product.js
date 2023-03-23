import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove, removes, incrementItem, decrementItem } from "../reducer/cartSlice"

const Product = ({ item }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const addToCart = () => {
        dispatch(add(item));
    }
    return (
        <div className="group hover:scale-10 ease-in flex flex-col border-2 border-green-10  h-[330px]  mt-2 ml-5  rounded-xl  items-center">
            <div className="text-start bg-success ">
                <span
                    className="bg-primary text-light  rounded-1 offer"
                    style={{ fontSize: "14px", fontWeight: "620", width: "100%", }}>
                    {item.offer}
                </span>
            </div>
            <div className="h-[150px] d-flex" onClick={() => navigate("/product")} >
                <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover"
                />
                <img
                    src={item.outofstock}
                    className={item.outofstock ? "out-of-stock" : ""}
                />
            </div>
            <div>
                <h1
                    className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg ">
                    {item.title}
                </h1>
            </div>
            <div className="d-flex justify-content-between  w-90 h-50">
                <div className=" align-self-center">
                    <span className="fs-5 ">₹ {item.price}</span>
                </div>
                <div className=" text-end align-self-center mx-3">
                    <div className="btn">
                        {item.outofStock == true ?
                            (<span
                                className="text-danger disable  align-self-center w-100  "
                                onClick={() => navigate("/product")}>
                                <del className="fs-5">Out of Stock</del>
                            </span>) :
                            (cart.some((p) => p.id === item.id && p.quantity != 0) ?
                                (<div className="justify-content-between  border-none" style={{ width: "110px" }}>
                                    <button
                                        className='btn btn-success align-self-center '
                                        onClick={() => { dispatch(incrementItem(item.id)) }}>
                                        +
                                    </button>
                                    {cart.map((data) => data.id === item.id ? (<span className="mx-2">{data.quantity}</span>) : (<></>))}
                                    <button
                                        className='btn btn-success mx-1'
                                        onClick={() => { dispatch(decrementItem(item.id)) }}>
                                        -
                                    </button>
                                </div>
                                ) : (<button className="btn btn-success text-light" style={{ width: "108px" }} onClick={addToCart}>Add to Cart </button>)
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product