import { useNavigate } from "react-router"
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import OtpInput from "react18-input-otp";


export default function OtpPage(props) {
    const { change, premodalstate, close } = props

    function SweetAlert() {
        const myTimer = swal("Good job!", "Successful Logged In", "success", { timer: 1500 })
    }

    const [otp, setOtp] = useState(0);
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const [seconds, setSeconds] = useState(30);
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [seconds]);
    const resendOTP = () => {
        setSeconds(30);
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
                className={otp.length == 4 ? "bg-success form-control w-50 mt-3" : "bg-secondary disabled form-control w-50 mt-3"}>
                OK
            </Button>

            <div className="countdown-text mt-3">
                {seconds > 0 ? (
                    <p style={{ color: "#ccc" }}>Resend Code:
                        ( in {seconds < 10 ? `0${seconds}` : seconds} secs)
                    </p>
                ) : (
                    <button
                        disabled={seconds > 0}
                        style={{ color: seconds > 0 ? "#DFE3E8" : "#0c831f", }}
                        onClick={resendOTP}>Resend Code
                    </button>
                )}


            </div>
        </div>
    )

}

