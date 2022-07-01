import { useState } from 'react';
import { useSelector } from 'react-redux';
import { User } from './user/User';

export const Search = () => {
    const [searchValue, setSearchValue] = useState("")
    const [searchByIdEmail, setSearchByIdEmail] = useState("email")
    const usersData = useSelector((state: any) => state)
    const [message, setMessage] = useState("")
    const [findUser, setFindUser] = useState(null)

    const handleChange = (e: any) => {
        setSearchValue(e.target.value)
    }

    const handleChangeRadio = (e: any) => {
        setSearchByIdEmail(e.target.value)
    }
    
    const handleSearchUser = async (e: any) => {
        e.preventDefault();      
      let user = usersData?.filter((user: any) => user[searchByIdEmail] === searchValue)   
      if(user[0] === undefined){
        setFindUser(null)
        setMessage("User not found!")       
      } else {
        setFindUser(user)
        setMessage(`Found ${user.length} user!`) 
      }        
    }  

  return (
    <>
        <form onSubmit={handleSearchUser}> 
            <div className='useFilter' >
                Filter by:
                <label>Id <input checked={searchByIdEmail === "_id"}  type="radio" name="filterData" value="_id" onChange={handleChangeRadio} /></label> 
                <label>Email <input checked={searchByIdEmail ==="email"}  type="radio" name="filterData" value="email" onChange={handleChangeRadio} /></label> 
            </div> 
            <div>
                <input placeholder='Search user by name' value={searchValue} onChange={handleChange} />
                <input type="submit" value="Find user" className='searchBtn' />
            </div>                          
        </form>
        <p className='messageText'>{message}</p>
        {findUser && <User user={findUser[0]}/>}
    </>
  )
}

