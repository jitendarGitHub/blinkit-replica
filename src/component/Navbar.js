import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import { useEffect } from "react";
import proceed from "../asset/greter.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Login from "./Login";
import OtpPage from "./LoginOtp";
import { Button, Card } from "react-bootstrap";
import Cart from "./Cart";
import ShoppingBtn from "./ShoppingBtn";
import { Form } from "react-bootstrap";

export default function Navbar(item) {
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate()

    const [CartData, setCartData] = useState(false);//for cart modal
    const CartShow = () => setCartData(true);
    const CartClose = () => setCartData(false);

    const [Modalshow, setModalShow] = useState(false);// for Login modal
    const ModalCloseFun = () => setModalShow(false);
    const ModalShowFun = () => setModalShow(true);


    const [state, setState] = useState(false);// for location modal
    const Show = () => setState(true);
    const Close = () => setState(false);

    const [totalAmount, setTotalAmount] = useState(0);
    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);


    const [LoginInput, setLoginInput] = useState(true)
    function LoginBtnFun() {
        setLoginInput(false)
        setBackImg(true)
    }
    function LoginModal() {
        setLoginInput(true)
        setBackImg(false)
    }

    const [location, setLocation] = useState("Amplework Software Pvt. Ltd.")
    function Location(e) {
        const InputLocation = e.target.value;
        setLocation(InputLocation)
    }

    const [BackImg, setBackImg] = useState(false)




    return (
        <>
            <nav className="navbar bg-body-tertiary sticky-top " >
                <div className="container-fluid">
                    <span className="fw-bolder fs-1 text-warning" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        blink
                        <span className="text-success">
                            it
                        </span>
                    </span>
                    <div className="delivery">
                        <h5
                            className=" fs-5 fw-bold"
                            style={{ letterSpacing: "0.1rem" }}>
                            Delivery 10 min
                        </h5>
                        <span className="nav-link dropdown-toggle truncate w-40" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={Show}>
                            {location}
                        </span>
                        <Modal show={state} onHide={Close} animation={false} className=" mt-5 ">
                            <Modal.Header closeButton>
                                <p>Change-Location</p>
                            </Modal.Header>
                            <Modal.Body className="d-flex justify-content-around">
                                <button className="btn bg-success text-light" style={{ fontSize: "12px" }}>
                                    Detect my Location
                                </button>
                                <span className="mt-2 text-dark " >--</span>
                                <div className=" locations py-2" separator={<>fgsdhjsdgfh</>}>OR</div>
                                <span className="mt-2 text-dark">--</span>
                                <input
                                    type="text"
                                    className="border-2"
                                    placeholder="Type your city Socity/colony...."
                                    onChange={Location}
                                />
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="col-sm-8 d-flex">
                        <Form className="nosubmit h-[40px] form-control bh">
                            <input
                                className="nosubmit form-control bh me-1"
                                type="search"
                                placeholder="Search..."
                                onClick={() => navigate("search-item")}
                            />
                        </Form>
                        <Button
                            variant="ligth" className="btn fs-5 mx-3"
                            onClick={ModalShowFun}>
                            Login
                        </Button>
                        <div className="buttons d-flex bg-success rounded-3  justify-content-between " style={{ width: "170px" }}>
                            <img
                                className="  colmnss w-6 h-6"
                                src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg"
                                alt="cart"
                                onClick={CartShow}
                            />
                            <div className="container ">
                                <span className="text-white w-1">{cart.length} item</span>
                                <p className="text-white mx-1 w-10  w-100">₹ {totalAmount}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* for Login */}

            <Modal show={Modalshow} onHide={ModalCloseFun} centered>
                <div className=" d-flex fs-4 phone-header mt-4 mb-4 text-center">
                    <div className=" mx-1 main w-20">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/6416/6416958.png"
                            className={BackImg ? "d-block" : "d-none"}
                            width={"30px"}
                            onClick={LoginModal}
                        />
                    </div>
                    <p className="text-center mx-5">
                        Phone Number Varification
                    </p>
                </div>
                <Modal.Body>
                    {
                        LoginInput ? (<Login loginbtn={LoginBtnFun} />) : (<OtpPage change={ModalShowFun} premodalstate={LoginModal} close={ModalCloseFun} />)
                    }
                </Modal.Body>
            </Modal>

            {/*offcanvas For Cart */}
            <Offcanvas
                show={CartData}
                onHide={CartClose}
                placement="end"
                className="offcanvas offcanvas-end">
                <Offcanvas.Header closeButton className="header-color">
                    <Offcanvas.Title>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.length > 0 ? (<Cart handleShow={ModalShowFun} proceed={proceed} />) : (<ShoppingBtn close={CartClose} />)
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}