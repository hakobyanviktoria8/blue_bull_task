import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchUserData } from '../app/action';

export const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchByIdName, setSearchByIdName] = useState("name")
    const usersData = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const [message, setMessage] = useState("")

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    const handleChangeRadio = (e: any) => {
        setSearchByIdName(e.target.value)
    }
    
    const handleSearchUser = async (e: any) => {
        e.preventDefault();
        console.log(searchByIdName);
      
      let user = usersData?.filter((user: any) => user[searchByIdName] === searchValue)   
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
            <div className='useFilter' >
                Filter by:
                <label>Id <input checked={searchByIdName === "_id"}  type="radio" name="filterData" value="_id" onChange={handleChangeRadio} /></label> 
                <label>Name <input checked={searchByIdName === "name"}  type="radio" name="filterData" value="name" onChange={handleChangeRadio} /></label> 
            </div> 
            <div>
                <input placeholder='Search user by name' value={searchValue} onChange={handleChange} />
                <input type="submit" value="Find user" className='searchBtn' />
            </div>                          
        </form>
        <p className='messageText'>{message}</p>
    </>
  )
}

