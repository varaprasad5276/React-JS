import { useState } from "react";
import { LOGO_URL } from "../Utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

// first component Header 
//-logo ,nav items (home,about,contact,cart)
import LogIn from "./LogIn";
 const Header=()=>{
  let [btn_name,setbtn_name]=useState('Log In');
  const onlineStatus=useOnlineStatus();
  let [theme,settheme]=useState('white');

    return(
<div className="flex justify-between bg-purple-600 h-24 m-2 shadow-xl">
    <div className="logo-container">
        <img className="w-36 h-24" src={LOGO_URL} />
        </div>

    <div className="flex items-center ">
      
        <ul className="flex ">
            <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
            <button className="px-3 text-emerald-50	"
            onClick={()=>{
                theme=='white' ? settheme(document.body.style.background = 'orange') : settheme(document.body.style = 'white');
                console.log(theme);
            }}
            >THEME</button>
            <li className="px-3"><Link to='/'>HOME</Link></li>
            <li className="px-3"><Link to='/about'>ABOUT</Link></li>
            <li className="px-3"><Link to='/contact'>CONTACT</Link></li>
            <li className="px-3"><Link to='/grocery'>Grocery</Link></li>

            <li className="px-3"><Link to='/cart'>CART</Link></li>
          <li className="px-3"> <Link to={'./LogIn'}> LOG IN</Link></li>
        </ul>
    </div>
</div>
    );
};

//export must be last in code because we can't access before initialization
export default Header;
