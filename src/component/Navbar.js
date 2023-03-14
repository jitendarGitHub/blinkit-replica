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
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Login from "./Login";
import OtpPage from "./LoginOtp";
import { Card } from "react-bootstrap";
import Cart from "./Cart";
import ShoppingBtn from "./ShoppingBtn";


export default function Navbar(item) {
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()

    const [data, setdata] = useState(false);
    const handleC = () => setdata(false);
    const handleS = () => setdata(true);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, setState] = useState(false);
    const Show = () => setState(true);
    const Close = () => setState(false);



    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);


    const [input, setinput] = useState(true)
    function Change() {
        setinput(false)
    }

    const [loc, setloc] = useState("Amplework Software Pvt. Ltd.")
    function Location(e) {
        const location = e.target.value;
        setloc(location)
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary sticky-top" >
                <div className="container-fluid">
                    <span className="fw-bolder fs-1 text-warning" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        blink
                        <span className="text-success">
                            it
                        </span>
                    </span>
                    <div className=" delivery">
                        <h5 className=" fs-5 fw-bold" style={{ letterSpacing: "0.1rem" }}>Delivery 10 min</h5>
                        <span className="nav-link dropdown-toggle truncate w-40" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={Show}>
                            {loc}
                        </span>
                        <Modal show={state} onHide={Close} animation={false} className=" mt-5 ">
                            <Modal.Header closeButton>
                                <p>Change-Location</p>
                            </Modal.Header>
                            <Modal.Body className="d-flex justify-content-around">
                                <button className="btn bg-success text-light" style={{ fontSize: "12px" }}>Detect my Location</button>
                                <span className="mt-2 text-dark ">--</span><div className=" locations py-2">OR</div><span className="mt-2 text-dark">--</span>
                                <input type="text" className="border-2" placeholder="Type your city Socity/colony...." onChange={Location} />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-sm-8 d-flex" role="search">
                        <form className="nosubmit h-[40px] form-control bh">
                            <input className="nosubmit form-control bh me-1 " type="search" placeholder="Search..." onClick={() => navigate("search-item")} />
                        </form>
                        <NavLink >
                            <button className="btn fs-5 mx-3" type="submit" onClick={handleShow}>Login</button>
                        </NavLink>
                        <div className="buttons d-flex bg-success rounded-3  justify-content-between " style={{ width: "170px" }}>
                            <img className="  colmnss w-6 h-6 " src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg" alt="cart" onClick={handleS} />
                            <div className="container " >
                                <span className="text-white   w-1">{cart.length} item</span>
                                <p className="text-white mx-1 w-10  w-100">₹ {totalAmount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* for Login */}

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Title className="fs-4 phone-header mt-4 mb-4">
                    Phone Number Varification
                </Modal.Title>
                <Modal.Body>
                    {
                        input ? (<Login change={Change} />) : (<OtpPage />)
                    }
                </Modal.Body>
            </Modal>



            {/*offcanvas For Cart */}
            <Offcanvas show={data} onHide={handleC} className="offcanvas offcanvas-end">
                <Offcanvas.Header closeButton className="header-color">
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.length > 0 ? (<Cart handleShow={handleShow} proceed={proceed} />) : (<ShoppingBtn />)
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}