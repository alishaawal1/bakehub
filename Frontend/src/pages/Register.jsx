import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import { createUserApi, testApi } from '../apis/Api'
import { toast } from 'react-toastify'
import '../style/Register.css' // Import the CSS file
import { Link } from 'react-router-dom'


const Register = () => {
  // useState (Setting input value)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // useState (Setting error message)
  const [fnameError, setFnameError] = useState('')
  const [lnameError, setLnameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [cpasswordError, setCpasswordError] = useState('')

  // validate input value
  const validate = () => {
      let isValid = true

      // reset error message
      setFnameError('')
      setLnameError('')
      setEmailError('')
      setPasswordError('')
      setCpasswordError('')

      if(firstName.trim() === ""){
        setFnameError("Firstname is required")
        isValid = false
      }
      if(lastName.trim() === ""){
        setLnameError("Lastname is required")
        isValid = false
      }
      if(email.trim() === ""){
        setEmailError("Email is required")
        isValid = false
      }

      if(password.trim() === ""){
        setPasswordError("Password is required")
        isValid = false
      }

      if(confirmPassword.trim() === ""){
        setCpasswordError("Confirm Password is required")
        isValid = false
      }

      if(password.trim() !== confirmPassword.trim()){
        setCpasswordError("Password and Confirm Password must be same")
        isValid = false
      }

      return isValid
  }

  // function for changing input value
  const changeFirstname = (e) => {
    setFirstName(e.target.value)
  }

  const changeLastname = (e) => {
    setLastName(e.target.value)
  }

  const changeEmail = (e) => {
    setEmail(e.target.value)
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
  }

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  // function for button
  const handleSubmit = (e) => {
    e.preventDefault()

    // validate the data
    const isValid = validate()
    if(!isValid){
      return
    }
    

    // making json data object
    const data = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      password : password
    }

    // making API Call
    createUserApi(data).then((res) => {
      if(res.data.success === false){
        toast.error(res.data.message)
      } else {
        toast.success(res.data.message)
      }
    }).catch(err => {
      toast.error("Server Error")
      console.log(err.message)
    })



  }

  return (
    <>
    <div className="register-container">
      
      
      
      <form className='register-form'>
      <h1 className='m-4'>Create your Account!</h1>
        <label>Firstname</label>
        <input onChange={changeFirstname} type="text" className='form-control mb-2' placeholder='Enter your firstname' />

        {
          fnameError && <p className='text-danger'>{fnameError}</p>
        }

        <label>Lastname</label>
        <input onChange={changeLastname} type="text" className='form-control mb-2' placeholder='Enter your lastname' />
        {
          lnameError && <p className='text-danger'>{lnameError}</p>
        }


        <label>Email Address</label>
        <input onChange={changeEmail} type="email" className='form-control mb-2' placeholder='Enter your email' />
        {
          emailError && <p className='text-danger'>{emailError}</p>
        }

        <label>Password</label>
        <input onChange={changePassword} type="password" className='form-control mb-2' placeholder='Enter your password' />
        {
          passwordError && <p className='text-danger'>{passwordError}</p>
        }

        <label>Confirm Password</label>
        <input onChange={changeConfirmPassword} type="password" className='form-control mb-2' placeholder='Enter your password' />
        {
          cpasswordError && <p className='text-danger'>{cpasswordError}</p>
        }

        <button onClick={handleSubmit} className='btn btn-danger w-100'>Create an Account</button>

        <Link to="/login" className='text-black text-decoration-none'>Already have account?</Link>

      </form>
      </div>
    </>
  )
}

export default Register
