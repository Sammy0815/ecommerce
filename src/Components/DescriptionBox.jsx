import './DescriptionBox.css'
import { useState } from 'react'


export default function DescriptionBox(){
    const [isOpen, setIsOpen] = useState({desc:true, review:false});
    
    function openDesc(){
        setIsOpen({desc: true, review:false});
    }
    function openReview(){
        setIsOpen({desc: false, review:true});
    }
    return (
        <div className='description-box'>
            <div className='description-nav'>
               <div className={isOpen.desc ? "tab-active" : "tab"} onClick={()=>openDesc()}>Description</div>
               <div className={isOpen.review ? "tab-active" : "tab"} onClick={()=>openReview()}>Reviews (122)</div> 
            </div>
            {
            isOpen.desc && 
            <div className='description'>
               <p>
                   An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence. E-commerce website have gained immense popularity due to their convenience accessility and the global reach they offer. 
                </p>
               <p>
                   E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations. Each product usually has its own dedicated page with relevant information.
               </p>
            </div>
            }
            {
            isOpen.review &&
            <div className='review'>
                Reviews unavailable at the moment
            </div>
            }
            
  
        </div>
    )
}