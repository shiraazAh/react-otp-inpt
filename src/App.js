import logo from './logo.svg';
import './App.css';
import CustomOTPInput from './lib/components/CustomOTPInput';
import { useState } from 'react';
// import CustomOTPInput from 'react-otp-inpt/dist/components/CustomOTPInput';

function App() {

  const [otp, setOtp] = useState(1234)

  return (
    <div className="App">
        <CustomOTPInput value={otp} onChange={(value) => setOtp(value)} placeholder="Enter OTP"/>
    </div>
  );
}

export default App;
