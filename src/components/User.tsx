export const User = ({user}: any) => {
  return (
    <div key={user._id} className="userCart">
      <h3>{user.name}</h3>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Bonus:</b> {user.active_bonus}</p>
      <p><b>Balance:</b> {user.balance}</p>              
    </div>
  )
}
