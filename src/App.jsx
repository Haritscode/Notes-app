import { useState,useEffect} from "react";
import AddCard from "./Components/AddCard";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { getDataFromLS } from "./utils/helpers";
function App() {
  const[open,setOpen]=useState(false);
  const [Notes,setNotes]=useState(()=>getDataFromLS());
  const [filterNotes,setFilterNotes]=useState(Notes);
  const [showIcons,setshowIcons]=useState(true);
  useEffect(()=>{
    setFilterNotes(Notes);
    localStorage.setItem("data",JSON.stringify(Notes));
  },[Notes])
  return (
    <>
      <div>
          <Navbar setshowIcons={setshowIcons} showIcons={showIcons} setfilteredNotes={setFilterNotes} Notes={Notes}/>
          <Body setOpen={setOpen} Notes={filterNotes} showIcons={showIcons} aulterNotes={setNotes}/>
          {open?<AddCard open={open} setOpen={setOpen} AddNotes={setNotes} Note={Notes}/>:""}

          {/* Mounting all colors so that tailwindcss builds them */}
          <div className="bg-#001219 hidden" />
          <div className="bg-#005f73 hidden" />
          <div className="bg-#0a9396 hidden" />
          <div className="bg-#94d2bd hidden" />
          <div className="bg-#e9d8a6 hidden" />
          <div className="bg-#ee9b00 hidden" />
          <div className="bg-#ca6702 hidden" />
          <div className="bg-#bb3e03 hidden" />
          <div className="bg-#ae2012 hidden" />
          <div className="bg-#9b2226 hidden" />
      </div>
    </>
  );
}

export default App;
