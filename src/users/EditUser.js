import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    let nav=useNavigate()
    const [user,setUser]= useState({
        firstname:"",
        lastname:"",
        Email:""

    })
    const {id} = useParams() 

    const {firstname,lastname,Email}=user

    const onInputChange=(e)=>{
          setUser({...user,[e.target.name]:e.target.value})
        }


        useEffect(()=>{
            loadUser()
        },[])
        
    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        nav("/")

        
    };

    const loadUser =async ()=>{
        const result= await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
  return (
    <div className='container'>
        <div className='row'>+
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'> Edit User</h2>
                <form onSubmit={(e)=>onSubmit(e)} >
                <div className="mb-3">
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input type={'text'} className='form-control' placeholder='first name' name="firstname" value={firstname} onChange={(e)=>onInputChange(e.target.value)}></input>
                    <label htmlFor='Name' className='form-label'>Lastname</label>
                    <input type={'text'} className='form-control' placeholder='enter lastname' name="lastname" value={lastname} onChange={(e)=>onInputChange(e.target.value)}></input>
                    <label htmlFor='email' className='form-label'>Lastname</label>
                    <input type={'text'} className='form-control' placeholder='enter lastname' name='Email' value={Email} onChange={(e)=>onInputChange(e.target.value)}></input>
                </div>
                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link  className='btn btn-outline-danger mx-2' to="/">Cancel</Link></form>
            </div>
        </div> 



    </div>
  )
}

export default EditUser