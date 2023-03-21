import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { adds, add, removes, remove } from "../reducer/cartSlice"

const AddBtn = (item) => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(item));
    }

    return (
        <div className="d-flex">
            <div className=" items-center justify-between mx-3 bg-success rounded-3 text-light "> {cart.some((p) => p.id === item.id) ? (
                <div className="btns">
                    <button
                        className='btn btn-success h-9 w-10'
                        onClick={() => { dispatch(adds(1)) }}>
                        +
                    </button>
                    <span className="mx-2" >{cart.length}</span>
                    <button
                        className='btn btn-success mx-2 h-9'
                        onClick={() => { dispatch(removes(-1)) }}>
                        -
                    </button>

                </div>
            ) : (<button className="btn btn-success" onClick={addToCart} >Add</button>
            )
            }
            </div>
        </div>
    )
}
export default AddBtn
