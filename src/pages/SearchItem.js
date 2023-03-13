import React from "react";
import MockCategory from "../mockup/MockCategory";
import { Categorydesign } from "../component/Categrydesign";

const SearchItem = (item) => {
    return (
        <>
            <div className="d-flex container mt-4">
                <img src="https://cdn-icons-png.flaticon.com/128/6797/6797554.png" alt="" width={"17px"} />
                <p className="container fs-5">Trending</p>
            </div>
            <div className="grid sm:grid-cols-3 md:grid-cols-5 space-x-6 space-y-10 lg:grid-cols-10  max-w-7xl mx-auto " >
                {MockCategory.map((data) => {
                    return (
                        <>
                            <div className="main  mt-1 ">
                                <Categorydesign key={item.id} data={data} />
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}
export default SearchItem