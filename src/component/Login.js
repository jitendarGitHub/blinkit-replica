// import React from "react";
// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { useNavigate } from "react-router";
// const Login = () => {
//     const [show, setShow] = useState(false);
//     const navigate = useNavigate()
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             <button className="btn fs-5 mx-3" type="submit" onClick={handleClose}>Login</button>
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title><span className="phone-header">Phone Number Varification</span></Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form >
//                         <div className="text-center fw-light ">
//                             <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
//                                 Login/Sign up</span>
//                             <div className="input-group justify-content-center mt-3 " style={{ height: "2px" }}>
//                                 <span className="input-group-text" id="basic-addon3">+91</span>
//                                 <input type="number" className="  col-6 input" id="basic-url" aria-describedby="basic-addon3" />
//                             </div>
//                             <div className="text-center">
//                                 <button className="col-7 mt-5  mt-4 btn btn-success lg-btn">Next</button>
//                             </div>
//                             <p className="mt-5 " style={{ fontSize: '11px' }}>By continuing, you agree to our</p>
//                             <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: "underline" }}>Term of Service &nbsp;&nbsp; Privacy of Policy</a>
//                         </div>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
//         </>
//     )
// }
// export default Login; 