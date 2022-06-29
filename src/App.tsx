import { useState } from 'react';
import './App.scss';

function App() {
  const [formData, setFormData] = useState({email: '', password: ''})

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
       ...formData,
       [name]: value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("formData",formData);    
  }

  return (
    <div className="app">
      <div className='formWrapper'>
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
              />
            </label>
            <input 
              type="submit" 
              value="Log in" 
              className='logInButton'
            />
          </form>
        </div>
    </div>
  );
}

export default App;
