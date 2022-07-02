// import { Link } from "react-router-dom";
import "./user.scss";
import { useNavigate } from "react-router";
import { userIdApi } from "../../api";

export const User = ({user}: any) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      if(token){
        const res = await userIdApi(token, user._id)
        const result = await res.json()
        // console.log("Result user is ", result)
        navigate(`/users/${result._id}`);
      }
    } catch (error) {
      console.log("Error message is", error);      
    }
  }  

  return (
    <div key={user._id} className="userCart">
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Bonus:</b> {user.active_bonus}</p>
      <p><b>Balance:</b> {user.balance}</p> 
      <button onClick={handleSubmit}>See User Details</button>
      {/* another way */}
      {/* <Link to={`/users/${user._id}`}>See User Details</Link> */}
    </div>
  )
}
