import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput.js';
import UserInput from './UserInput/UserInput.js';
import { useState } from 'react';

function App() {

const [userData,manipulateData] = useState(
    {
      user : [
        {
          name : "sidharth"
        }
      ]
    }
  );

  const userWishes = (realName)=>{
    manipulateData({
      user : [
        {
          name : realName.target.value
        }
      ]
    }
  )
  }

  const style3 = {
    textDecoration : 'underline'
  };

  return (
    <div className="App">
      <p>Enter Your User name : </p>
      <UserInput changeUser={userWishes} name={userData.user[0].name}/>
      <UserOutput name={userData.user[0].name}></UserOutput>
      <UserOutput name={userData.user[0].name}></UserOutput>
      <UserOutput name={userData.user[0].name} style3={style3}></UserOutput>
      <UserOutput name={userData.user[0].name}></UserOutput>
    </div>
  );
}

export default App;
