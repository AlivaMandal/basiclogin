import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handlesubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
        }

  return (
    <div>
      <h2>login here</h2>
      <div>
      <input type='text' value={username} 
      onChange={(e) => setUserName(e.target.value)} 
      placeholder='user-name'  />
      <br />
      <input type='password'value={password} 
      onChange={(e) => setPassword(e.target.value)} 
      placeholder='password'  />
      <div>
      <button onClick={handlesubmit}>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default Login
