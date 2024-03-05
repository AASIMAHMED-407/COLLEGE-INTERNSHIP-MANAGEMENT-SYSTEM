import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CNavbar() {
  let cidx = useParams()
  let cid = cidx.id

  let [company,setCompany] = useState([])
    useEffect(()=>{
        const getCompanybyID = async ()=>{
            try {
                let res = await axios.get("http://localhost:8282/company/"+cid)
                // console.log(res.data[0].company_name);
                // return(
                // <Navbar name={res.data[0].company_name}/>
                // )
                let cname = document.getElementById("companyName")
                cname.textContent="Hello, "+res.data[0].company_name
                setCompany(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getCompanybyID()
    },[])
  return (
    <>
        <nav className="navbar bg-body-tertiary gradient-custom-2 shadow-sm p-3 mb-3 bg-white rounded">
            <div className="container-fluid">
                <p className="navbar-brand mx-5 h1" id='companyName'></p>
                <form className="d-flex" role="search">
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="button">Search</button> */}
                <button className="btn btn-outline-success" type="button" >SAHYADRI INTERNSHIP MANAGEMENT SYSTEM (Company)</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default CNavbar
