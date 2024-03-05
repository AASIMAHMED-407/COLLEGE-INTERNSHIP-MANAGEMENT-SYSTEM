import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function SRegister() {
	let [studentData,setStudentData]=useState({
		name:"",
		usn:"",
		phoneno:"",
		email:"",
		password:"",
		gender:""
	})
	let navigate = useNavigate()

	const handleStudentRegister = async ()=>{
		let alertbox = document.querySelector(".alertBox")
		try {
			let data = await axios.post("http://localhost:8282/student_register",studentData)
			// console.log(data)
			// console.log(data.data.affectedRows)
			if(data.data.affectedRows == 1){
				console.log("STUDENT CREATED");
      			alertbox.classList.add("show")
				alertbox.style.display="block"
				setTimeout(()=>{
					alertbox.style.display="none"
					alertbox.classList.remove("show")
					navigate("/")
				},1000)
				
      			
			  // console.log(data.data[0].student_id)
			}else{
				console.log("failed to create student")
			}
		  } catch (err) {
			console.log(err);
		  }
	}
  return (
	<>

	{/* alert */}
		<div className="alert alert-warning fade alertBox" style={{
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
						<div className="card-3d-wrapxx mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Create Student Account</h4>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your Name" id="name" autoComplete="off" onChange={(e)=>{
													setStudentData((prev)=>{
														prev.name = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your USN" id="usn" autoComplete="off" onChange={(e)=>{
													setStudentData((prev)=>{
														prev.usn = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your phone" id="phone" autoComplete="off" onChange={(e)=>{
													setStudentData((prev)=>{
														prev.phoneno = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                    
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={(e)=>{
													setStudentData((prev)=>{
														prev.email = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={(e)=>{
													setStudentData((prev)=>{
														prev.password = e.target.value
														return prev
													})
													// console.log(studentData)
												}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
												<div className="form-group mt-2">
												<div className="btn-group mt-3">
														<input type="radio" className="btn-check" name="options-outlined" id="dark-outlined1" autoComplete="off"  onClick={(e)=>{
													setStudentData((prev)=>{
														prev.gender = "Male"
														return prev
													})
													// console.log(studentData)
												}}/>
														<label className="btn btn-outline-dark mr-2" htmlFor="dark-outlined1" data-mdb-ripple-init>Male</label>
														<input type="radio" className="btn-check" name="options-outlined" id="dark-outlined2" autoComplete="off" onClick={(e)=>{
													setStudentData((prev)=>{
														prev.gender = "Female"
														return prev
													})
													// console.log(studentData)
												}}/>
														<label className="btn btn-outline-dark" htmlFor="dark-outlined2" data-mdb-ripple-init>Female</label>
													</div>
												</div>
											<button onClick={handleStudentRegister} className="btn mt-4">Create</button>
                            				<p className="mb-0 mt-4 text-center"><Link to="/" className="link">Already Have Account...?</Link></p>
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
	<button className="btn mt-4" style={{
				position:"absolute",
				bottom:"50px",
				left:"1400px"
				}} onClick={()=>{
					window.location.reload()
				}}>Clear</button>
	</>
  )
}

export default SRegister
