import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add, remove, adds, removes } from "../reducer/cartSlice"
import Add from "./AddBtn";

const Product = ({ item }) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const addToCart = () => {
        dispatch(add(item));
    }

    const removeFromCart = () => {
        dispatch(remove(item.id));
    };

    return (
        <>

            <div className="group hover:scale-10 ease-in flex flex-col border-2 border-green-10 gap-3  h-[320px] mt-2 ml-5  rounded-xl  items-center">
                <div className="text-start">
                    <span className="bg-primary text-light w-9 rounded-1 offer" style={{ fontSize: "10px", fontWeight: "620", width: "100%", }}>{item.offer}</span>
                </div>
                <div className="h-[150px] d-flex" onClick={() => navigate("/product")} >
                    <img src={item.image} alt={item.title} className="  object-cover" />
                    <img src={item.outofstock} className={item.outofstock ? "out-of-stock" : ""} />
                </div>
                <div>
                    <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg ">  {item.title}  </h1>
                </div>
                <div className="d-flex">
                    <span>$ {item.price}</span>
                    <div className=" items-center justify-between mx-3 "> {cart.some((p) => p.id === item.id) ? (
                        <div className="btns">
                            <button className='btn btn-success ' onClick={() => { dispatch(adds(1)) }}><span >+</span></button><span className="mx-2">{cart.length}</span>
                            <button className='btn btn-success mx-2 ' onClick={() => { dispatch(removes(-1)) }}><span>-</span></button>
                        </div>
                    ) : (<button className="btn btn-success" onClick={addToCart} >Add to cart</button>
                    )
                    }
                    </div>
                </div>

            </div>


        </>
    )
}
export default Product