import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchUserData } from '../app/action';

export const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const usersData = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }
  
    const handleSearchUser = async (e: any) => {
      e.preventDefault();
      let user = usersData?.filter((user: any) => user.name === searchValue)   
      if(user[0] === undefined){
        dispatch(searchUserData([]));
        setMessage("User not found!")       
      } else {
        dispatch(searchUserData(user));
        setMessage(`Found ${user.length} user!`) 
      }        
    }  

  return (
    <>
        <form onSubmit={handleSearchUser}>          
            <input placeholder='Search user by name' value={searchValue} onChange={handleChange} />
            <input type="submit" value="Find user" className='searchBtn' />            
        </form>
        <p className='messageText'>{message}</p>
    </>
  )
}

