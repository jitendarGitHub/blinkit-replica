// import { useDispatch, useSelector } from "react-redux"
// import { remove } from "../reducer/cartSlice"
// import { useState, useEffect } from "react";
// import AddBtn from "./AddBtn";
// import Product from "./Product";
// export default function Cart() {
//     const [totalAmount, setTotalAmount] = useState(0);
//     const [totalQuantity, setTotalQuantity] = useState(0);
//     const cart = useSelector((state) => state.cart)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
//         setTotalQuantity(cart.reduce((acc, curr) => acc + curr.id, 0))
//     }, [cart]);
//     return (
//         <>
//             <div className="offcanvas offcanvas-end " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
//                 <div className="offcanvas-header btn-right ">
//                     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><img src="https://cdn-icons-png.flaticon.com/512/2997/2997911.png" alt="" /></button>
//                 </div>
//                 <div className="container">
//                     <h3 className="text-start  cart-header">My Cart</h3>

//                     <span className="text-gray-700 font-semibold mt-5 ">
//                         Total Amount  : ₹ {totalAmount}
//                     </span> <br />

//                     <span className="text-gray-700 font-semibold ">
//                         Total Quantity  :  {cart.length}
//                     </span>

//                     <div className="cart-Wrapper mt-5  p-2  " >
//                         {cart.map((item) =>
//                             <div className=" d-flex col-sm-8 cart-item mb-4 " key={item.id}>
//                                 <div className="img bg-success border-2 text-center mb-3 mx-2" style={{ width: "20%" }}>
//                                     <img src={item.image} alt="" width={'100%'} />
//                                 </div>
//                                 <div className="price mx-3">
//                                     <p className="" style={{ fontSize: "13px" }}>{item.title}</p>
//                                     <h5 className="mt-3 d-flex fw-bold"><b className="mx-1">₹ </b>{item.price}
//                                         <AddBtn />
//                                     </h5>

//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }