import React, { useEffect, useRef, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function CMakeInternship() {
  let cidx = useParams()
  let navigate = useNavigate()
  let cid = cidx.id
  let alertBox = useRef()
//   console.log(cid);
  let [internshipData,setInternshipData]=useState({
	cid:cid,
	title:"",
	desc:"",
	sdate:"",
	edate:"",
	clocation:""
})
let [company,setCompany] = useState([])
let [companyLocations,setCompanyLocations] = useState([])
    useEffect(()=>{
        const getCompanybyID = async ()=>{
            try {
                let res = await axios.get("http://localhost:8282/company/"+cid)
                let cname = document.getElementById("companyName")
                cname.textContent=res.data[0].company_name
                setCompany(res.data)
            } catch (err) {
                console.log(err);
            }
        }
        getCompanybyID();

		const getCompanyLocations = async ()=>{
			try {
                let resx = await axios.get("http://localhost:8282/company_location/"+cid)
				// console.log(resx.data);
                setCompanyLocations(resx.data)
            } catch (err) {
                console.log(err);
            }
		}
		getCompanyLocations();
    },[])
const handleInternshipCreation = async ()=>{
	// console.log(internshipData);
	// navigate("/chome/"+cid)
	try {
		let data = await axios.post("http://localhost:8282/internship_create",internshipData)
		// console.log(data)
		// console.log(data.data.affectedRows)
		if(data.data.affectedRows>0){
			console.log("c make internship \n")
			alertBox.current.classList.add("show")
				alertBox.current.style.display="block"
				setTimeout(()=>{
					alertBox.current.style.display="none"
					alertBox.current.classList.remove("show")
					navigate("/chome/"+cid)
					console.log("internship created")
				},2000)
			
		}
		// navigate("/chome/"+cid)
	  } catch (err) {
		console.log(err);
	  }
}
  return (
    <>
	{/* alert */}
	<div className="alert alert-warning fade" ref={alertBox} style={{
				height:"70px",
				display:"none"
			}} role="alert">
				<p id='alertText' className='align-text-center h3'>Internship Created Successfully</p>
	</div>
	
        <div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-13 text-center align-self-center">
					<div className="section pb-5 text-center">
						<div className="card-3d-wrapxx mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3" id='companyName'>Company Name</h4>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" placeholder="Internship title" id="logpass" autoComplete="off" onChange={(e)=>{
													setInternshipData((prev)=>{
														prev.title = e.target.value
														return prev
													})
													// console.log(internshipData)
												}} />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                             <div className="form-group mb-3 mt-2">
                                  <textarea className="form-style" style={{
									height:"200px",
									maxHeight:"250px",
									minHeight:"100px"
								  }} id="exampleFormControlTextarea1" placeholder='Description of intership' rows="3" cols="3" onChange={(e)=>{
													setInternshipData((prev)=>{
														prev.desc = e.target.value
														return prev
													})
													// console.log(internshipData)
												}}  ></textarea>
                              				</div>
											<div className='form-group mb-3 mt-2'>
											<select className="form-select form-style"  aria-label="Default select example" selected onChange={(e)=>{
													setInternshipData((prev)=>{
														// companyLocations
														prev.clocation = companyLocations[e.target.value].company_location
														return prev
													})
													// console.log(internshipData)
													// console.log(companyLocations)
												}}>
													<option>Company location</option>
													{
														companyLocations.map((loc,i)=>(
															<option value={i} key={i}>{loc.company_location}</option>
														))
													}
													{/* <option value="1">One</option>
													<option value="2">Two</option>
													<option value="3">Three</option> */}
											</select>
											</div>
                      					<div className="form-group mt-2 d-flex">
										  <p className="text-white" style={{
												position:"relative",
												top:"13px",	
												width:"100px",
											}}>Start date</p>
												<input type="date" name="logpass" className="form-style" placeholder="start date" id="logpassx" autoComplete="off" onChange={(e)=>{
													setInternshipData((prev)=>{
														prev.sdate = e.target.value
														return prev
													})
													// console.log(internshipData)
												}}  />
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                                            <div className="form-group mt-2 d-flex ">
											<p className="text-white" style={{
												position:"relative",
												top:"13px",	
												width:"100px",
											}}>End date</p>
												<input type="date" name="logpass" className="form-style" placeholder="end date" id="logpass" autoComplete="off" onChange={(e)=>{
													setInternshipData((prev)=>{
														prev.edate = e.target.value
														return prev
													})
													// console.log(internshipData)
												}}  />
												
											</div>	
											<button onClick={handleInternshipCreation} className="btn mt-4">Create</button>
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
    <div className='fixed-top ' style={{
            position:"fixed",
            top:"750px",
            left:"1400px"
          }}>
              <p className=""><Link to={"/chome/"+cid} className="btn align-right">Back To Home...</Link></p>
          </div> 
    </>
  )
}

export default CMakeInternship
