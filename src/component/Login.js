// // // // // import React from "react";
// // // // // import { useState } from "react";
// // // // // import Button from 'react-bootstrap/Button';
// // // // // import Form from 'react-bootstrap/Form';
// // // // // import Modal from 'react-bootstrap/Modal';
// // // // // import { useNavigate } from "react-router";
// // // // // const Login = () => {
// // // // //     const [show, setShow] = useState(false);
// // // // //     const navigate = useNavigate()
// // // // //     const handleClose = () => setShow(false);
// // // // //     const handleShow = () => setShow(true);

// // // // //     return (
// // // // //         <>
// // // // //             <button className="btn fs-5 mx-3" type="submit" onClick={handleClose}>Login</button>
// // // // //             <Modal show={show} onHide={handleClose}>
// // // // //                 <Modal.Header closeButton>
// // // // //                     <Modal.Title><span className="phone-header">Phone Number Varification</span></Modal.Title>
// // // // //                 </Modal.Header>
// // // // //                 <Modal.Body>
// // // // //                     <Form >
// // // // //                         <div className="text-center fw-light ">
// // // // //                             <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
// // // // //                                 Login/Sign up</span>
// // // // //                             <div className="input-group justify-content-center mt-3 " style={{ height: "2px" }}>
// // // // //                                 <span className="input-group-text" id="basic-addon3">+91</span>
// // // // //                                 <input type="number" className="  col-6 input" id="basic-url" aria-describedby="basic-addon3" />
// // // // //                             </div>
// // // // //                             <div className="text-center">
// // // // //                                 <button className="col-7 mt-5  mt-4 btn btn-success lg-btn">Next</button>
// // // // //                             </div>
// // // // //                             <p className="mt-5 " style={{ fontSize: '11px' }}>By continuing, you agree to our</p>
// // // // //                             <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: "underline" }}>Term of Service &nbsp;&nbsp; Privacy of Policy</a>
// // // // //                         </div>
// // // // //                     </Form>
// // // // //                 </Modal.Body>
// // // // //             </Modal>
// // // // //         </>
// // // // //     )
// // // // // }
// // // // // export default Login;


// // // // import React, { useState } from 'react';
// // // // import Button from 'react-bootstrap/Button';
// // // // import Modal from 'react-bootstrap/Modal';

// // // // export default function Example() {
// // // //     const [show, setShow] = useState(false);

// // // //     const handleClose = () => setShow(false);
// // // //     const handleShow = () => setShow(true);

// // // //     const [state, setstate] = useState("Enter your phone number to Login Sign up")
// // // //     function Onchange(e) {
// // // //         let item = e.target.value;
// // // //         if (item.length == 10) {
// // // //             setusererror(true)
// // // //         }
// // // //         else {
// // // //             setusererror(false)
// // // //         }
// // // //     }

// // // //     return (
// // // //         <>
// // // //             <Button variant="primary" onClick={handleShow}>
// // // //                 Launch demo modal
// // // //             </Button>

// // // //             <Modal show={show} onHide={handleClose}>
// // // //                 <Modal.Header closeButton>
// // // //                     <Modal.Title>Phone Varification</Modal.Title>
// // // //                 </Modal.Header>
// // // //                 <Modal.Body>{state}</Modal.Body>
// // // //                 <Modal.Footer>
// // // //                     <Button variant="secondary" onClick={handleClose}>
// // // //                         Close
// // // //                     </Button>
// // // //                 </Modal.Footer>
// // // //             </Modal>
// // // //         </>
// // // //     );
// // // // }

// // // import Modal from "./Modal";

// // // const products = [
// // //     {
// // //         id: 1,
// // //         name: "Organize Basic Set (Walnut)",
// // //         price: "$149",
// // //         rating: 5,
// // //         reviewCount: 38,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 2,
// // //         name: "Organize Pen Holder",
// // //         price: "$15",
// // //         rating: 5,
// // //         reviewCount: 18,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 3,
// // //         name: "Organize Sticky Note Holder",
// // //         price: "$15",
// // //         rating: 5,
// // //         reviewCount: 14,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 4,
// // //         name: "Organize Phone Holder",
// // //         price: "$15",
// // //         rating: 4,
// // //         reviewCount: 21,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 5,
// // //         name: "Organize Basic Set (Walnut)",
// // //         price: "$149",
// // //         rating: 5,
// // //         reviewCount: 38,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 6,
// // //         name: "Organize Pen Holder",
// // //         price: "$15",
// // //         rating: 5,
// // //         reviewCount: 18,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 7,
// // //         name: "Organize Sticky Note Holder",
// // //         price: "$15",
// // //         rating: 5,
// // //         reviewCount: 14,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // //     {
// // //         id: 8,
// // //         name: "Organize Phone Holder",
// // //         price: "$15",
// // //         rating: 4,
// // //         reviewCount: 21,
// // //         imageSrc:
// // //             "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
// // //         imageAlt: "TODO",
// // //         href: "#",
// // //     },
// // // ];

