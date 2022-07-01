import { useState } from 'react';
import { logInApi } from './api';
import './App.scss';
import { useNavigate } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState<{
    email: string; 
    password: string; 
  }>({
    email: 'hakobyanviktorya8@gmail.com',
    password: '94a65df62ba94c16e3a5fb6b',
  });
  const navigate = useNavigate();

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
      if(result.token){
        localStorage.setItem('token', result.token);
        navigate(`/users`);
        console.log("Result is ", result.token)
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
