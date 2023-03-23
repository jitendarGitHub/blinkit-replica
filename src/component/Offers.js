import React from "react";
import { useNavigate } from "react-router";
import Offer from "../mockup/MockOffer";

const Offers = () => {
    const navigate = useNavigate()
    return (
        <div className="container-fluid mt-3 d-flex gap-3">
            {Offer.map((item) => (
                <div className="row">
                    <img src={item.image} alt="" />
                </div>
            ))}
        </div>
    )
}
export default Offers