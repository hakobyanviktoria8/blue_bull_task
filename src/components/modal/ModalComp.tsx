import { IconButton, Modal, Typography, Box, Button, Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './modalComp.scss';
import { useState } from 'react';
import { updateUserDataApi } from "../../api";
import { setUsersData } from './../../app/action';
import { useDispatch } from "react-redux";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalComp({open, setOpen, user}: any) {
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const[formData, setFormData] = useState<{
    name: string; 
    language_id: number; 
    min_bet: number; 
    max_bet: number; 
    user_level: string;
    password: string;
    password_confirmation: string;
  }>({
    name: user.name,
    language_id: user.language_id,
    min_bet: user.min_bet,
    max_bet: user.max_bet,
    user_level: user.user_level,
    password: user.password,
    password_confirmation: user.password_confirmation,
  }); 

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
   })
  }
  const handleClick = async (e: any) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    // console.log("form Data is a ",formData)
    try {
      if(token){
        const res = await updateUserDataApi(token, user._id, formData)
        const result = await res.json()
        // console.log("Update user data is ", result)
        handleClose()
        dispatch(setUsersData([result]));
      }
    } catch (error) {
      console.log("Error message is 1111", error);      
    }
  } 

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='modalComp'
    >
      <Box sx={style}>
        <IconButton onClick={ handleClose }>
          <CloseIcon />
        </IconButton>
        <Typography id="modal-modal-title" variant="h6" component="h2">Update user data</Typography>
        <Input  onChange={handleChange} type='text' placeholder="Name" name="name" />
        <Input  onChange={handleChange} type='number' placeholder="Language id" name="language_id" />
        <Input  onChange={handleChange} type='number' placeholder="Min bet" name="min_bet" />
        <Input  onChange={handleChange} type='number' placeholder="Max bet" name="max_bet" />
        <Input  onChange={handleChange} type='text' placeholder="User level" name="user_level" />
        <Input  onChange={handleChange} type='password' placeholder="Password" name="password" />
        <Input  onChange={handleChange} type='password' placeholder="Password confirmation" name="password_confirmation" />
        <Button className='updateBtn' onClick={handleClick}>Update Data</Button>
      </Box>
    </Modal>
  );
}