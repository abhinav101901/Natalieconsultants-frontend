import React , { useState }  from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import '../Style/SumofNumber.css'

const SumofNumber = () => {
    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [query, setQuery] = useState([]);

    const result = function (event) {
        event.preventDefault();
        axios.post(`http://localhost:3000/api/sum`, {num1,num2})
            .then((res) => {
                setQuery(res.data.SumOfNumber)
                console.log(res.data.SumOfNumber)
                // Navigate('/LogIn')
            }).catch((err) => {
                alert(err.response.data.message + err.response.status + " Error")
            })
    }
    // const result =async(event) => {
	// 	try {
    //         const response = await axios.post('your_api_endpoint', { /* your data */ });
    //         setQuery(response.data);
    //       } catch (error) {
    //         console.error('Error:', error);
    //       }
	// };
    return (
        <div className='MainContainer'>
            <form className='Input-data' onSubmit={result}>
                <h1> Sum Of Number 👨‍🏫</h1>
                <div className='NumberInput'>
                    <label>First Number:</label>
                    <input type="number" value={num1} placeholder='Enter your first number here' onChange={((e) => setNum1(e.target.value))} />
                </div>
                <div className='NumberInput'>
                    <label>Second Number:</label>
                    <input type="number" value={num2} placeholder='Enter your second number here' onChange={((e) => setNum2(e.target.value))} />
                </div>
                <input className="submit-button" type="submit" placeholder="SUBMIT" />
            </form>
            <p>Sum of Two number : {query}</p>
        </div>

    )
}

export default SumofNumber
