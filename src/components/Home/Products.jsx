import React from 'react'
import pro1 from '../../assets/pro1.webp'
import model4 from '../../assets/model4.jpg'
import model from '../../assets/model2.jpg'
import OurCollection from './OurCollection'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Products = () => {
  return (
 <>
{/*-----This is a product1-container----*/}
    <div className='product1-main-container'>
        <div className='product1-left-container'>
            <div  className = "product1-styles" style={{color : "white" , fontWeight: "bold"}}>
            <h1>Something Special for Your Skin</h1>
            <p  style = {{ fontSize : "30px"}}>Shop our limited time holiday gifts</p>
            <button className = 'product1-btn ' style = {{fontSize : "19px"}}
             onClick={() => window.location.href = '/all-products'}>SHOP NOW</button>
            </div>
        </div>
        <div  className='product1-right-container'>
            <img src = {pro1} alt = 'product1-img' className='product1-img' />
        </div>
    </div>


{/*-----This is a product2-container----*/}

     <div className='product2-main-container'>
       <div  className='product2-right-container'>
          <img src ={model4} alt = 'models' className='product2-img'/>
       </div>
       <div className='product2-left-container'>
         <div  className = "product2-styles" style={{color : "black" , fontWeight: "bold"}}>
          <h1>NEW SEASON,SAME GREAT SKIN</h1>
          <p style = {{ fontSize : "20px"}}>100% mineral Block Star keeps you sun-safe year-round</p>
          <button className = 'product1-btn ' style = {{fontSize : "19px"}}
           onClick={() => window.location.href = '/all-products'}>SHOP NOW</button>
         </div>
       </div>
     </div>

    {/*-----This is a  some-products-cards----*/}

     <OurCollection/>

     {/*-----This is a product4-container----*/}
     <div className='product3-main-container'>
     <div className='product3-left-container'>
         <div  className = "product3-styles" style={{color : "black" , fontWeight: "bold"}}>
          <h1 style = {{color : "white",}}>CLEAN, CRUELTY-FREE SPA-POWERED SKINCARE</h1>
          <p style = {{ fontSize : "15px" , fontFamily : "monospace",margin: "20px" , color: "white"}}>We are a clean, cruelty-free, planet-friendly skincare brand that delivers transformative, dermatologist-tested products for total skin happiness.</p>
          <button className = 'product1-btn ' style = {{fontSize : "19px"}}
           onClick={() => window.location.href = '/all-products'}>FIND NARGO NEAR YOU</button>
         </div>
       </div>
       <div  className='product3-right-container'>
         <img src = {model} alt = 'model2'/>
       </div>
     </div>

     {/*-----connect with social----*/}
     <div className='connect-container'>
  <h1>GET SOCIAL @NARGO</h1>
  <p>Your Daily Dosa Of happiness, unfiltered</p>
  <div className='connect-container1'>
      <h3>Free Shipping on orders $40+</h3>
      <MoreVertIcon />
      <h3>We ship internationally</h3>
  </div>
</div>

    </>
  )
}

export default Products
