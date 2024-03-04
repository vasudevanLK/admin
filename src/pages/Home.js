import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function Home() {
    const [users,setUsers]= useState([])

    useEffect(()=>{
      loadUsers();
    },[])

    const loadUsers= async ()=>{
        const result= await axios.get("http://localhost:8080/users");
        setUsers(result.data)

    }

    const {id} = useParams()
    const deleteUser=async()=>{
       await axios.delete(`http://localhost:8080/user/${id}`)
       loadUsers()
    }

  return (
    <div className='container py-5'>
        

        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">First</th>
      <th scope= "col">Last</th>
      <th scope= "col">Email</th>
      <th scope= "col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>( 
            <tr>
            <th scope="row" key={index}> {index+1} </th>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.Email}</td>
            <td>
                <button className='btn btn-primary mx-2'>View</button>
                <Link className='btn btn-outline-primary mx-2' to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
          ))
    }
  </tbody>
</table>


    

    </div>
  )
}

export default Home