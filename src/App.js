import logo from './logo.svg';
import './App.css';
import CustomOTPInput from './lib/components/CustomOTPInput';
import { useState } from 'react';
// import CustomOTPInput from 'react-otp-inpt/dist/components/CustomOTPInput';

function App() {

  const [otp, setOtp] = useState(1235)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CustomOTPInput value={otp} onChange={(value) => setOtp(value)}/>
      </header>
    </div>
  );
}

export default App;
