import { useState } from 'react';
import { logInApi, usersListApi } from './api';
import './App.scss';
import { useNavigate } from 'react-router-dom';
import { setUsersData } from './app/action';
import { useDispatch } from "react-redux"

function App() {
  const [formData, setFormData] = useState<{
    email: string; 
    password: string; 
  }>({
    email: 'hakobyanviktorya8@gmail.com',
    password: '94a65df62ba94c16e3a5fb6b',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
       ...formData,
       [name]: value,
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Data is a",formData); 
    try {
      const res = await logInApi(formData)
      const result = await res.json()
      const token = result.token
      console.log("Result token is ", token)

      if(token){
        localStorage.setItem('token', token);        
        const usersRes = await usersListApi(token)
        const usersResult = await usersRes.json()
        console.log("Users data is ", usersResult); 

        dispatch(setUsersData(usersResult));
        navigate(`/users`);
      }
    } catch (error) {
      console.log("Error message is", error);      
    }
  }   

  return (
    <div className="app">
      <div className="formWrapper">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input 
                type="text" 
                name="email" 
                onChange={handleChange} 
                placeholder="Email" 
                autoComplete="off"
                value={formData.email}              
              />
            </label>
            <label>
              Password:
              <input 
                type="password" 
                name="password" 
                onChange={handleChange} 
                placeholder="Password" 
                autoComplete="off"
                value={formData.password}
              />
            </label>
            <input 
              type="submit" 
              value="Log in" 
              className="logInButton"
            />
          </form>
        </div>
    </div>
  );
}

export default App;
