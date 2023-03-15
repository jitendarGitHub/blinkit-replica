import { useNavigate } from "react-router"
import swal from 'sweetalert';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Form } from "react-bootstrap";
import InputValue from "./Login";


export default function OtpPage(props) {
    const navigate = useNavigate()
    const [state, setstate] = useState(true)
    function app() {
        swal("Good job!", "Successful Logged In", "success")
    }

    const [btn, setbtn] = useState(false);
    function Otp(e) {
        let otp = e.target.value
        if (otp.length == 1) {
            setbtn(true)
        }
        else {
            setbtn(false)
        }
    }
    return (
        <>
            <div className="mt-3 text-center otp-bg">
                <span className="text-center">Enter 4 digit code sent to your phone Number<br></br> +91- { } </span>
                <div className="otp mt-3  d-flex item-center justify-content-center gap-2">
                    <div className=" ">
                        <Form.Control maxLength="1" type="text" name="OtpInput" tabIndex="1" className="border-2 fs-4 text-center" />
                    </div>
                    <div className=" ">
                        <Form.Control maxLength="1" type="text" name="OtpInput" tabIndex="1" className="border-2 fs-4 text-center" />
                    </div>
                    <div className=" ">
                        <Form.Control maxLength="1" type="text" name="OtpInput" tabIndex="1" className="border-2 fs-4 text-center" />
                    </div>
                    <div className=" ">
                        <Form.Control maxLength="1" type="text" name="OtpInput" tabIndex="1" className="border-2 fs-4 text-center" onChange={Otp} />
                    </div>
                </div>
                <div>
                    {
                        btn ? (
                            <Button onClick={() => { props.change(); app(); props.cat() }} className="bg-success form-control w-50 mt-3 ">OK</Button>
                        ) : (
                            <Button className="bg-secondary disabled form-control w-50 mt-3 ">OK</Button>
                        )
                    }
                    <div className="mt-4 ">
                        <button style={{ color: "Highlight", textDecoration: "underline" }}>Resend OTP</button>
                    </div>
                </div>
            </div>
        </>
    )

}


// import React, { Component, ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// class OtpLogin extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

//     handleChange(value1, event) {

//         this.setState({ [value1]: event.target.value });
//     }

//     handleSubmit(event) {

//         const data = new FormData(event.target);
//         console.log(this.state);
//         event.preventDefault();
//     }

//     inputfocus = (elmnt) => {
//         if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
//             const next = elmnt.target.tabIndex - 2;
//             if (next > -1) {

//                 elmnt.target.form.elements[next].focus()
//             }
//         }
//         else {
//             console.log("next");

//             const next = elmnt.target.tabIndex;
//             if (next < 5) {
//                 elmnt.target.form.elements[next].focus()
//             }
//         }

//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="otpContainer">

//                     <input
//                         name="otp1"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp1}
//                         onKeyPress={this.keyPressed}
//                         onChange={e => this.handleChange("otp1", e)}
//                         tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp2"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp2}
//                         onChange={e => this.handleChange("otp2", e)}
//                         tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp3"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp3}
//                         onChange={e => this.handleChange("otp3", e)}
//                         tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp4"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp4}
//                         onChange={e => this.handleChange("otp4", e)}
//                         tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//                     />

//                     <input
//                         name="otp5"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp5}
//                         onChange={e => this.handleChange("otp5", e)}
//                         tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//                     />
//                 </div>
//                 <Button className="primary" type="submit">
//                     Submit
//                 </Button>
//             </form>
//         );
//     }
// }


// export default OtpLogin;