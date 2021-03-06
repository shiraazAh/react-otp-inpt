# react-otp-inpt

A simple OTP input. 

![ezgif com-gif-maker](https://user-images.githubusercontent.com/35837216/152675766-783313dd-7061-45cc-820a-34255a6dcd18.gif)

## Example

```								
import CustomOTPInput from 'react-otp-inpt/dist/components/CustomOTPInput';

const App = () => {

    const [otp, setOtp] = useState("") 

  return (
        <CustomOTPInput 
            placeholder="Enter OTP"
            value={otp}
            onChange={value => setOtp(value)}    
        />
  );
}
```

## Props

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange                               | function           | **Required**                                                                              | Returns OTP code typed in inputs                                                                                                                                                       |
| value | String |     **Required**                                                                           | This is will be the value displayed on the input |
 placeholder | String              | -                                                                           | Give placeholder to give show a placeholder text initially (this will go on focus of the input), if placeholder is given no value, then it will directly show the otp inputs |

## Styling Props

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| className                               | String             |                                                                             | This is the is to change the styles of the outer most div                                                                                                                                                     |
| outerInputClassName | String              |                                                                           | This is to change styles of the outer input |
| otpWrapperClassName | String              |                                                                            | This is to change the styles of the wrapper div of the inner otp inputs |
| otpInputsClassName | String              |                                                                            | This is to change the styles of the inner otp inputs |
