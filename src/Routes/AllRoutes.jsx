import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Indeviduals from './Pages/Indeviduals'
import Login from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'
import Teams from './Pages/Teams'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/indeviduals" element={<Indeviduals/>} />
                <Route path="/teams" element={<Teams/>} />
                <Route path="/enterprice" element={<h1>hello</h1>} />
                <Route path="/product" element={<h1>hello</h1>} />
                <Route path="/pricing" element={<h1>hello</h1>} />
                <Route path="/resourse" element={<h1>hello</h1>} />

                <Route path="/login" element={<Login/>} />
                <Route path="/getstarted" element={<h1>hello</h1>} />
                <Route path="*" element={<PageNotFound/>} />


            </Routes>


        </div>
    )
}

export default AllRoutes