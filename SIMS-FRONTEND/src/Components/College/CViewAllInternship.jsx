import React, { useEffect, useRef, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function CViewAllInternship() {
  let cidx = useParams()
  let cid = cidx.id
  // console.log(cid);
  let noInternship = useRef()
  let alertBox = useRef()
  let cname = useRef()
  let [internshipData,setIntershipData] = useState([])
  useEffect(()=>{
    const getCompanybyID = async ()=>{
        try {
            let res = await axios.get("http://localhost:8282/company/"+cid)
            cname.current.textContent = res.data[0].company_name
        } catch (err) {
            console.log(err);
        }
    }
    getCompanybyID()

    const getCompanyInternship = async ()=>{
      try {
          let res = await axios.get("http://localhost:8282/company/internship/"+cid)
          // console.log(res);
          setIntershipData(res.data)
          if(res.data.length<=0){
            noInternship.current.style.display="block"
          }
      } catch (err) {
          console.log(err);
      }
  }
  getCompanyInternship()
},[])

let handleInternshipDelete = async(id)=>{
    // console.log(id);
    try {
      let res = await axios.delete("http://localhost:8282/delete/internship/"+id)
      // console.log(res);
      // window.location.reload()
      console.log(res.data);
      if(res.data == "internship deleted successfully"){
        alertBox.current.classList.add("show")
				alertBox.current.style.display="block"
				setTimeout(()=>{
					alertBox.current.style.display="none"
					alertBox.current.classList.remove("show")
          window.location.reload()
					console.log("internship deleted")
				},2000)
      }

    } catch (error) {
      console.log(error);
}
}

  return (
    <>
    <div className="alert alert-warning fade" ref={alertBox} style={{
				height:"70px",
				display:"none"
			}} role="alert">
				<p id='alertText' className='align-text-center h3'>Internship Deleted Successfully</p>
	</div>
    <div className="section">
    
		<div className="container">
			{/* <div className="row full-height justify-content-center"> */}
				{/* <div className="col-12 text-center align-self-center py-5"> */}
					<div className="section pb-5 pt-5 pt-sm-2 ">

            <div className='mt-4 border border-dark p-3'>
              <p className='h1 font-weight-bold text-center' style={{
                color:"#ffeba7"
              }} ref={cname}><span className='font-weight-bold' style={{
                color:"#2c2b38"
              }}>All Internship</span></p>
            </div>

						<div className="card-3d-wrapxx mx-auto" style={{
              width:"100%",
              height:"100%",
           
              
            }}>
            
							<div className="card-3d-wrapper">
								<div className="card-front d-flex flex-wrap"> {/*card-front*/}

                  <p className='h1 alif=gn-center' style={{display:"none"}} ref={noInternship}>No Internship Available...</p>
                {/* <div className="card text-white mb-3 mt-3 shadow-sm rounded" style={{
                          maxWidth:"18rem",
                          maxHeight:"19rem",
                          background:"#1f2029",
                          margin:"10px",}}>
                          <div className="card-body">
                            <h5 className="card-title">Internship title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary mt-4">Delete</button>
                          </div>
                  </div> */}

                  {
                    internshipData.map((intern, i) => (
                              <div className="card text-white mb-3 mt-3 shadow-sm rounded" key={i} style={{
                                  maxWidth: "19rem",
                                  maxHeight: "25rem",
                                  background: "#1f2029",
                                  margin: "10px",
                              }}>
                                  <div className="card-body">
                                      <h5 className="card-title">Title: <span>{intern.title}</span></h5>
                                      <p className="card-text">DESC: {intern.desc}</p>
                                      <p className="card-text">Start Date: {intern.sdate.substring(0, 10)}</p>
                                      <p className="card-text">End Date: {intern.edate.substring(0, 10)}</p>
                                      {/* <button className="btn btn-primary mt-4" ref={enrolled} onClick={()=>studnetEnrollInternship(sid,intern.internship_id)}>Enroll</button> */}
                                      <button className="btn btn-primary mt-4" style={{
                                        position:"relative",
                                      }} onClick={()=>handleInternshipDelete(intern.id)}>Delete</button>
                                      <div className='position-absolute' style={{
                                          top: "220px",
                                          left: "200px"
                                      }}>
                                          <p className="link align-right invisible" style={{
                                              position: "relative",
                                              right: "30px",
                                              top: "30px"
                                          }}>{intern.id}</p>
                                          {/* <p className=""><Link to="/viewmoreavailable" className="link align-right">View More</Link></p> */}
                                      </div>
                                  </div>
                              </div>
                          ))
                      }        
                     
                      
											{/* <Link to="" className="btn mt-4">Edit</Link> */}
				      				</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      </div>
          <div className='fixed-top ' style={{
            position:"fixed",
            top:"750px",
            left:"1440px"
          }}>
              <p className=""><Link to={"/chome/"+cid} className="btn align-right">Back To Home...</Link></p>
          </div> 
          </>	
  )
}

export default CViewAllInternship
