import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'
import Card from './Card'
import {CgNotes} from 'react-icons/cg'
import {RiDeleteBin5Fill} from 'react-icons/ri'
const Body = ({setOpen,Notes,showIcons,aulterNotes}) => {
    return (
        <>
            <div className='flex'>
                <div className='h-screen'>
                    <ul className='flex flex-col'>
                        <li className={`hover:bg-green-50 gap-6 flex items-center ${showIcons?"rounded-full w-14 h-10 justify-center":"rounded-r-3xl h-10 px-5 w-56"}`}>
                            <CgNotes className='text-base'/>
                            <span className={`${showIcons?"hidden":"block"}`}>Note</span>
                        </li>
                        <li className={`hover:bg-green-50 gap-6 flex items-center ${showIcons?"rounded-full w-14 h-10 justify-center px-3":"rounded-r-3xl h-10 px-5 w-56"}`}>
                            <RiDeleteBin5Fill className='text-base'/>
                            <span className={`${showIcons?"hidden":"block"}`}>Bin</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full px-16 py-12">
                <ul className='m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-auto gap-y-14 justify-center'>
                    {
                        Notes?.map(({title,Description,id, color})=><Card key={id} title={title} Description={Description} bg_color={color} id={id} Notes={Notes} aulterNotes={aulterNotes}/>
                        )             
                    }
                </ul>
                </div>
                <div className="right-12 bottom-12 fixed"  onClick={()=>setOpen(true)}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon/>
                    </Fab>
                </div>
            </div>
        </>
    );
}

export default Body;
