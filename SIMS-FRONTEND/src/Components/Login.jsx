import React, { useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Login() {
  let alertBoxX = useRef()
  let [studentData,setStudentData] = useState({
    sEmail:"",
    sPassword:""
  })

  let navigate = useNavigate()

  const verifyStudentLogin = async ()=>{
    let alertbox = document.querySelector(".alertBox")
    let alerttext = document.getElementById("alertText")
    try {
      let data = await axios.post("http://localhost:8282/student_login",studentData)
      // console.log(data)
      if(data.data.length>0){
        alerttext.textContent = "login Successful "
        alertBoxX.current.style.display = "block"
        // navigate("/shome/"+data.data[0].student_id)
        setTimeout(()=>{
          alertBoxX.current.style.display = "none"
          navigate("/shome/"+data.data[0].student_id)
        },2000)
        // console.log(data.data[0].student_id)
      }else{
        console.log("failed")
        alerttext.textContent = "login Failed "
        alertBoxX.current.style.display = "block"
        setTimeout(()=>{
          alertBoxX.current.style.display = "none"
        },2000)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleStudentLoginBTN = ()=>{
    let alertbox = document.querySelector(".alertBox")
    let alerttext = document.getElementById("alertText")
    if(studentData.sEmail.length>0 && studentData.sPassword.length>0){
      verifyStudentLogin()
    }else{
      alerttext.textContent = "Please fill the data first"
      // alertbox.classList.add("show")
      alertBoxX.current.style.display = "block"
      setTimeout(()=>{
        // alertbox.remove("show")
        alertBoxX.current.style.display = "none"
       },3000)
      }
  }


  let [companyData,setCompanyData] = useState({
    cEmail:"",
    cPassword:""
  })

  const handleCompanyLoginBTN = ()=>{
    let alertbox = document.querySelector(".alertBox")
    let alerttext = document.getElementById("alertText")
    if(companyData.cEmail.length>0 && companyData.cPassword.length>0){
      verifyCompanyLogin()
    }else{
      alerttext.textContent = "Please fill the data first"
      // alertbox.classList.add("show")
      alertBoxX.current.style.display = "block"
      setTimeout(()=>{
        // alertbox.remove("show")
        alertBoxX.current.style.display = "none"
       },2000)
      }
  }

  const verifyCompanyLogin = async ()=>{
    let alertbox = document.querySelector(".alertBox")
    let alerttext = document.getElementById("alertText")
    try {
      let data = await axios.post("http://localhost:8282/company_login",companyData)
      // console.log(data)
      if(data.data.length>0){
        // navigate("/chome/"+data.data[0].company_id)
        // console.log(data.data[0].student_id)
          console.log("c login successful")
          alerttext.textContent = "login Successful "
          alertBoxX.current.style.display = "block"
          setTimeout(()=>{
            alertBoxX.current.style.display = "none"
            navigate("/chome/"+data.data[0].company_id)
          },2000)
      }else{
          console.log("failed")
          alerttext.textContent = "login Failed "
          alertBoxX.current.style.display = "block"
          setTimeout(()=>{
            alertBoxX.current.style.display = "none"
          },2000)
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      
	{/* <a className="" target="_blank" style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // width:"100px",
    // height:"100px",
  }}>
		<img src="scemlogo.png" style={{
      position:"relative",  
      width:"1000px",
      height:"800px",
      zIndex:"-10"
    }} alt=""/> 	</a> */}

  <div className="alert alert-warning fade show alertBox" ref={alertBoxX} style={{display:"none"}} role="alert">
  <p id='alertText' className='align-text-center h3'></p>
  </div>
	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3"><span>Student</span><span>Company</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label htmlFor="reg-log"></label>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Student</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" onChange={(e)=>{
                            setStudentData((prev)=>{
                                prev.sEmail = e.target.value
                                return prev
                            })
                            // console.log(studentData)
                        }}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" onChange={(e)=>{
                            setStudentData((prev)=>{
                                prev.sPassword = e.target.value
                                return prev
                            })
                            // console.log(studentData)
                        }}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button className="btn mt-4" onClick={handleStudentLoginBTN}>Login</button>
                            				<p className="mb-0 mt-4 text-center"><Link to="/sregister" className="link">Dont Have Account...</Link></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Company</h4>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemailc" autoComplete={"off"} onChange={(e)=>{
                            setCompanyData((prev)=>{
                                prev.cEmail = e.target.value
                                return prev
                            })
                            // console.log(companyData)
                        }}/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpassc" autoComplete={"off"} onChange={(e)=>{
                            setCompanyData((prev)=>{
                                prev.cPassword = e.target.value
                                return prev
                            })
                            // console.log(companyData)
                        }}/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button onClick={handleCompanyLoginBTN} className="btn mt-4">Login</button>
                      <p className="mb-0 mt-4 text-center"><Link to="cregister" className="link">Create Company Account...</Link></p>
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

export default Login




/*
<a href="https://front.codes/" className="logo" target="_blank">
 <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>}
    </a>

    <div className="section">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3"><span>Student</span><span>Company</span></h6>
                    <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                    <label for="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Student</h4>
                        <div className="form-group">
                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                          <i className="input-icon uil uil-at"></i>
                        </div>	
                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4">submit</a>
                                      <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                          </div>
                        </div>
                      </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Company</h4>
                        <div className="form-group">
                          <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
                          <i className="input-icon uil uil-user"></i>
                        </div>	
                        <div className="form-group mt-2">
                          <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                          <i className="input-icon uil uil-at"></i>
                        </div>	
                        <div className="form-group mt-2">
                          <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="#" className="btn mt-4">submit</a>
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
*/
