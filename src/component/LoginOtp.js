import { useNavigate } from "react-router"
import swal from 'sweetalert';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import InputValue from "./Login";
import OtpInput from "react18-input-otp";


export default function OtpPage(props) {
    const { change, premodalstate, close } = props
    const navigate = useNavigate()
    const [state, setstate] = useState(true)
    function SweetAlert() {
        swal("Good job!", "Successful Logged In", "success")
    }

    const [btn, setbtn] = useState(false);
    const [otp, setOtp] = useState(0);
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
        if (otp.length !== 3) {
            setbtn(false)
        }
        else {
            setbtn(true)
        }
    };
    return (
        <div className="mt-3 text-center otp-bg">
            <span className="text-center">Enter 4 digit code sent to your phone Number<br></br> +91- { } </span>
            <div id="form1" action="#" method="POST" className="otp mt-3  d-flex item-center justify-content-center gap-3">
                <OtpInput
                    value={otp}
                    onChange={handleChange}
                    inputStyle={{ width: "52px" }}
                    focusStyle="form-control"
                    containerStyle="gap-1"
                    numInputs={4}
                    className="border-2"
                    maxLength={4}
                />
            </div>
            <Button
                onClick={() => { change(); SweetAlert(); premodalstate(); close() }}
                className={btn ? "bg-success form-control w-50 mt-3" : "bg-secondary disabled form-control w-50 mt-3"}>
                OK
            </Button>
            <div className="mt-4 ">
                <button style={{ color: "Highlight", textDecoration: "underline" }}>Resend OTP</button>
            </div>

        </div>
    )

}

