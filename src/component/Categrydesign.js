import React from "react";
import { useNavigate } from "react-router";

export const Categorydesign = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className=" group hover: ease-in  items-center h-[180px] w-[100px] mt-0 mt-1   " onClick={() => navigate("/breakfast")}>
            <div className=" mt-3  " style={{ height: "100%" }}>
                <div className="img categorys  p-1 text-center d-flex " style={{ height: "60%", backgroundColor: "#c2d7dc" }}>
                    <img
                        className="mx-1 mt-2 category-img-radius"
                        src={data.img}
                        width={"90%"}
                    />
                </div>
                <div className="title mt-1 text-center">
                    <p>{data.title}</p>
                </div>
            </div>
        </div>
    )
}

