import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Testimonials = () => {
  return (
     <div className='testmonials-container'>
        <div className='testmonials'>
            <div className='shopings'>
                <ul>
                    <h1 style={{fontWeight:"bold"}}>QUICK_SHOP</h1>
                    <li>skinCare</li>
                    <li>Mackup-Products</li>
                    <li>LipCare</li>
                    <li>Serems</li>
                </ul>

                <ul>
                <h1  style={{fontWeight:"bold"}}>COMPANY</h1>
                    <li>About</li>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Privacy Policy</li>
                    <li>Terms&Condiitions</li>
                    <li>Accessibility Statement</li>
                </ul>
            </div>

            <div className='stay-touch'>
              <h1  style={{fontWeight:"bold"}}>STAY IN TOUCH</h1>
              <p>Sign up for our newsletter to recieve 20% off your first order!</p>
              <div>
                 <input type= 'text' name = 'sumbit' placeholder='Text here...'/>
                 <button style={{border:'solid 1px ', backgroundColor : "gray",margin:'5px', padding:"1px"}}>Submit</button>
              </div>
            </div>
        </div>
      <div style = {{display : "flex" , justifyContent : "center", gap : "100px", flexDirection : "row", marginTop: "40px" , color : "gray"}}>
            <h5>@Glowly World Store</h5>
            <div>
            <InstagramIcon/>
            <FacebookIcon/>
            <YouTubeIcon/>
            <PinterestIcon/>
            <MailOutlineIcon/>
         </div>
      </div>
     </div>
  )
}

export default Testimonials
