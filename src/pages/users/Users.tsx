import './users.scss';
import { useSelector } from 'react-redux';
import { Search } from '../../components/Search';
import { User } from '../../components/user/User';
import { Layout } from '../../components/Layout';

const Users = () => {
  const usersData = useSelector((state: any) => state)
  // console.log("Store Users data", usersData);

  return (
    <Layout>
      <div className="users">
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
    </Layout>
  )
}

export default Users