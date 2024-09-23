import React, { useState } from 'react'
import Logo from '../../assets/logo.gif.gif';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'; 

const Nav = () => {


  const [Mobile , setMobile] = useState(false)



  const h1Style = {
    fontFamily: "'Acme', sans-serif, 'Dancing Script', cursive, 'Heebo', sans-serif, 'Nosifer', sans-serif, 'Poppins', sans-serif",
    fontWeight: 500, 
    fontSize: '40px', 
  };
  
  const unorderStyle ={
    fontFamily: "'Acme', sans-serif, 'Dancing Script', cursive, 'Heebo', sans-serif, 'Nosifer', sans-serif, 'Poppins', sans-serif, 'Roboto Condensed', sans-serif",

  }
  

  return (
   <div>
    <div style={{ background: '#58ad6c', padding: 5}}>
      <div className="text-center flex justify-center space-x-3">
        <h1 className="text-center text-white font-extrabold" style={h1Style}>Glowly</h1>
        <img src={Logo} alt='logogif' className="w-20% h-14 " />
      </div>
      <div className='nav-container'>
        <div className="unorderdlist">
        <ul  style={unorderStyle} className= {Mobile ? 'nav-links-mobile' : 'nav-links'} onClick ={() => setMobile(false)}>
          <Link to = '/'><li>Home</li></Link> 
          <Link to = '/about'><li>About</li></Link> 
          <Link to = '/all-products'><li>Products</li></Link> 
          <li>Contact</li>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ?  <ClearIcon/> : <MenuIcon/>}
        </button>

        </div>
        <div className='main-icons'>
           <Link to = '/signup'><PermIdentityRoundedIcon /></Link> 
           <Link to = '/cart'>  <ShoppingBagOutlinedIcon /></Link> 
          </div>
      </div>
      </div>
    </div>
  );
};

export default Nav;

