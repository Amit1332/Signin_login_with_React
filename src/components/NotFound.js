import React from 'react'
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center flex-column" style={{height:"100vh",position:"absolute", top:"0"}}>

        <h3>404 Error ! Page NotFound</h3>
         <Link to="/" className='btn btn-sm btn-success'>Go to Homepage</Link>
        </div>
        </>
  )
}

export default NotFound