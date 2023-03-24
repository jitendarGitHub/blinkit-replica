import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { NavLink } from "react-router-dom";
import { Products } from "../mockup/MockProduct";
import Product from "../component/Product";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Items from "../mockup/MockUpcategoryItem";
import Rolling from "../mockup/MockUpRolling";
export default function CategoryItem2() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid row">
                <div className="col-sm-3 category2-scroll" >
                    {/* {Items.map((item) => (
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="  p-1 text-center d-flex " >
                                    <img className="mx-1 mt-2 " src={item.img} alt="" width={"15%"} />
                                    <p className="mx-3 mt-2 truncate w-40 text-start">{item.tit}</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    ))} */}
                    <ListGroup>
                        <ListGroup.Item>
                            <div className=" p-1 text-center d-flex " >
                                <img className="mx-1 mt-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOFdb6u3OVnLWM1fTfvBZN4GOisIGkkLDuTzcVxqUdg&s" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Milk</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="p-1 text-center d-flex">
                                <img className="mx-1 mt-2 " src="https://media.istockphoto.com/id/1062080248/photo/plate-with-typical-dutch-meal-fired-snack-croquet-with-salad-on-slice-of-bread.jpg?b=1&s=170667a&w=0&k=20&c=1f8Z97ADKp34oIbreGARKvdu5a90iJLIEHSVhTXPicI=" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Bread and Pav</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://cdn.pixabay.com/photo/2015/09/17/17/19/eggs-944495__340.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Eggs</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://t3.ftcdn.net/jpg/02/04/59/62/240_F_204596209_MzOIEdchl86EfbROQRp0Dm86Z3qWLqoX.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Poha,Dalia and Other Gains</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2" src=" https://www.seriouseats.com/thmb/jdFyRQOfbKA1COGPrkN5927FiBs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220628-FreshPaneer-AmandaSuarez-11c5e6f76d064cf88153a93d28384bc8.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Paneer and tofu</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src=" https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature_thumb.jpg?sfvrsn=aba8c621_4" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Cheese</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://m.media-amazon.com/images/I/71LLYXRO6eL._SL1500_.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Cream and Whitener</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://images.indianexpress.com/2022/07/chocolate-cocoa_200_getty.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Chocolate</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://img1.hkrtcdn.com/16381/prd_1638000-MuscleBlaze-Natural-Peanut-Butter-Unsweetened-1-kg-Extra-Crunchy_o.jpg" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Peanut Buteer</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuef0DqXLC5E96eH0SXtY648BWQimF7WIqnxCoqGE7g&s" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Exotics</p>
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="  p-1 text-center d-flex ">
                                <img className="mx-1 mt-2 " src="https://img.freepik.com/free-photo/top-view-roses-flowers_23-2148860041.jpg?size=338&ext=jpg&ga=GA1.1.1850681077.1678256159&semt=sp" alt="" width={"15%"} />
                                <p className="mx-3 mt-2 truncate w-40 text-start">Fresh Vegitables</p>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col-9 category-scroll mt-2">
                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                        <h4 className="fw-bold mt-3 mx-4">Buy Fresh Milk Products Online</h4>

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
                    <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-7xl mx-auto p-2 "  >
                        {Products.map((item) => {
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