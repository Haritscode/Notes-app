import React,{useState} from 'react';
import Box from '@mui/material/Box'
import Button from "@mui/material/Button"
import Modal  from '@mui/material/Modal';
import TextField from '@mui/material/TextField'
import uuid from 'react-uuid'
import { colors } from '../utils/colors';
import { Notes } from '@mui/icons-material';
const AddCard = ({open,setOpen,AddNotes,Note}) => {
    const initialState={
        title:"",
        Description:"",
        id:""
    }
    const [note,setnote]=useState(()=>initialState)
    const [isValid,setisValid]=useState(true);
    const [isDuplicatetitle,setisDuplicatetitle]=useState(false);
    const [isDescriptionRequired,setisDescriptionRequired]=useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p:4,
      };
      const AddNote=()=>{
        if(note.title!=="")
        {
            if(Note.find(({title})=>note.title===title))
            {
                setisDuplicatetitle(true);
            }
            else{
                if(note.title.length<=10 && note.Description==="")
                {
                    setisDescriptionRequired(true);
                }
                else{
                    if (Note) {
                        AddNotes([...Note,{...note,id:uuid(), color: colors[Math.floor(Math.random() * colors.length)]}])
                        setOpen(false); 
                    }
                }
            }
        }else{
                setisValid(false);
            }
        }
        return (
        <>
            <Modal
            open={open}
            onClose={()=>setOpen(false)}>
                <Box sx={style} className='flex flex-col gap-12'>
                    <span className={`text-red-600 text-center ${isDuplicatetitle?"block":"hidden"}`}>Title of this Note is already Present</span>
                    <div className="flex flex-col gap-6">
                        <div className='flex flex-col'>
                        <TextField id="standard-basic" label="Title" variant="standard" onChange={e=>{
                            setnote({...note,title:e.target.value})
                            setisValid(true)
                            setisDuplicatetitle(false)
                            }} value={note.title} focused={true} required/>
                        <p className={`text-red-600 ${isValid?"hidden":"block"}`}>Title already added</p>
                        </div>
                        <div className='flex flex-col'>
                        <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={2}
                        variant="filled"
                        onChange={e=>{
                            setnote({...note,Description:e.target.value})
                            setisDescriptionRequired(false)
                            }} value={note.Description}/>
                        <p className={`text-red-600 ${isDescriptionRequired?"block":"hidden"}`}>Discription is required for title less then 10 characters</p>
                        </div>
                    </div>
                    <Button variant="outlined" className='w-fit' onClick={AddNote}>ADD NOTE</Button>
                </Box>
            </Modal>  
        </>
    );
}

export default AddCard;
