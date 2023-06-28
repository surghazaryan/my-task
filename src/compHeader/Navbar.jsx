import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";

const Navbar = () => {
    const [open,setopen] = useState(false)
    const closeIcon = <AiOutlineClose className='icon-close'onClick={()=>{setopen(!open)}}/>
    const openIcon = <AiOutlineMenu onClick={()=>{setopen(!open)}}/>

  return (
    <>
      <nav>
        <div className="parent-ul">
          <ul className={open?'menu-mobile':'navbar-ul'}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Conact</Link>
            </li>
            <li>
              <Link to="/">Galery</Link>
            </li>
          </ul>
          <div className="icon-menu">
            {open?closeIcon:openIcon}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
