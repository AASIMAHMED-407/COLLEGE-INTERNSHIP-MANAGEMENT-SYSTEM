import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function CRegister() {
	let [companyData,setCompanyData]=useState({
		name:"",
		phoneno:"",
		email:"",
		password:"",
		locations:[]
	})
	let alertBox = useRef()
	let navigate = useNavigate()
	const handleCompanyRegister = async ()=>{
		let alertbox = document.querySelector(".alertBox")
		try {
			let data = await axios.post("http://localhost:8282/company_register",companyData)
			// console.log(data)
			// console.log(data.data.affectedRows)
			if(data.data.affectedRows == 1){
				alertBox.current.classList.add("show")
				alertBox.current.style.display="block"
				setTimeout(()=>{
					alertBox.current.style.display="none"
					alertBox.current.classList.remove("show")
					navigate("/")
					console.log("account created")
				},1000)
			}else{
				console.log("failed to create company")
			}
		  } catch (err) {
			console.log(err);
		  }
	}
  return (
	<>
	{/* alert */}
			<div className="alert alert-warning fade" ref={alertBox} style={{
				height:"70px"
			}} role="alert">
				<p id='alertText' className='align-text-center h3'>Account Created Successfully</p>
			</div>
	{/* ------ */}
    <div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className="card-3d-wrapxxx mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Create Company Account</h4>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Company Name" id="logpassn" autoComplete="off" onChange={(e)=>{
													setCompanyData((prev)=>{
														prev.name = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Company Locations (seperated by comma)" id="logpasscl" autoComplete="off" onChange={(e)=>{
													setCompanyData((prev)=>{
														prev.locations = e.target.value.split(",")
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Company phone no." id="logpaddssp" autoComplete="off" onChange={(e)=>{
													setCompanyData((prev)=>{
														prev.phoneno = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Company Email" id="logemaile" autoComplete="off" onChange={(e)=>{
													setCompanyData((prev)=>{
														prev.email = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Company Password" id="logpssassp" autoComplete="off" onChange={(e)=>{
													setCompanyData((prev)=>{
														prev.password = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button onClick={handleCompanyRegister} className="btn mt-4">Create</button>
                            				<p className="mb-0 mt-4 text-center"><Link to="/" className="link">Have Account...?</Link></p>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
</>
  )
}

export default CRegister
