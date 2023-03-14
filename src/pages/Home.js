import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Advertise from "../component/Advartise";
import Category from "./Category";
import Offers from "../component/Offers";
import Product from "../component/Product";
import RollinkPaper from "../component/ProductRollingPaper";
import { Products } from "../mockup/MockProduct";
import "swiper/css";
import Example, { Fun } from "../component/Login";
import OtpPage, { Login } from "../component/Login";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    const [input, setinput] = useState(true)
    function pops() {
        setinput(true)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Advertise />

            <Offers />
            <Category />
            <h3 className=" container fw-bold fs-4 ">Dairy, Bread & Eggs</h3>
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-5 max-w-7xl mx-auto p-2 "  >
                {Products.map((item) => {
                    return (
                        <>
                            <Product key={item.id} item={item} />
                        </>
                    )
                })}

            </div>

            <RollinkPaper />

        </>
    );

};
export default Home;


