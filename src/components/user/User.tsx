import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import { userDetail } from "../../api";
import "./user.scss";

export const User = ({user}: any) => {
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      if(token){
        const res = await userDetail(token, user._id)
        const result = await res.json()
        console.log("Result user is ", result)
        navigate(`/users/${user._id}`);
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
    </div>
  )
}
