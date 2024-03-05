import React, { useEffect, useRef, useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

function SProfile() {

	let sname = useRef()
	let susn =useRef()
	let sphoneno = useRef()
	let semail = useRef()
	let spassword = useRef()
	let sgender = useRef()
	let sidx = useParams()
	let alertBox = useRef()
	let alertText = useRef()
	let ualertBox = useRef()
	let ualertText = useRef()
	let updateBTN = useRef()
	let editBTN = useRef()
	let sid = sidx.id
	let [student,setStudent] = useState([])
	let navigate = useNavigate()
	let [updatedData,setUpdatedData] = useState({
		name:"",
		usn:"",
		phoneno:"",
		email:"",
		password:""
	})
	useEffect(()=>{
        const getStudentbyID = async ()=>{
            try {
                let res = await axios.get("http://localhost:8282/student/"+sid)
                // console.log(res)
                // console.log(res.data.length)
                setStudent(res.data)
				if(res.data.length >0){
					sname.current.value = res.data[0].student_name
					susn.current.value = res.data[0].student_usn
					sphoneno.current.value = res.data[0].student_phoneno
					semail.current.value = res.data[0].student_email
					spassword.current.value = res.data[0].student_password
					sgender.current.textContent = res.data[0].student_gender
				}
            } catch (err) {
                console.log(err);
            }
        }
        getStudentbyID()
    },[])

	const handleStudentEditButton = async (e)=>{
		e.preventDefault();
		enableTextBox();
		getUserDataOnEditBTN();
	}

	const getUserDataOnEditBTN = ()=>{
		setUpdatedData((prev)=>{
			prev.name = sname.current.value
			prev.usn = susn.current.value
			prev.phoneno = sphoneno.current.value
			prev.email = semail.current.value
			prev.password = spassword.current.value
			return prev
		})
	}

	const handleStudentUpdateButton = async ()=>{
		disableTextBox()
		try {
			let resx = await new Promise((resolve,reject)=>{
				let res = axios.put("http://localhost:8282/student/update/"+sid,updatedData)
				resolve(res)
			})
			//   let res = await axios.put("http://localhost:8282/student/update/"+sid,updatedData)
			// //   navigate("/")
				// console.log(resx);
				if(resx.data.changedRows>0){
					
					// navigate("/sprofile/"+sid)
					// ualertBox.current.classList.add("show")
					// ualertText.current.textContent="Updated"
					// // updateBTN.current.textContent="Update"
					// setTimeout(()=>{
					// //   let alertBox = document.querySelector(".alertBox")
					// 	//   alertBox.remove("show")
					// 	ualertBox.current.remove("show")
					// },2000)
					// showAlertBoxUPDATE("Data Updated")
				}
		} catch (error) {
			  console.log(error);
		}
		
	}

	const showAlertBoxEDIT = (text)=>{
		alertBox.current.classList.add("show")
		alertText.current.textContent=text
		// updateBTN.current.textContent="Update"
        setTimeout(()=>{
        //   let alertBox = document.querySelector(".alertBox")
            //   alertBox.remove("show")
			alertBox.current.remove("show")
        },2000)
	}

	const showAlertBoxUPDATE = (text)=>{
		ualertBox.current.classList.add("show")
		ualertText.current.textContent=text
		// updateBTN.current.textContent="Update"
        setTimeout(()=>{
        //   let alertBox = document.querySelector(".alertBox")
            //   alertBox.remove("show")
			ualertBox.current.remove("show")
        },2000)
	}

	const enableTextBox = ()=>{
		editBTN.current.style.display="none"
		updateBTN.current.style.display="inline"
		showAlertBoxEDIT("Start Editing")
		sname.current.readOnly = false
		susn.current.readOnly = false
		sgender.current.readOnly = false
		sphoneno.current.readOnly = false
		semail.current.readOnly = false
		spassword.current.readOnly = false
		spassword.current.type="text"
	}

	const disableTextBox = ()=>{
		editBTN.current.style.display="inline"
		updateBTN.current.style.display="none"
		showAlertBoxUPDATE("Data Updated")
		sname.current.readOnly = true
		susn.current.readOnly = true
		sgender.current.readOnly = true
		sphoneno.current.readOnly = true
		semail.current.readOnly = true
		spassword.current.readOnly = true
		spassword.current.type="password"
	}
  return (
    <div className="section">
		<div className="container" >
			<div className="row full-height justify-content-center">
			<div className="alert alert-warning fade alertBox" ref={alertBox} role="alert">
              <p id='alertText' className='align-text-center h3' ref={alertText}></p>
            </div>
			<div className="alert alert-warning fade alertBox" ref={ualertBox} role="alert">
              <p id='alertText' className='align-text-center h3' ref={ualertText}></p>
            </div>
				<div className="col-12 text-center align-self-center">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className="card-3d-wrapxx mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Profile</h4>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your Name" id="logpassn sname" ref={sname} autoComplete="off" readOnly onChange={(e)=>{
														setUpdatedData((prev)=>{
															prev.name = e.target.value
															return prev
														})
													}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your USN" id="logpassu susn" ref={susn} autoComplete="off" readOnly onChange={(e)=>{
														setUpdatedData((prev)=>{
															prev.usn = e.target.value
															return prev
														})
													}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Your phone" id="logpassp sphoneno" ref={sphoneno} autoComplete="off" readOnly onChange={(e)=>{
														setUpdatedData((prev)=>{
															prev.phoneno = e.target.value
															return prev
														})
													}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemaile semail" ref={semail} autoComplete="off" readOnly onChange={(e)=>{
														setUpdatedData((prev)=>{
															prev.email = e.target.value
															return prev
														})
													}}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpasshpass spassword" ref={spassword} autoComplete="off" readOnly onChange={(e)=>{
														setUpdatedData((prev)=>{
															prev.password = e.target.value
															return prev
														})
													}}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
										<div className="form-group mt-2">
										<div className="btn-group">
												<input type="radio" className="btn-check" name="options-outlined" id="dark-outlined1" autoComplete="off" defaultChecked />
												<label className="btn btn-outline-dark mr-2" id='sgender' ref={sgender} htmlFor="dark-outlined1" data-mdb-ripple-init>Gender</label>
											</div>
											</div>
											<button className="btn mt-4" onClick={handleStudentEditButton} ref={editBTN} style={{display:"inline"}}>Edit</button>
											<button className="btn mt-4" onClick={handleStudentUpdateButton} ref={updateBTN} style={{display:"none"}}>Update</button>
                            				<p className="mb-0 mt-4 text-center"><Link to={"/shome/"+sid} className="link">Back To Home...</Link></p>
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
  )
}

export default SProfile
