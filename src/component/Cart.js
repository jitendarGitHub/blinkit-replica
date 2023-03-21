import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import { remove } from "../reducer/cartSlice";

export default function Cart(props) {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const [charge, setcharge] = useState(2)
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalDiscount, settotalDiscount] = useState(0)
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        setTotalQuantity(cart.reduce((acc, curr) => acc + curr.id, 0))
        settotalDiscount(cart.reduce(() => discount))
    }, [cart]);

    const discount = totalAmount / 100 * 15


    return (
        <>
            <div className="container">
                <span className="text-gray-700 font-semibold mt-5 ">
                    Delivery in 10 minutes
                </span> <br />
                <span className="" style={{ color: "6e7177", fontSize: "14px" }}>
                    {cart.length} items
                </span>
                <div className="cart-Wrapper mt-5  p-2  ">
                    {cart.map((item) =>
                        <div className=" d-flex col-sm-8 cart-item mb-4 " key={item.id} >
                            <div className="img border-2 text-center mb-3 mx-2 " style={{ width: "20%" }}>
                                <img src={item.image} alt="" width={'100%'} />
                            </div>
                            <div className="price mx-3 w-75" >
                                <p className=" " style={{ fontSize: "13px" }}>{item.title}</p>
                                <h5 className="mt-3 d-flex fw-bold w-100 justify-content-around ">
                                    <p className=" w-20 fs-6">₹{item.price}</p>
                                    <div className="">
                                        <Button
                                            className="bg-danger border-none"
                                            onClick={() => dispatch(remove(item.id))}>
                                            Remove
                                        </Button>
                                    </div>
                                </h5>
                            </div>
                        </div>

                    )}
                    <hr className="border-2" />
                    <div className="mt-5" style={{ color: "6e7177", fontSize: "13px" }}>
                        <div className="d-flex justify-content-between">
                            <span>MRP</span>
                            <span>₹ {totalAmount}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span>Total Discount</span>
                            <span>₹ {discount.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <span>Handling Charges</span>
                            <span>₹ {charge}</span>
                        </div>
                        <div className="d-flex justify-content-between ">
                            <span>Delivery Charges</span>
                            <span><del>50</del> FREE </span>
                        </div>
                        <div className="d-flex justify-content-between mt-3 fw-bold">
                            <span>Grand Total</span>
                            <span>₹ {totalAmount + charge - discount}</span>
                        </div>
                        <p className="mt-3">Coupons are only applicable on the Blinkit app</p>
                    </div>
                    <hr className="mt-5 border-2" />
                </div>
                <div className=" btn form-control fs-5 position-static bg-success d-flex justify-content-between text-light" onClick={props.handleShow}>
                    <div className="price-item">
                        <span>{cart.length} item</span>
                        <span> . ₹{totalAmount}</span>
                    </div>
                    <div className="d-flex">
                        <span>Proceed </span>
                        <img src={props.proceed} className="mx-2 w-5 h-8  " />
                    </div>
                </div>
            </div>
        </>
    )
}