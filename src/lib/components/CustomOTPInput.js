import React, { useState, useRef} from "react";
import { useEffect } from "react/cjs/react.development";

const CustomOTPInput = ({onChange, placeholder, className, outerInputClassName, otpInputsClassName, otpWrapperClassName, value}) => {
    const [OTP, setOTP] = useState(["", "", "", ""]);
    const [isFocused, setIsFocused] = useState(false);
    const [curInput, setCurInput] = useState(0); // 0, 1, 2, 3
    const [isBackSpace, setIsBackSpace] = useState(false);
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
        // if(OTP[0] !== "" && OTP[1] !== "" && OTP[2] !== "" && OTP[3] !== "") {
            let otpValue = OTP.join("")
            if(onChange) onChange(otpValue);
        // }
    }, [OTP])

    useEffect(() => {
        let newArrayVal = ["", "", "", ""]
        if(value) {
            let recievedValue = value.toString()
            if(recievedValue.length > 3) setCurInput(recievedValue.length - 1)
            else setCurInput(recievedValue.length)
            recievedValue = recievedValue.slice(0, 4).split("");
            recievedValue.map((val, i) => {
                newArrayVal[i] = val; 
            })
            setOTP([...newArrayVal])
        } else {
            setCurInput(0);
        }
    }, [value])

    useEffect(() => {
        if(!placeholder || value) setIsFocused(true);
    }, [])

    const onChangeHandler = (index, value) => {
        if(!!onChange) {
            let numberValue = parseInt(value)
            let digits = value ? numberValue.toString().length : ""
            if (value != "" && (numberValue !==0 && !numberValue)) { //If its not a number do nothing
                return;
            }
            let newOTParray = [...OTP];
            let newCurInput = index;
            if(digits > 1) {
                let numberValueString = numberValue.toString().slice(0, 4) // get only 4 values max
                let ch = 0
                newOTParray.map((el, i) => {
                    if(index <= i && digits > i)  {
                        newOTParray[i] = parseInt(numberValueString.slice(ch, ch + 1));
                        ch = ch + 1
                    }
                })
                newCurInput = (index + digits) - 1;
            } else {
                newOTParray[index] = value ? numberValue : "";
                newCurInput = index + 1;
            }
            value ? setCurInput(newCurInput) : setCurInput(index);
            setOTP(newOTParray);
        }
    };

    const checkInput = () => {
        if(!isBackSpace) {
            if(curInput === 0) otpRef1.current.focus();
            else if(curInput === 1) otpRef2.current.focus();
            else if(curInput === 2) otpRef3.current.focus();
            else if(curInput === 3) otpRef4.current.focus();
        } else if(isBackSpace) {
            setIsBackSpace(false);
        }
    }

    const backspaceHandler = (e) => {
        if (e.keyCode === 8 && !e.target.value && OTP[0]) {
            setIsBackSpace(true);
        } 
    }

    useEffect(() => {
        if(isBackSpace) {
            let newOtp = [...OTP]
            curInput !== 0 ? newOtp[curInput - 1] = "" : newOtp[curInput] = "";
            if(curInput === 0) {
                otpRef1.current.focus(); 
            }
            else if(curInput === 1) {
                otpRef1.current.focus();
            }
            else if(curInput === 2) {
                otpRef2.current.focus();
            }
            else if(curInput === 3) {
                otpRef3.current.focus();
            }
            setOTP(newOtp)
        }
    }, [isBackSpace])

    const blurHandler = () => {
        if(OTP[0] === "" && OTP[1] === "" && OTP[2] === "" && OTP[3] === "" && placeholder) {
            setIsFocused(false)
        }
    }

    let class1 = className ? className : ""
    let class2 = outerInputClassName ? outerInputClassName : ""
    let class3 = otpWrapperClassName ? otpWrapperClassName : ""
    let class4 = otpInputsClassName ? otpInputsClassName : ""

    return (
        <div className={`otp-wrapper ${class1}`}>
            <input
                type="text"
                className={`form-control mt-2 otp-wrapper-input ${class2}`}
                name="Otp"
                placeholder={isFocused && placeholder ? "" : placeholder}
                onFocus={() => {
                    setIsFocused(true) 
                    checkInput()
                }
                }
            />
            {isFocused && (
                <div className={`otpInputWrapper ${class3}`}>
                    <input
                        ref={otpRef1}
                        onChange={(e) => onChangeHandler(0, e.target.value)}
                        onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[0]}
                        type="text"
                        className={`form-control otpInput ${class4}`}
                        name="Otp1"
                        onBlur={() => blurHandler()}
                    />
                    <input
                        ref={otpRef2}
                        onChange={(e) => onChangeHandler(1, e.target.value)}
                        onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[1]}
                        type="text"
                        className={`form-control otpInput ${class4}`}
                        name="Otp2"
                    />
                    <input
                        ref={otpRef3}
                        onChange={(e) => onChangeHandler(2, e.target.value)}
                        onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[2]}
                        type="text"
                        className={`form-control otpInput ${class4}`}
                        name="Otp3"
                    />
                    <input
                        ref={otpRef4}
                        onChange={(e) => onChangeHandler(3, e.target.value)}
                        onFocus={() => checkInput()}
                        onKeyDown={(e) => backspaceHandler(e)}
                        value={OTP[3]}
                        type="text"
                        className={`form-control otpInput ${class4}`}
                        name="Otp4"
                    />
                </div>
            )}
            <style jsx>{`
                .otpInput {
                    width: 32px;
                    border: none !important;
                    border-bottom: 1px solid #9D9D9D !important;
                    border-radius: 0px !important;
                    height: 18px !important;
                    margin-left: 0.3rem;
                    width: 20px;
                }

                .otpInput:focus {
                    border-bottom: 1px solid #1680AA !important;
                    border: none !important;
                }
                .otpInput:focus-visible {
                    // border: none !important;
                    border-bottom: 1px solid #1680AA !important;
                    outline: none;
                }

                .otpInput:first-child {
                    margin-left: 0rem !important;
                }
                .otpInputWrapper {
                    position: absolute;
                    top: 2px;
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
                .otp-wrapper-input:focus {
                    border: none !important;
                }
                input.form-control {
                    background: #FFFFFF;
                    border-radius: 5px;
                    padding: 10px;
                    height: 26px;
                    font-size: 16px;
                    font-family: inherit;
                    border: 1px solid #9D9D9D;
                  }
                }
                
                input.form-control:focus{
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default CustomOTPInput;
