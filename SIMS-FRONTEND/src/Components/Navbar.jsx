import React from 'react'

function Navbar() {
  
  return (
    <>
        <nav className="navbar bg-body-tertiary gradient-custom-2 shadow-sm p-3 mb-3 bg-white rounded">
            <div className="container-fluid">
                <p className="navbar-brand mx-5 h1">Hello, aasim</p>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="button">Search</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Navbar
