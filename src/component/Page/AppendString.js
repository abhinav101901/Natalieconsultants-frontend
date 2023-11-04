import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import '../Style/AppendString.css'

const AppendString = () => {
    const [string1, setString1] = useState('');
    const [string2, setString2] = useState('');
    const [query, setQuery] = useState([]);

    const result = function (event) {
        event.preventDefault();
        axios.post(`http://localhost:3000/api/append`, {string1, string2})
            .then((res) => {
                setQuery(res.data.message)
                console.log(res.data.message)
                // Navigate('/LogIn')
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
    }
    return (
        <div className='MainContainer'>
            <form className='Input-data' onSubmit={result}>
                <h1> Append String 👨‍🏫</h1>
                <div className='StringInput'>
                    <label>First String:</label>
                    <input type="text" value={string1} placeholder='Enter your first string here' onChange={((e) => setString1(e.target.value))} />
                </div>
                <div className='StringInput'>
                    <label>Second String:</label>
                    <input type="text" value={string2} placeholder='Enter your second string here' onChange={((e) => setString2(e.target.value))} />
                </div>
                <input className="submit-button" type="submit" placeholder="SUBMIT" />
            </form>
            <p>Apeend String ✍️ : {query} </p>
        </div>
    )
}

export default AppendString
