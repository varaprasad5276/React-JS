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
<div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        </div>

    <div className="nav-items">
      
        <ul>
            <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li>
            <button className="theme"
            onClick={()=>{
                theme=='white' ? settheme(document.body.style.background = 'orange') : settheme(document.body.style = 'white');
                console.log(theme);
            }}
            >THEME</button>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            <li><Link to='/grocery'>Grocery</Link></li>

            <li><Link to='/cart'>CART</Link></li>
          <li> <Link to={'./LogIn'}> LOG IN</Link></li>
        </ul>
    </div>
</div>
    );
};

//export must be last in code because we can't access before initialization
export default Header;
