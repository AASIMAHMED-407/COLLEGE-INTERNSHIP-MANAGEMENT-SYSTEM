import React, { useEffect, useRef, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function OnGoingInternship() {
  let enrolled = useRef()
  let sidx = useParams()
  let sid = sidx.id
  let [internship,setInternship] = useState([])
  let alertBox = useRef()
  let noInternshipAvailable = useRef()
  useEffect(()=>{
    const getInternships = async ()=>{
        try {
            let res = await axios.get("http://localhost:8282/internship")
            // console.log(res.data)
            // console.log(res.data.length)
            if(res.data.length<=0){
              noInternshipAvailable.current.style.display="block"
            }else{
              setInternship(res.data)
              noInternshipAvailable.current.style.display="none"
            }
        } catch (err) {
            console.log(err);
        }
    }
    getInternships()
},[])

const studnetEnrollInternship = async (sid,iid)=>{
  // console.log(sid,iid);
    try {
      let res = await axios.post("http://localhost:8282/studnetEnrollInternship",{sid,iid})
      // console.log(res);
      // console.log("enroled");
      if(res.data.affectedRows ==1){
        let alertBox = document.querySelector(".alertBox")
        console.log("enroled");
        alertBox.classList.add("show")
        setTimeout(()=>{
          let alertBox = document.querySelector(".alertBox")
              alertBox.remove("show")
        },2000)
      }
  } catch (err) {
      console.log(err);
  }
}
// console.log(internship);
  return (
    <>
      <div className="section">
    
		<div className="container">
			{/* <div className="row full-height justify-content-center"> */}
				{/* <div className="col-12 text-center align-self-center py-5"> */}
					<div className="section pb-5 pt-5 pt-sm-2 ">

            <div className='mt-4 border border-dark p-3'>
              <p className='h1 font-weight-bold text-center' style={{
                color:"#ffeba7"
              }}> Available <span className='font-weight-bold' style={{
                color:"#2c2b38"
              }}> Internship(s)</span></p>
            </div>

            <div className="alert alert-warning fade alertBox" ref={alertBox} role="alert">
              <p id='alertText' className='align-text-center h3'>Enrolled</p>
            </div>

            <p className='h1 align-self-center' ref={noInternshipAvailable}  style={{display:"none"}}>not internship Available</p>

						<div className="card-3d-wrapxx mx-auto" style={{
              width:"100%",
              height:"100%",
            }}>
							<div className="card-3d-wrapper">
								<div className="card-front d-flex flex-wrap"> {/*card-front*/}

                  {/* <p className='h1 alif=gn-center'>No History Available</p> */}

                         {
                          internship.map((intern, i) => (
                              <div className="card text-white mb-3 mt-3 shadow-sm rounded" key={i} style={{
                                  maxWidth: "19rem",
                                  maxHeight: "25rem",
                                  background: "#1f2029",
                                  margin: "10px",
                              }}>
                                  <div className="card-header">company</div>
                                  <div className="card-body">
                                      <h5 className="card-title">Title: <span>{intern.internship_title}</span></h5>
                                      <p className="card-text">DESC: {intern.internship_desc}</p>
                                      <p className="card-text">Start Date: {intern.internship_startdate.substring(0, 10)}</p>
                                      <p className="card-text">End Date: {intern.internship_enddate.substring(0, 10)}</p>
                                      <button className="btn btn-primary mt-4" ref={enrolled} onClick={()=>studnetEnrollInternship(sid,intern.internship_id)}>Enroll</button>
                                      <div className='position-absolute' style={{
                                          top: "220px",
                                          left: "200px"
                                      }}>
                                          <p className="link align-right invisible" style={{
                                              position: "relative",
                                              right: "30px",
                                              top: "30px"
                                          }}>{intern.internship_id}</p>
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
              <p className=""><Link to={"/shome/"+sid} className="btn align-right">Back To Home...</Link></p>
          </div>
    </>
  )
}

export default OnGoingInternship



// {
//   internship.map((intern,i)=>(
//         <div className="card text-white mb-3 mt-3 shadow-sm rounded" key={i} style={{
//           maxWidth:"19rem",
//           maxHeight:"19rem",
//           background:"#1f2029",
//           margin:"10px",}}>
//           <div className="card-header">company</div>
//           <div className="card-body">
//           <h5 className="card-title">Title:  <span>{intern.internship_title}</span></h5>
//            <div>
//             <p className="card-text">DESC: {intern.internship_desc}</p>
//             <div>
//            <p className="card-text">Start Date:  {intern.internship_startdate.substring(0, 10)}</p>
//            <div>
//            <p className="card-text">End Date:  {intern.internship_enddate.substring(0, 10)}</p>
//            </div>
//            </div>
          
//            </div>
//             <button className="btn btn-primary mt-4">Enroll</button>
//             <div className=' position-absolute ' style={{
//                       top:"220px",
//                       left:"200px"}}>
//             <p className=""><p className="link align-right" style={{
//               position:"relative",
//               right:"30px",
//               top:"30px"
//             }}>{intern.internship_id}</p></p>
//             {/* <p className=""><Link to="/viewmoreavailable" className="link align-right">View More</Link></p> */}
//             </div>
//           </div>
//       </div>
//   ))
// }

{/* <div className="card text-white mb-3 mt-3 shadow-sm rounded" style={{
  maxWidth:"18rem",
  maxHeight:"19rem",
  background:"#1f2029",
  margin:"10px",}}>
  <div className="card-header">Company Name</div>
  <div className="card-body">
    <h5 className="card-title">Internship title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary mt-4">Enroll</button>
    <div className=' position-absolute ' style={{
              top:"220px",
              left:"200px"}}>
    <p className=""><Link to="/viewmoreavailable" className="link align-right">View More</Link></p> 
    </div>
  </div>
</div> */}