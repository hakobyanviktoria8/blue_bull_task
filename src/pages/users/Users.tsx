import { Header } from '../../components/Header';
import './users.scss';
import { useSelector } from 'react-redux';
import { Search } from '../../components/Search';
import { User } from '../../components/User';

const Users = () => {
  const usersData = useSelector((state: any) => state)
  console.log("Store Users data", usersData);

  return (
    <div className="users">
      <Header />
      <div className="mainContent">
        <Search />
        <h2>Users list</h2>
        <div className="usersCartWrapper">
          {
            usersData?.map((user: any)=>
              <User user={user} key={user._id}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Users