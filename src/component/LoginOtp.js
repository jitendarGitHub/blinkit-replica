import { useNavigate } from "react-router"
import swal from 'sweetalert';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export default function OtpPage(props) {
    const navigate = useNavigate()
    const [state, setstate] = useState(true)
    function app() {
        setstate(false)
        swal("Good job!", "Successful Logged In", "success")
        navigate("/");
    }

    return (
        <>
            <div className="mt-3 text-center otp-bg ">
                {
                    state ? (
                        <>
                            <span className="text-center">Enter 4 digit code sent to your phone  </span>
                            <div className="otp mt-3  d-flex item-center justify-content-center gap-2">
                                <div className=" ">
                                    <input type="text " className="border-2 fs-4 text-center" />
                                </div>
                                <div className=" ">
                                    <input type="text " className="border-2 fs-4 text-center" />
                                </div>
                                <div className=" ">
                                    <input type="text" className="border-2 fs-4 text-center" />
                                </div>
                                <div className=" ">
                                    <input type="text " className="border-2 fs-4 text-center" />
                                </div>
                            </div>
                            <div>
                                <Button onClick={app} className="bg-success form-control w-50 mt-3 ">OK</Button>
                                <div className="text-success mt-3">
                                    <a href="#">Resend code</a>
                                </div>
                            </div>
                        </>
                    ) : (<>{ }</>)
                }
            </div>
        </>
    )

}