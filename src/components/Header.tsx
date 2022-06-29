import { Link } from "react-router-dom"
import { logOutApi } from './../api';

export const Header = () => {
  // generate token and give logOutApi
  
  return (
    <div className="header">
      <Link to = "/">Go Back</Link>
      <button onClick = { logOutApi }>Logout</button>
    </div>
  )
}
