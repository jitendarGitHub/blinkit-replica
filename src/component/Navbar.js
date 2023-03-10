import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useEffect } from "react";
import AddBtn from "./AddBtn";

export default function Navbar() {
    const cart = useSelector((state) => state.cart)
    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
        setTotalQuantity(cart.reduce((acc, curr) => acc + curr.id, 0))
    }, [cart]);
    return (
        <>
            <nav className="navbar bg-body-tertiary "  >
                <div className="container-fluid">
                    <h3 className="fw-bolder fs-1 text-warning" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>blink<span className="text-success">it</span></h3>
                    <div className="   delivery">
                        <h5 className="fw-bolder">Delivery 10 min</h5>
                        <p>Jaipur,Rajasthan, in india</p>
                    </div>
                    <form className=" col-sm-8 d-flex" role="search">
                        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
                        <NavLink >
                            <button className="btn fs-5 mx-3" type="submit" onClick={handleShow}>Login</button>
                        </NavLink>
                        <div className="buttons d-flex bg-success rounded-3  justify-content-around" style={{ width: "150px" }}>
                            <NavLink to="/cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                                <img className=" mt-1 colmnss " src="https://img.icons8.com/windows/1x/shopping-cart.png" alt="cart" width="37px" />
                            </NavLink>
                            <div className="main">
                                <span className="text-white">{cart.length} item</span>
                                <p className="text-white">₹ {totalAmount}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title><span className="phone-header">Phone Number Varification</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <div className="text-center fw-light ">
                            <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
                                Login/Sign up</span>
                            <div className="input-group justify-content-center mt-3 " style={{ height: "2px" }}>
                                <span className="input-group-text" id="basic-addon3">+91</span>
                                <input type="number" className="  col-6 input" id="basic-url" aria-describedby="basic-addon3" />
                            </div>
                            <div className="text-center">
                                <button className="col-7 mt-5  mt-4 btn btn-success lg-btn">Next</button>
                            </div>
                            <p className="mt-5 " style={{ fontSize: '11px' }}>By continuing, you agree to our</p>
                            <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: "underline" }}>Term of Service &nbsp;&nbsp; Privacy of Policy</a>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>


            {/*offcanvas For Cart */}

            <div className="offcanvas offcanvas-end cnd" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header btn-right ">
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><img src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" alt="" /></button>
                </div>
                <div className="container">
                    <h3 className="text-start  cart-header">My Cart</h3>

                    <span className="text-gray-700 font-semibold mt-5 ">
                        Total Amount  : ₹ {totalAmount}
                    </span> <br />

                    <span className="text-gray-700 font-semibold ">
                        Total Quantity  :  {cart.length}
                    </span>

                    <div className="cart-Wrapper mt-5  p-2  " >
                        {cart.map((item) =>
                            <div className=" d-flex col-sm-8 cart-item mb-4 " key={item.id}>
                                <div className="img bg-success border-2 text-center mb-3 mx-2" style={{ width: "20%" }}>
                                    <img src={item.image} alt="" width={'100%'} />
                                </div>
                                <div className="price mx-3">
                                    <p className="" style={{ fontSize: "13px" }}>{item.title}</p>
                                    <h5 className="mt-3 d-flex fw-bold"><b className="mx-1">₹ </b>{item.price}
                                        <AddBtn />
                                    </h5>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}