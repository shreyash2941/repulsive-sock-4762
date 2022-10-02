import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { path: "/", title: "Home" },
    { path: "/indeviduals", title: "Indeviduals" },
    { path: "/teams", title: "Teams" },
    { path: "/enterprice", title: "Enterprice" },
    { path: "/product", title: "Product" },
    { path: "/pricing", title: "Pricing" },
    { path: "/resourse", title: "Resourse" },

    { path: "/login", title: "Log In" },
    { path: "/getstarted", title: "Get Started" },
];



const Navbar = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "80%",
                margin: "auto",
                backgroundColor:"rgb(226,242,255)",
                paddingTop:"20px",
                paddingBottom:"30px"
            }}
        >
            {links.map((link) => (
                <NavLink style={{color:"black",fontWeight:"500",}}
                    key={link.path}
                    to={link.path}
                    end
                >
                    {link.title}
                </NavLink>
            ))}
        </div>
    )
}

export default Navbar