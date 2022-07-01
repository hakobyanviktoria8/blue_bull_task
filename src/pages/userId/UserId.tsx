import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Layout } from "../../components/Layout";
import './userId.scss';

export const UserId = () => {
    const params = useParams();
    const userId = params.userId;
    const usersData = useSelector((state: any) => state)
    let user = usersData?.filter((user: any) => user._id === userId)[0]      
  return (
    <Layout> 
        <div className="userId">
            <h3>{user.name}</h3>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Bonus:</b> {user.active_bonus}</p>
            <p><b>Balance:</b> {user.balance}</p> 
            <p><b>Master:</b> {user.master}</p> 
            <p><b>Verification:</b> {user.verification}</p> 
        </div>
    </Layout>
  )
}
