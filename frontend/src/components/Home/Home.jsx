import React from 'react'
import "./Home.css"
import mainImage from "../../assets/images/mainImage.jpg"

const Home = () => {
  return (
    <div className="Home">
        <div className="homeLeft">
            <img src={mainImage}/>
        </div>
        <div className='homeRight'>
            <p>Hello <hl>Viewer</hl>,<br/>
            Thank for visit to my portfolio.<br/>
            My name is <hl>Thu Rain</hl> and<br/>
             I'm 18 years old <br/>
            FullStack Web devloper ;-)
            </p>
        </div>
    </div>
  )
}

export default Home
