import { useState } from 'react';
import './App.css';

function ShowHide() {
  
  const [passwordShown,setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return <div className='passcheck'>
    <label>Enter Your Name : </label>
    <input type="text" placeholder="Enter name" />
    <div>
      <label>Enter Your Password : </label>
      <input type={passwordShown?'text':'password'} name='password' placeholder="Enter password" />
    </div>
    {/* <div>
      <input type="checkbox" value="checked" />
    </div> */}
    <div>
      <button onClick={()=>togglePassword()}>Show/Hide</button>
    </div>
    <div>
      <input type="submit" value="Login" />
    </div>
  </div>
}

export default ShowHide;
