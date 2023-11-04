import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Home.css'
const Home = () => {
  return (
    <div className='MainContainer'>
        <h1> 🖱️ Assignment 💻</h1>
        <div className='ActionLink'>
        <Link to='/SumofNumber'>Sum of Number</Link> 

        <Link to='/AppendString'> Append String</Link> 
        
        <Link to='/WordCount'> Word Count</Link>
        </div>
      
    </div>
  )
}

export default Home