// // // function classNames(...classes) {
// // //     return classes.filter(Boolean).join(" ");
// // // }

// // // export default function Products() {
// // //     return (
// // //         <div className='bg-white' id='product-line'>
// // //             <div className='max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8'>
// // //                 <h2 className='sr-only'>Products</h2>
// // //                 <h1 className='text-3xl font-extrabold text-blue-800 mt-10 sm:mt-20 mb-1 ml-4'>
// // //                     Product Line
// // //                 </h1>

// // //                 <div className='-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
// // //                     {products.map((product) => (
// // //                         <div
// // //                             key={product.id}
// // //                             className='group relative p-4 border-r border-b border-gray-200 sm:p-6'
// // //                         >
// // //                             <div className='rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75'>
// // //                                 <img
// // //                                     src={product.imageSrc}
// // //                                     alt={product.imageAlt}
// // //                                     className='w-full h-full object-center object-cover'
// // //                                 />
// // //                             </div>
// // //                             <div className='pt-10 pb-4 text-center'>
// // //                                 <h3 className='text-sm font-medium text-gray-500'>
// // //                                     <a href={product.href}>
// // //                                         <span aria-hidden='true' className='absolute inset-0' />
// // //                                         {product.name}
// // //                                     </a>
// // //                                 </h3>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // import Modal from './Modal'

// // const MyComponent = () => {
// //     const [firstModal, setFirstModal] = useState(false)
// //     const [secondModal, setSecondModal] = useState(false)

// //     // I don't know context of your app, but you can use variable in close handle
// //     const handleCloseFirstModal = (shouldOpenSecond) => {
// //         setFirstModal(false)
// //         if (shouldOpenSecond === true) {
// //             setSecondModal(true)
// //         }
// //     }

// //     const handleCloseSecondModal = () => {
// //         setSecondModal(false)
// //     }

// //     return (
// //         <>
// //             <Modal open={firstModal} onRequestClose={handleCloseFirstModal} />
// //             <Modal open={secondModal} onRequestClose={handleCloseSecondModal} />
// //         </>
// //     )
// // }
// import { useNavigate } from 'react-router';
// import swal from 'sweetalert';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import Button from 'react-bootstrap/Button';
// import React, { useState } from 'react';
// export function Login(item) {
//     const [usererr, setusererror] = useState(false)
//     const Onchange = (e) => {
//         let data = e.target.value;
//         if (data.length === 10) {
//             setusererror(true);
//         }
//         else {
//             setusererror(false)
//         }
//     }
//     const [login, setlogin] = useState(false);
//     const login1 = () => setlogin(true)
//     const logout = () => setlogin(false)
//     return (
//         <>
//             <div className="text-center  fw-light ">
//                 <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
//                     Login/Sign up
//                 </span>
//                 <div class="col-8 mx-5 mt-3">
//                     <div class="input-group mx-4">
//                         <span class="input-group-text">
//                             <img src="https://cdn-icons-png.flaticon.com/512/4921/4921142.png" className="w-5 h-5 mx-1" />
//                             +91
//                         </span>
//                         <input type="number" className="form-control" id="InputNumber" onChange={Onchange} />
//                     </div>
//                 </div>
//                 {
//                     usererr ?
//                         (
//                             <Button size="lg" className="col-8 mt-3 btn bg-success lg-btn login-btn" onClick={login1} >
//                                 Next
//                             </Button>
//                         ) : <Button size="lg" className="col-8 mt-4 disabled lg-btn login-btn bg-secondary">
//                             Next
//                         </Button>}

//                 <p>By continuing, you agree to our <a href="https://blinkit.com/terms"> <span>Terms of service</span></a><br /><a href="https://blinkit.com/privacy"><span>Privacy policy</span></a></p>
//             </div>
//         </>
//     );
// }


// export default function OtpPage() {
//     const navigate = useNavigate()
//     function Popup() {
//         swal("Good job!", "Successful Logged In", "success")
//         navigate("/")
//     }

//     return (
//         <>
//             <div className="mt-3 text-center">
//                 <span className="text-center">Enter 4 digit code sent to your phone  </span>
//                 <div className="otp mt-4  d-flex item-center justify-content-center gap-2">
//                     <div className=" ">
//                         <input type="text " className="border-2 fs-4 text-center" />
//                     </div>
//                     <div className=" ">
//                         <input type="text " className="border-2 fs-4 text-center" />
//                     </div>
//                     <div className=" ">
//                         <input type="text " className="border-2 fs-4 text-center" />
//                     </div>
//                     <div className=" ">
//                         <input type="text " className="border-2 fs-4 text-center" />
//                     </div>
//                     <Button onClick={Popup} className="bg-success form-control w-50 mt-3 ">OK</Button>
//                     <div className="text-success mt-4">
//                         <a href="#">Resend code</a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }
// import React from "react";
// export const Fun = (props) => {

//     return (
//         <>
//             <button onClick={props.fun}>Submit</button>
//         </>
//     )
// }