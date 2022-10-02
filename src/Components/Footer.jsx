import React from 'react'

const Footer = () => {
    return (
        <div style={{display:"flex",margin:"auto",justifyContent:"space-evenly",backgroundColor:"rgb(230,240,254)",marginTop:"50px",paddingTop:"70px",paddingBottom:"70px"}}>
            <div>
                <h1 style={{ color: "rgb(11,53,88)",fontSize:"50px" }}>Easy <br /> <span style={{ color: "rgb(0,107,255)" }}>ahead</span></h1>
                <p style={{color:"rgb(71,103,136)",fontSize:"20px"}}>We take the work out of connecting with <br /> others so you can accomplish more.</p>
                <select style={{width:"200px",fontSize:"20px",border:"transparent",height:"40px"}}>
                    <option>English</option>
                    <option>French</option>
                    <option>Portuguese</option>
                    <option>Dutch</option>
                    <option>Scottish</option>
                </select>
            </div>
            <div>
                <h3>About</h3>
                <p>About Calendly</p>
                <p>Contact Us</p>
                <p>Newsroom</p>
                <p>Careers </p>
                <p>Security</p>
                <h3>Support</h3>
                <p>Help Center</p>
                <p>Video Tutorials</p>
                <p>Cookie Setting</p>
            </div>
            <div>
                <h3>Solutions</h3>
                <p>Customer Success</p>
                <p>Sales</p>
                <p>Recruiting</p>
                <p>Information TechnologyMarketing</p>
                <p>Marketing</p>
                <h3>Add-Ons</h3>
                <p>Download for Chrome</p>
                <p>Download for Firefox</p>
            </div>
            <div>
                <h3>Popular Features</h3>
                <p>Embed Calendly</p>
                <p>Availability</p>
                <p>Sending Notification</p>
                <p>Using Calendly Mobile</p>
                <h3>Developers</h3>
                <p>Developer Tools</p>
            </div>
        </div>
    )
}

export default Footer