import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Saras1 from "../asset/saras1.jpg";
import Saras2 from "../asset/saras2.webp"
import Saras3 from "../asset/saras3.jpg"
import Saras4 from "../asset/saras4.webp"
import Saras5 from "../asset/saras5.jpg"
import { adds, removes, add } from "../reducer/cartSlice";

export default function PerticularProduct(item) {
    const imgs = [
        {
            id: 1,
            image: Saras1
        },
        {
            id: 2,
            image: Saras2
        },
        {
            id: 3,
            image: Saras3
        },
        {
            id: 4,
            image: Saras4
        },
        {
            id: 5,
            image: Saras5
        }

    ];

    const [sliderdata, setsliderdata] = useState(imgs[0]);
    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    const handleClick = (index) => {
        const slider = imgs[index];
        setsliderdata(slider)
    }
    const addToCart = () => {
        dispatch(add(item));

    }
    return (
        <>
            <div className="container">
                <div className="row  ">
                    <div className="col-sm-6 product-col " >
                        <img src={sliderdata.image} height={'250px'} width={"300px"} className="mx-5" />
                        <div className="container-fluid  ">
                            <div className=" d-flex col-12 gap-2 ">
                                {
                                    imgs.map((data, i) => {
                                        return (
                                            <>
                                                <img src={data.image} key={data.id} width={"70px"} height={"100px"} className="border-2 rounded-xl" onClick={() => handleClick(i)} />
                                            </>
                                        )
                                    })}
                            </div>
                        </div>
                        <div className="product-details">
                            <p className="fs-5 mt-5">Product details</p>
                            <p className="product-size mt-3">Seif Life</p>
                            <p className="product-size-about">6 months</p>
                            <p className="product-size">manufacture details</p>
                            <p className="product-size-about">Jaipur Jila dugdh Utpadak sahakari sangh ltd Near Gandhi Nagar Railway station Jaipur-302015</p>
                            <p className="product-size">Marketed By</p>
                            <p className="product-size-about">Rajasthan Co-operative Dairy Fedration Ltd : Saras Sankul JLN Marg Jaipur Raj 302017</p>
                            <p className="product-size">FSSAI License</p>
                            <p className="product-size-about">10012013000010</p>

                            <p className="product-size">Country Of Origin</p>
                            <p className="product-size-about">India</p>
                            <p className="product-size">Customer Care Details</p>
                            <p className="product-size-about">Email: info@blinkit.com
                                Customer Care Number: 1-800-208-8888</p>
                            <p className="product-size">Expiry Details</p>
                            <p className="product-size-about">Please refer to the packaging of the product for expiry date.</p>
                            <p className="product-size">Seller</p>
                            <p className="product-size-about">90MINUTES RETAIL PRIVATE LIMITED</p>

                            <p className="product-size">Keyfeatures</p>
                            <p className="product-size-about">Adds a distinctive taste to food
                                Used for garnishing, cooking and making sweets
                                Has rich characteristic aroma, grainy texture and delicious taste
                                Makes for a nutritious cooking medium</p>
                            <p className="product-size">Ingredients</p>
                            <p className="product-size-about">Milk Fat</p>
                            <p className="product-size">Unit </p>
                            <p className="product-size-about">11</p>
                            <p className="product-size">Nutrition Information</p>
                            <p className="product-size-about">Energy : 895 Kcal , Fat : 99.7 g</p>
                            <p className="product-size">Disclaimber</p>
                            <p className="product-size-about">Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</p>
                            <p className="product-size">Description </p>
                            <p className="product-size-about">Widely used as a cooking medium, Saras Ghee adds a distinctive flavour to food, giving your meals an authentic feel. It can be used in cooking rice, Paranthas, etc. and is ideal for garnishing and making sweets. Acts a nutritious cooking medium. Has a distinctive flavour and taste. The rich aroma makes it an ideal pick for garnishing and cooking.</p>


                        </div>

                    </div>
                    <div className="col-sm-6 ">
                        <div className="row mt-5 mx-5 ">
                            <h4 className="fs-4 title">Saras Shudh Ghee</h4>
                            <div className="mt-2 d-flex">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label className="form-check-label" for="flexRadioDefault1"> 1kg  </label>
                                </div>
                                <div className="form-check mx-3">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">2kg  </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label className="form-check-label" for="flexRadioDefault2">3kg  </label>
                                </div>
                            </div>
                            <div className="btns mt-3">
                                <div className=" items-center justify-between  "> {cart.some((p) => p.id === item.id) ? (
                                    <div className="btns">
                                        <button className='btn btn-success ' onClick={() => { dispatch(adds(1)) }}><span >+</span></button><span className="mx-2">{cart.length}</span>
                                        <button className='btn btn-success mx-2 ' onClick={() => { dispatch(removes(-1)) }}><span>-</span></button>
                                    </div>
                                ) : (<button className="btn btn-success" onClick={addToCart} >Add to cart</button>
                                )
                                }
                                </div>
                            </div>
                            <span className="mt-2 fw-bold ">Why shop from blinkit?</span>
                            <div className="condition ">
                                <div className="flex">
                                    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" alt="" className="imgs mt-3" />
                                    <span className="mt-4 col-9 mx-3" >
                                        Superfast Delivery
                                        Get your order delivered to your doorstep at the earliest from dark stores near you</span>
                                </div>
                                <div className="flex">
                                    <img src=" https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" alt="" className="imgs mt-3" />
                                    <span className="mt-4 col-9 mx-3" >
                                        Best Prices & Offers
                                        Best price destination with offers directly from the manufacturers.</span>
                                </div>
                                <div className="flex">
                                    <img src="  https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" alt="" className="imgs mt-3" />
                                    <span className="mt-4 col-9 mx-3" >Wide Assortment
                                        Choose from 5000+ products across food, personal care, household & other categories.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </>
    )
}