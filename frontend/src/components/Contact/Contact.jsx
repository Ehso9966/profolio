import React from 'react'
import "./Contact.css"
import facebook_icon from "../../assets/images/facebook_icon.jpg"
import github_icon from "../../assets/images/github_icon.png"
import phone_icon from "../../assets/images/phone_icon.jpg"
import gmail_icon from "../../assets/images/gmail_icon.jpg"

const Contact = () => {
  return (
    <div className='Contact'>
      <div className='contactTop'>
        <p>If you want to <hl>hire me</hl> contact from </p>
      </div>
      <div className='contactBottom'>
        <div className='phoneNum'><img src={phone_icon}/><a>+959 764108427</a></div>
        <div className='gmail'><img src={gmail_icon}/><a>paypaleh9966@gmail.com</a></div>
        <a href='https://www.facebook.com/profile.php?id=100081501368064&mibextid=ZbWKwL' className='link'><div className='facebook'><img src={facebook_icon}/>Saw Thu Rain</div></a>
        <a href='https://github.com/Ehso9966' className='link'><div className='github'><img src={github_icon}/>Saw Thu Rain</div></a>
      </div>
    </div>
  )
}

export default Contact
