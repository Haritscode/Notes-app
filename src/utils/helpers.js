export const getDataFromLS=()=>{
    let data=localStorage.getItem("data")
    if(data)
    {
        return JSON.parse(data);
    }
    else{
        return [];
    }
}