"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-int.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("react/cjs/react.development");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const CustomOTPInput = _ref => {
  let {
    getValue
  } = _ref;
  const [OTP, setOTP] = (0, _react.useState)(["", "", "", ""]);
  const [isFocused, setIsFocused] = (0, _react.useState)(false);
  const [curInput, setCurInput] = (0, _react.useState)(0);
  const otpRef1 = (0, _react.useRef)("");
  const otpRef2 = (0, _react.useRef)("");
  const otpRef3 = (0, _react.useRef)("");
  const otpRef4 = (0, _react.useRef)("");
  (0, _react2.useEffect)(() => {
    if (isFocused) {
      checkInput();
    }
  }, [isFocused, curInput]);
  (0, _react2.useEffect)(() => {
    if (OTP[0] !== "" && OTP[1] !== "" && OTP[2] !== "" && OTP[3] !== "") {
      let otpValue = OTP.join("");
      console.log(otpValue);
      getValue(parseInt(otpValue));
    }
  }, [OTP]);

  const onChangeHandler = (index, value) => {
    let numberValue = parseInt(value);
    let digits = value ? numberValue.toString().length : "";

    if (value != "" && !numberValue) {
      //If its not a number do nothing
      return;
    }

    let newOTParray = [...OTP];
    let newCurInput = index;

    if (digits > 1) {
      let numberValueString = numberValue.toString().slice(0, 4); // get only 4 values max

      newOTParray.map((el, i) => {
        if (index <= i && digits > i) {
          newOTParray[i] = parseInt(numberValueString.slice(i, i + 1));
        }
      });
      newCurInput = index + digits - 1;
    } else {
      newOTParray[index] = value ? numberValue : "";
      newCurInput = index + 1;
    }

    value ? setCurInput(newCurInput) : setCurInput(index);
    setOTP(newOTParray);
  };

  const checkInput = newOTParray => {
    // console.log(newOTParray);
    if (curInput === 0) otpRef1.current.focus();else if (curInput === 1) otpRef2.current.focus();else if (curInput === 2) otpRef3.current.focus();else if (curInput === 3) otpRef4.current.focus();
  };

  const backspaceHandler = e => {
    if (e.keyCode === 8 && !e.target.value) {
      if (curInput === 0) otpRef1.current.focus();else if (curInput === 1) otpRef1.current.focus();else if (curInput === 2) otpRef2.current.focus();else if (curInput === 3) {
        otpRef3.current.focus();
      }
    }
  };

  const blurHandler = () => {
    if (OTP[0] === "" && OTP[1] === "" && OTP[2] === "" && OTP[3] === "") {
      setIsFocused(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "otp-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-control mt-2 otp-wrapper-input",
    name: "Otp",
    placeholder: isFocused ? "" : "Enter OTP",
    onFocus: () => {
      setIsFocused(true);
      checkInput();
    }
  }), isFocused && /*#__PURE__*/_react.default.createElement("div", {
    className: "otpInputWrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    ref: otpRef1,
    onChange: e => onChangeHandler(0, e.target.value) // onFocus={() => checkInput()}
    ,
    onKeyDown: e => backspaceHandler(e),
    value: OTP[0],
    type: "text",
    className: "form-control otpInput mt-2 d-inline-block me-2",
    name: "Otp1",
    onBlur: () => blurHandler()
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: otpRef2,
    onChange: e => onChangeHandler(1, e.target.value) // onFocus={() => checkInput()}
    ,
    onKeyDown: e => backspaceHandler(e),
    value: OTP[1],
    type: "text",
    className: "form-control otpInput mt-2 d-inline-block me-2",
    name: "Otp2"
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: otpRef3,
    onChange: e => onChangeHandler(2, e.target.value) // onFocus={() => checkInput()}
    ,
    onKeyDown: e => backspaceHandler(e),
    value: OTP[2],
    type: "text",
    className: "form-control otpInput mt-2 d-inline-block me-2",
    name: "Otp3"
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: otpRef4,
    onChange: e => onChangeHandler(3, e.target.value) // onFocus={() => checkInput()}
    ,
    onKeyDown: e => backspaceHandler(e),
    value: OTP[3],
    type: "text",
    className: "form-control otpInput mt-2 d-inline-block me-2",
    name: "Otp4"
  })), /*#__PURE__*/_react.default.createElement("style", {
    jsx: true
  }, "\n                .otpInput {\n                    width: 32px;\n                    border: none;\n                    border-bottom: 1px solid #cccccc !important;\n                    border-radius: 0px !important;\n                    height: 18px !important;\n                    margin-left: 0.3rem;\n                    width: 20px;\n                }\n\n                .otpInput:first-child {\n                    margin-left: 0rem !important;\n                }\n                .otpInputWrapper {\n                    position: absolute;\n                    top: 0px;\n                    left: 10px;\n                    width: 100%;\n                }\n                .otp-wrapper{\n                    position: relative;\n                    display: inline-block;\n                }\n                .otp-wrapper-input {\n                    width: 175px;\n                }\n                input.form-control {\n                    background: #FFFFFF;\n                    border-radius: 5px;\n                    padding: 10px;\n                    height: 26px;\n                    font-size: 16px;\n                    font-family: inherit;\n                }\n                \n                input.form-control:focus{\n                    outline: none;\n                }\n            "));
};

var _default = CustomOTPInput;
exports.default = _default;