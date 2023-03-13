import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useEffect } from "react";
import AddBtn from "./AddBtn";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import SearchItem from "../pages/SearchItem";
import proceed from "../asset/greter.png"
import Offcanvas from 'react-bootstrap/Offcanvas';

import swal from 'sweetalert';

export default function Navbar(item) {


    const [data, setdata] = useState(false);
    const handleC = () => setdata(false);
    const handleS = () => setdata(true);

    const [charge, setcharge] = useState(2)
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, setState] = useState(false);
    const Show = () => setState(true);
    const Close = () => setState(false);



    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        setTotalQuantity(cart.reduce((acc, curr) => acc + curr.id, 0))
    }, [cart]);





    function loginHandle(e) {
        e.preventDefault()
    }

    const [user, seruser] = useState(false)
    function Onchange(e) {
        let item = e.target.value;
        if (item.length == 10) {
            document.getElementById("btn").style.backgroundColor = "green"
            document.getElementById("btn").style.disabled = true
        }
        else {
            document.getElementById("btn").style.backgroundColor = "red"
        }
        console.log(e.target.value.length)
    }

    function Popup() {
        swal("Good job!", "Successful Logged In", "success")
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary  sticky-top  " >
                <div className="container-fluid">
                    <h3 className="fw-bolder fs-1 text-warning" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>blink<span className="text-success">it</span></h3>
                    <div className=" delivery">
                        <h5 className=" fs-4">Delivery 10 min</h5>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={Show}>
                            Amplework Software Pvt. Ltd.
                        </a>
                        <Modal show={state} onHide={Close} animation={false} className=" mt-5 ">
                            <Modal.Header closeButton>
                                <p>Change-Location</p>
                            </Modal.Header>
                            <Modal.Body className="d-flex justify-content-around">
                                <button className="btn bg-success text-light" style={{ fontSize: "12px" }}>Detect my Location</button>
                                <span className="mt-2 text-dark ">--</span><div className=" locations py-2">OR</div><span className="mt-2 text-dark">--</span>
                                <input type="text" className="border-2" placeholder="Type your city Socity/colony...." />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <form className=" col-sm-8 d-flex" role="search">
                        <form className="nosubmit form-control">
                            <input className="nosubmit form-control me-1 " type="search" placeholder="Search..." onClick={() => navigate("search-item")} />
                        </form>
                        <NavLink >
                            <button className="btn fs-5 mx-3" type="submit" onClick={handleShow}>Login</button>
                        </NavLink>
                        <div className="buttons d-flex bg-success rounded-3  justify-content-between " style={{ width: "170px" }}>
                            <img className="  colmnss w-6 h-6 " src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="cart" onClick={handleS} />
                            <div className="   container " >
                                <span className="text-white   w-1">{cart.length} item</span>
                                <p className="text-white mx-1 w-10  w-100">₹ {totalAmount}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>

            {/*For Login*/}
            <Modal show={show} onHide={handleClose} centered className="">
                <Modal.Header closeButton>
                    <Modal.Title><span className="phone-header">Phone Number Varification</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={loginHandle}>
                        <div className="text-center  fw-light ">
                            <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
                                Login/Sign up</span>
                            <div class="col-8 mx-5 mt-3">
                                <div class="input-group mx-4">
                                    <span class="input-group-text"><img src="https://cdn-icons-png.flaticon.com/512/4921/4921142.png" className="w-5 h-5 mx-1" />+91</span>
                                    <input type="tel" class="form-control" id="InputNumber" onChange={Onchange} />
                                </div>
                            </div>
                            <div className="">
                                <button className="col-8 mt-3 btn disabled  lg-btn login-btn" id="btn" onClick={Popup}  >Next</button>
                            </div>
                            <p className="mt-5 " style={{ fontSize: '11px' }}>By continuing, you agree to our</p>
                            <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: "underline" }}>Term of Service &nbsp;&nbsp; Privacy of Policy</a>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            {/*offcanvas For Cart */}


            <Offcanvas show={data} onHide={handleC} className="offcanvas offcanvas-end">
                <Offcanvas.Header closeButton className="header-color">
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.length > 0 ? (
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
                                        <div className=" d-flex col-sm-8 cart-item mb-4 " key={item.id}>
                                            <div className="img bg-success border-2 text-center mb-3 mx-2" style={{ width: "20%" }}>
                                                <img src={item.image} alt="" width={'100%'} />
                                            </div>
                                            <div className="price mx-3" >
                                                <p className="" style={{ fontSize: "13px" }}>{item.title}</p>
                                                <h5 className="mt-3 d-flex fw-bold"><b className="mx-1">₹ </b>{item.price}
                                                    <AddBtn />
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
                                        <div className="d-flex justify-content-between ">
                                            <span>Handling Charges</span>
                                            <span>₹ {charge}</span>
                                        </div>
                                        <div className="d-flex justify-content-between ">
                                            <span>Delivery Charges</span>
                                            <span><del>₹50</del> FREE </span>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3 fw-bold">
                                            <span>Grand Total</span>
                                            <span>₹ {totalAmount + 2}</span>
                                        </div>
                                        <p className="mt-3">Coupons are only applicable on the Blinkit app</p>
                                    </div>
                                    <hr className="mt-5 border-2" />
                                </div>
                                <div className=" btn form-control fs-5 position-static bg-success d-flex justify-content-between text-light" onClick={handleShow}>

                                    <div className="price-item">
                                        <span>{cart.length} item</span>
                                        <span> . ₹{totalAmount}</span>
                                    </div>
                                    <div className="d-flex">
                                        <span>Proceed </span>
                                        <img src={proceed} className="mx-2 w-5 h-8  " />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : <>
                        <div className="min-h-[80vh] flex flex-col items-center justify-center">
                            <h1 className="text-gray-700 font-semibold text-xl mb-2">  Your cart is empty!  </h1>

                            <button className="bg-purple-700  rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3" onClick={() => navigate("/")} >
                                SHOP NOW
                            </button>

                        </div>
                    </>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}