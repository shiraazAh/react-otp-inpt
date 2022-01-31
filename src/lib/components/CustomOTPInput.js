import React, { useState, useRef, useCallback } from "react";
import { useEffect } from "react/cjs/react.development";

const CustomOTPInput = ({getValue}) => {
    const [OTP, setOTP] = useState(["", "", "", ""]);
    const [isFocused, setIsFocused] = useState(false);
    const [curInput, setCurInput] = useState(0);
    const otpRef1 = useRef("");
    const otpRef2 = useRef("");
    const otpRef3 = useRef("");
    const otpRef4 = useRef("");

    useEffect(() => {
        if(isFocused) {
            checkInput();
        }
    }, [isFocused, curInput]);

    useEffect(() => {
        if(OTP[0] !== "" && OTP[1] !== "" && OTP[2] !== "" && OTP[3] !== "") {
            let otpValue = OTP.join("")
            console.log(otpValue);
            getValue(parseInt(otpValue));
        }
    }, [OTP])

    const onChangeHandler = (index, value) => {
        let numberValue = parseInt(value)
        let digits = value ? numberValue.toString().length : ""
        if (value != "" && !numberValue) { //If its not a number do nothing
            return;
        }
        let newOTParray = [...OTP];
        let newCurInput = index;
        if(digits > 1) {
            let numberValueString = numberValue.toString().slice(0, 4) // get only 4 values max
            newOTParray.map((el, i) => {
                if(index <= i && digits > i)  {
                    newOTParray[i] = parseInt(numberValueString.slice(i, i + 1));
                }
            })
            newCurInput = (index + digits) - 1;
        } else {
            newOTParray[index] = value ? numberValue : "";
            newCurInput = index + 1;
        }
        value ? setCurInput(newCurInput) : setCurInput(index);
        setOTP(newOTParray);
    };

    const checkInput = (newOTParray) => {
        // console.log(newOTParray);
        if(curInput === 0) otpRef1.current.focus();
        else if(curInput === 1) otpRef2.current.focus();
        else if(curInput === 2) otpRef3.current.focus();
        else if(curInput === 3) otpRef4.current.focus();
    }

    const backspaceHandler = (e) => {
        if (e.keyCode === 8 && !e.target.value) {
            if(curInput === 0) otpRef1.current.focus();
            else if(curInput === 1) otpRef1.current.focus();
            else if(curInput === 2) otpRef2.current.focus();
            else if(curInput === 3) {
                otpRef3.current.focus();
            }
        } 
    }

    const blurHandler = () => {
        if(OTP[0] === "" && OTP[1] === "" && OTP[2] === "" && OTP[3] === "") {
            setIsFocused(false)
        }
    }

    return (
        <div className="otp-wrapper">
            <input
                type="text"
                className="form-control mt-2 otp-wrapper-input"
                name="Otp"
                placeholder={isFocused ? "" : "Enter OTP"}
                onFocus={() => {
                    setIsFocused(true) 
                    checkInput()
                }
                }
            />
            {isFocused && (
                <div className="otpInputWrapper">
                    <input
                        ref={otpRef1}
                        onChange={(e) => onChangeHandler(0, e.target.value)}
                        // onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[0]}
                        type="text"
                        className="form-control otpInput mt-2 d-inline-block me-2"
                        name="Otp1"
                        onBlur={() => blurHandler()}
                    />
                    <input
                        ref={otpRef2}
                        onChange={(e) => onChangeHandler(1, e.target.value)}
                        // onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[1]}
                        type="text"
                        className="form-control otpInput mt-2 d-inline-block me-2"
                        name="Otp2"
                    />
                    <input
                        ref={otpRef3}
                        onChange={(e) => onChangeHandler(2, e.target.value)}
                        // onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[2]}
                        type="text"
                        className="form-control otpInput mt-2 d-inline-block me-2"
                        name="Otp3"
                    />
                    <input
                        ref={otpRef4}
                        onChange={(e) => onChangeHandler(3, e.target.value)}
                        // onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[3]}
                        type="text"
                        className="form-control otpInput mt-2 d-inline-block me-2"
                        name="Otp4"
                    />
                </div>
            )}
            <style jsx>{`
                .otpInput {
                    width: 32px;
                    border: none;
                    border-bottom: 1px solid #cccccc !important;
                    border-radius: 0px !important;
                    height: 18px !important;
                    margin-left: 0.3rem;
                    width: 20px;
                }

                .otpInput:first-child {
                    margin-left: 0rem !important;
                }
                .otpInputWrapper {
                    position: absolute;
                    top: 0px;
                    left: 10px;
                    width: 100%;
                }
                .otp-wrapper{
                    position: relative;
                    display: inline-block;
                }
                .otp-wrapper-input {
                    width: 175px;
                }
                input.form-control {
                    background: #FFFFFF;
                    border-radius: 5px;
                    padding: 10px;
                    height: 26px;
                    font-size: 16px;
                    font-family: inherit;
                }
                
                input.form-control:focus{
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default CustomOTPInput;
