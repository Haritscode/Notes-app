import React,{useState,useRef,useEffect} from 'react';
import {BiSearchAlt2} from 'react-icons/bi'
const Navbar = ({setshowIcons,showIcons,setfilteredNotes,Notes}) => {
    const [search, setSearch] = useState("");
    const ref=useRef(null);
    let searchText=(e)=>{
        setSearch(e.target.value)
    }
    let focusInput=()=>{
        ref.current.focus();
    }
    useEffect(()=>{
        let result=Notes.filter(text=>{
            if(text.title.includes(search) || text.Description.includes(search))
            {
                return text;
            }
        })
        setfilteredNotes(result);
    },[search])
    return (
        <>
        <div className='px-2 my-2 flex items-center'>
            <div className='flex gap-4 items-center'>
                <div className='flex flex-col gap-0.5 rounded-full w-fit hover:bg-gray-200 p-3' onClick={()=>setshowIcons(!showIcons)}>
                    <span><hr className='border-t-2 border-gray-600 w-4 rounded-lg'/></span>
                    <span><hr className='border-t-2 border-gray-600 w-4 rounded-lg'/></span>
                    <span><hr className='border-t-2 border-gray-600 w-4 rounded-lg'/></span>
                </div>
                <div className='flex items-center'>
                    <img src="./unnamed.png" alt="none" width={35} className="mx-2 rounded-full"/>
                    <h2 className='text-xl font-normal text-gray-600'>Notes</h2>
                </div>
            </div>
            <div className='w-1/2 flex items-center relative'>
                <BiSearchAlt2 className='absolute left-1 mx-12 hover:bg-slate-300 rounded-full p-1 text-3xl hover:cursor-pointer z-10' color='gray' onClick={focusInput} />
                <input className="md:w-96 outline-none p-2 pl-10 pr-6 rounded-lg mx-12 bg-gray-100 focus:border-2 focus:shadow-sm focus:shadow-gray-600 focus:bg-white" type="text" value={search} onChange={searchText} placeholder="Search" ref={ref}/>
            </div>
        </div>
        </>
    );
}
export default Navbar;
