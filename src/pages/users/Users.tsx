import { Header } from '../../components/Header';
import './users.scss';
import { useSelector } from 'react-redux';

const Users = () => {
  const usersData = useSelector((state: any) => state)
  console.log("Store Users data", usersData);

  return (
    <div className="users">
      <Header />
      <div className="mainContent">
        <h2>Users list</h2>
        <div className="usersCartWrapper">
          {
            usersData?.map((user: any)=>
              <div key={user._id} className="userCart">
                <h3>{user.name}</h3>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>Bonus:</b> {user.active_bonus}</p>
                <p><b>Balance:</b> {user.balance}</p>              
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Users