import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Advertise from "../component/Advartise";
import Category from "./Category";
import Offers from "../component/Offers";
import Product from "../component/Product";
import RollinkPaper from "../component/ProductRollingPaper";
import { Products } from "../mockup/MockProduct";
import "swiper/css";
// import Api from "../api/Index";

const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //   const api = Api.getProductApi();
  // console.log('item of Api', api)
  return (
    <>
      <Advertise />
      <Offers />
      <Category />
      <h3 className=" container fw-bold fs-4 ">Dairy, Bread & Eggs</h3>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto p-2 ">
        {Products.map((item) => {
          return (
            <>
              <Product key={item.id} item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};
export default Home;
