import { useState, useContext } from "react";
import { LOGO_URL } from "../Utilities/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import userContext ,{uLogIn}from "../Utilities/UserContext";

// first component Header
//-logo ,nav items (home,about,contact,cart)
import LogIn from "./LogIn";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import Body from "./Body";
const Header = () => {
  let [btn_name, setbtn_name] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  const [theme, settheme] = useState("white");
  const [darkMode, setDarkMode] = useState("🌞");
  const [userLogIn, setUserLogIn] = useState(false);

  const { loggedInUser } = useContext(userContext);
  // const  {loggedIn}  = useContext(uLogIn);
  // const { setuserLog, loggedIn } = useContext(uLogIn);
  //   console.log(loggedIn,loggedInUser);

    // setuserLog(true)

  // subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //    console.log(cartItems);
  const SignIn = (btn_name) => {
    btn_name === "Log In" ? setbtn_name("Log Out") : setbtn_name("Log In");
    const c = btn_name === "Log In" ? true : false;
    setUserLogIn(c);
  };
  return (
    <div className="flex justify-between bg-purple-600 h-24 m-2 shadow-xl">
      <div className="logo-container" data-testid="logo">
        <img className="w-36 h-24" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center ">
        <ul className="flex ">
          {/* <li>Online Status:{onlineStatus ? "✅" : "🔴"}</li> */}
          <button
            className="px-3 text-emerald-50	"
            onClick={() => {
              theme == "white"
                ? settheme((document.body.style.background = "orange"))
                : settheme((document.body.style = "white"));
              console.log(theme);
              darkMode === "🌚" ? setDarkMode("🌞") : setDarkMode("🌚");
            }}
          >
            {" "}
            {darkMode}
          </button>
          <li className="px-3 hover:bg-white hover:rounded-lg">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-3  hover:bg-white hover:rounded-lg">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="px-3  hover:bg-white hover:rounded-lg">
            <Link to="/contact">CONTACT</Link>
          </li>
          {/* <li className="px-3  hover:bg-white hover:rounded-lg">
            <Link to="/grocery">Grocery</Link>
          </li> */}

          <li className="px-3  hover:bg-white hover:rounded-lg">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <li className="px-3  hover:bg-white hover:rounded-lg">
            {/* <Link to={'./LogIn'}> */}
            <Button
              onClick={() => {
                SignIn(btn_name);
              }}
            >
              {btn_name} <span className="">{onlineStatus ? "🟢" : "🔴"}</span>
            </Button>
           
            {/* </Link> */}
          </li>
          {/* <li className="px-3">{loggedInUser}</li> */}
        </ul>
      </div>
      { userLogIn && <LogIn show={userLogIn}/>}
    </div>
    
  );
};

//export must be last in code because we can't access before initialization
export default Header;
