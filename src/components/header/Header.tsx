import { Link } from "react-router-dom"
import { logOutApi } from '../../api';
import { useNavigate } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const token = localStorage.getItem('token');

    try {
      const res = await logOutApi(token)
      const result = await res.json()
      // console.log("Result is ", result)
    } catch (error) {
      localStorage.removeItem('token');
      navigate(`/`);
      console.log("Error message is", error); 
    }
  }  

  return (
    <div className="header">
      <Link to = "/">Home</Link>
      <button onClick = { handleLogOut }>Logout</button>
    </div>
  )
}
