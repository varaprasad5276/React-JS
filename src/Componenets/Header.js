import { LOGO_URL } from "../Utilities/constants";

// first component Header 
//-logo ,nav items (home,about,contact,cart)

 const Header=()=>{
    return(
<div className="header">
    <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        </div>

    <div className="nav-items">
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CART</li>
        </ul>
    </div>
</div>
    );
};

//export must be last in code because we can't access before initialization
export default Header;
