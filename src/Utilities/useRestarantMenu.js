import { useEffect, useState } from "react"
import { MENU_API } from "./constants";

const useRestarantMenu=(resid)=>{
    const [menu,setmenu]=useState(null);
    useEffect(()=>{
     fetchData();
    },[]);
    
    const fetchData=async()=>{
        const data= await fetch(MENU_API+resid);
        // console.log(data);
        const json= await data?.json();
        setmenu(json?.data);
        // console.log(json.data);
    }
    return menu;
}

export default useRestarantMenu;