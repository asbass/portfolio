import "./FooterStyles.css"
import {FaHome,FaMailBulk,FaPhone} from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>36/37/8/1 street 4,sub-quarter 6</p>
                    <p>,Ward hiep binh phuoc,district thu duc</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    0906964598
                    </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    buitantai2704@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About my self</h4>
                <p>hello, I'm bui tan tai.i'm a student at college fpt polytechnic and graduated with GPI 8.3. I like playing game and code</p>
            </div>

        </div>
    </div>
  )
}

export default Footer