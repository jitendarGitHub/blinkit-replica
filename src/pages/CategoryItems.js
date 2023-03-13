import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { Products } from "../mockup/MockProduct";
import Product from "../component/Product";
import Dropdown from 'react-bootstrap/Dropdown';
import Items from "../mockup/MockUpcategoryItem";
import { useNavigate } from "react-router";
import Rolling from "../mockup/MockUpRolling";
export default function CategoryItem() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container-fluid row ">
                <div className="col-sm-3 category2-scroll" >
                    {Items.map((item) => (
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="  p-1 text-center d-flex " >
                                    <img className="mx-1 mt-2 " src={item.image} alt="" width={"15%"} />
                                    <p className="mx-3 mt-2 truncate w-40 text-start"  >{item.title}</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                </div>
                <div className="col-9 category-scroll">
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                        <h4 className="fw-bold mt-3 mx-4">Buy Fresh Fruits & A  Online</h4>
                        <Dropdown style={{ fontSize: "11px" }}>
                            Sort By :&nbsp;&nbsp;&nbsp;
                            <Dropdown.Toggle id="dropdown-basic" className="text-dark">
                                Relavance
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ fontSize: "12px" }}>
                                <Dropdown.Item ><input type="radio" className="mx-1   border-2" name="check" /> Price(Low to High)</Dropdown.Item>
                                <Dropdown.Item ><input type="radio" name="check" className="mx-1   border-2" /> Price (High to low)</Dropdown.Item>
                                <Dropdown.Item ><input type="radio" name="check" className="mx-1   border-2" />Discount(high to Low )</Dropdown.Item>
                                <Dropdown.Item ><input type="radio" name="check" className="mx-1   border-2" />Relavance</Dropdown.Item>
                                <Dropdown.Item ><input type="radio" name="check" className="mx-1   border-2" />Name(A to Z</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-9xl mx-auto p-2 "  >
                        {Rolling.map((item) => {
                            return (
                                <>
                                    <Product key={item.id} item={item} />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="container  mt-5 ">
                <div className="row">
                    <div className="col-sm-6">
                        <h6>By Fruits and Vegitables at Online Plateform store in India</h6>
                        <p className="mt-4" style={{ fontSize: "10px" }}>Buy from several popular brands like Stash Pro, Raw, Elements.
                            Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to be worry as Blinkit is delivering Rolling Paper at your doorstep superfast with easy returns for your complete peace of mind.
                            Get Rolling Paper delivered to your home in minutes. you can check Rolling Paper price before buying.
                            We deliver Rolling Paper at HR-NCR, Gurugram (gurgaon), UP-NCR, Noida, Mumbai, Kolkata, Lucknow, Bengaluru, Ahmedabad, North Delhi, West Delhi, South Delhi, Faridabad, Hyderabad, Jaipur, Pune, Kanpur, Chennai, Mohali, Panchkula, Zirakpur, Chandigarh, Jalandhar, Ludhiana, Vadodara, Meerut</p>
                    </div>
                    <div className="col-sm-6 ">
                        <h6>Fruits AND Vegitable Price List </h6>
                        <div className="d-flex  mt-4" style={{ justifyContent: "space-between", fontSize: "10px", color: "green" }}>
                            <ol>
                                <p className="text-dark " style={{ fontSize: "12px" }}> Fresh Vegitable</p>
                                <li>New Potato</li>
                                <li>Onion</li>
                                <li>Green Chilli</li>
                                <li>Hybrid Tomato</li>
                                <li>Ginger</li>
                                <li>Local Carrot</li>
                                <li>Lemon</li>
                                <li>Lady Finger</li>
                            </ol>
                            <ol>
                                <p className="text-dark " style={{ fontSize: "12px" }}>Price</p>
                                <li>RS. 15</li>
                                <li>RS. 17</li>
                                <li>RS. 22</li>
                                <li>RS. 35</li>
                                <li>RS. 15</li>
                                <li>RS. 41</li>
                                <li>RS. 50</li>
                                <li>RS. 32</li>
                            </ol>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mt-5">
                <hr style={{ border: "2px solid black" }} />
            </div>
            <div className=" container d-flex mt-4" style={{ justifyContent: "space-between" }}>
                <h1>Useful Links</h1>
                <h1>Categories</h1>
            </div>

        </>
    )
}