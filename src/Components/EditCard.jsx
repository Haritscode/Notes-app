import React, { useState } from 'react'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export const EditCard = ({open,setOpen,title,Description,aulterNotes,Notes,id}) => {
  const [Title,setTitle]=useState(title);
  const [description,setdescription]=useState(Description)
  const handleClose = (Uid) =>{
    let data=Notes.map(obj=>obj.id===Uid?{...obj,title:Title,Description:description}:obj)
    aulterNotes(data);
    setOpen(false); 
  }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        borderRadius:"7px",
        p: 4,
        display:"flex",
        flexDirection:"column",
      };      
  return (
    <>
      <Modal
        open={open}
        onClose={()=>handleClose(id)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField id="standard-basic" variant="standard" InputProps={{ disableUnderline: true,style:{fontSize:30}}} value={Title} onChange={e=>setTitle(e.target.value)}/>
          <TextField  id="standard-multiline-static" variant="standard" InputProps={{ disableUnderline: true}} value={description} multiline onChange={e=>setdescription(e.target.value)}
          rows={4}/>
        </Box>
      </Modal>
    </>
  )
}
