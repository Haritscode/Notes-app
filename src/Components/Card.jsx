import React,{useState} from 'react';
import {RiDeleteBin6Line} from 'react-icons/ri'
import { CirclePicker } from 'react-color';
import { EditCard } from './EditCard';
import {IoColorPaletteOutline} from 'react-icons/io5'
import { colors } from '../utils/colors';

function wc_hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 170;
}

const Card = ({title,Description,id,bg_color,Notes,aulterNotes}) => {
    const [open, setOpen] = React.useState(false);
    const [showColorPicker,setShowColorPicker]=useState(false);
    const deleteNote=(uid)=>{
        let data=Notes.filter(({id})=>{
            return uid!==id;
        })
        aulterNotes(data);
    }
    const handleChangeComplete = (color) => {
        setShowColorPicker(false)
        aulterNotes([...Notes.map(note => {
            if (note.id === id) {
                return ({
                    ...note,
                    color: color.hex
                })
            }
            return note;
        })])
      };
    const handleOpen = () => setOpen(true);
    return (
        <>
        <div className={`flex flex-col ${wc_hex_is_light(bg_color) ? 'text-black' : 'text-white'} `}>
            <div className='relative w-56 h-fit p-0 lg:w-52 xl:w-56'>
                <div className={`bg-${bg_color} px-4 py-4 pb-10 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out flex flex-col gap-4 z-10`} onClick={handleOpen}>
                    <h1 className='text-lg font-medium overflow-hidden'>{title}</h1>
                    <p className='text-base font-normal overflow-auto scroll-m-6'>{Description}</p>
                </div>  
                <div className='flex justify-end gap-2 z-20 absolute bottom-2 right-3'>
                    <IoColorPaletteOutline onClick={()=>setShowColorPicker(!showColorPicker)}/>
                    <RiDeleteBin6Line className="cursor-pointer" onClick={()=>deleteNote(id)}/>
                </div>
            </div>
            <div className={`relative left-12 w-fit px-2 py-2 shadow-xl rounded-lg ${showColorPicker?"opacity-100 translate-y-0.5 scale-100 rotate-0":"opacity-0 scale-0 -translate-y-8 -rotate-12"} transition-all ease-linear duration-200 translate-x-3`}>                
                <CirclePicker circleSize={12} width="180px" circleSpacing={0} onChangeComplete={handleChangeComplete } colors={colors}
/>
            </div>
            </div>
            <EditCard open={open} setOpen={setOpen} title={title} Description={Description} aulterNotes={aulterNotes} Notes={Notes} id={id}/>
        </>
    );
}

export default Card;
