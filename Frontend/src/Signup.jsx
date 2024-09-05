import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Signup = () => {

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPass]=useState('')
  const [err,setErr]=useState(false)
  const navigate=useNavigate()

  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/
  const numberRegex = /\d/

  const handleSubmit=(e)=>{
    e.preventDefault()
    setErr(false)
    let haserror=false
    if (password.length<8){
      haserror=true
      toast.error('Password must be atleast 8 characters long',{
        position:"top-right",
        autoClose: 5000,
      })
    }

    if(!specialCharRegex.test(password)){
      haserror=true
      toast.error('Password must contain atleast 1 special character',{
        position:"top-right",
        autoClose: 5000,
      })
    }
    if(!numberRegex.test(password)){
      haserror=true
      toast.error('Password must contain atleast 1 digit',{
        position:"top-right",
        autoClose: 5000,
      })
    }
    // else{
    //   setErr(false)
    // }
    console.log({ name, email, password })
    if(!haserror){
    axios.post('http://localhost:3001/register',{name,email,password}).then(result=>{console.log(result);
      toast.success('Registered successfully',{
        position:"top-right",
        autoClose: 5000,});
      navigate('/login')
    }).catch(err=>console.log(err))

  }}
  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
          <h2>Register Now!!</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input type="text" placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0' required onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className='mb-3'>
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input type="password" placeholder='Set Password' autoComplete='off' name='password' className='form-control rounded-0' required onChange={(e)=>setPass(e.target.value)}/>
            </div>
            <button  type='submit'
            className='btn btn-success w-100 rounded-0 '>
              Register
            </button>
            </form>
            <p className='mt-1'>Already have an account!!?</p>
            <Link to='./login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
              Login
            </Link>
            
          
      </div>

    </div>
  )
}
