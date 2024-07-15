import React, { useState } from 'react'
import { loginUserApi } from '../apis/Api'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import '../style/Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)

        const data = {
            email: email,
            password: password
        }

        // making API Call
        // const response  = loginUserApi(data)
        // console.log(response.data)
        // if(response.data.success == false){
        //     toast.error(response.data.message)
        // } else if (response.data.success == true){
        //     toast.success(response.data.message)
        // } else {
        //     toast.error("Server Error")
        // }

        loginUserApi(data).then((res) => {
            if (res.data.success === false) {
                toast.error(res.data.message)
            } else {
                toast.success(res.data.message)
                // set token and user data in local storage
                localStorage.setItem('token', res.data.token)
                navigate('/admin/dashboard')

                // set user data 
                const jsonDecode = JSON.stringify(res.data.userData)
                localStorage.setItem('user', jsonDecode)

            }
        }).catch(err => {
            toast.error("Server Error")
            console.log(err.message)
        })

    }


    return (
        <div className="login-container">
            <div className="background-image">
                <div className="login-form">
                    <h1>Login to your Account!</h1>
                    <form className='w-25'>
                        <label>Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} className='form-control mb-2' type="email" placeholder='Enter your email' />

                        <label>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className='form-control mb-2' type="password" placeholder='Enter your password' />

                        <button onClick={handleSubmit} className='btn btn-primary w-100'>Login</button>

                        <div className="mt-2">
                            {/* Forget Password Button */}
                            <Link to="/passwordreset" className="btn btn-link" style={{ textDecoration: 'none', color: 'black' }}>
                                Forgot Password?
                            </Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login


