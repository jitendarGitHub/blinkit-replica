import { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import PhoneInput from 'react-phone-number-input'

export default function Login(props) {
    const { loginbtn } = props
    const [usererr, setusererror] = useState(false)
    const Onchange = (e) => {
        let data = e.target.value;
        if (data.length === 10) {
            setusererror(true);
        }
        else {
            setusererror(false)
        }
    }

    return (
        <>
            <div className="text-center  fw-light ">
                <span className="login" style={{ fontSize: '13px' }}>Enter your phone number to<br />
                    Login/Sign up
                </span>
                <div class="col-8 mx-5 mt-3">
                    <div class="input-group mx-4">
                        <span class="input-group-text">
                            <img src="https://cdn-icons-png.flaticon.com/512/4921/4921142.png" className="w-5 h-5 mx-1" />
                            +91
                        </span>
                        <input
                            autoComplete='on'
                            type="number"
                            className="form-control"
                            id="InputNumber"
                            onChange={Onchange}
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <Button
                    size="lg"
                    className={usererr ? "col-8 mt-4 btn bg-success lg-btn" : "col-8 mt-4 disabled lg-btn bg-secondary "}
                    onClick={loginbtn}>
                    Next
                </Button>

                <p className="mt-5 " style={{ fontSize: '11px' }}>
                    By continuing, you agree to our
                </p>
                <a href="#" style={{ fontSize: '12px', color: 'green', textDecoration: "underline" }}>
                    Term of Service &nbsp;&nbsp; Privacy of Policy
                </a>
            </div>
        </>
    );
} 