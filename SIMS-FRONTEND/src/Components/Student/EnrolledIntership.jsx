import React, { useEffect, useRef, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function EnrolledIntership() {
  let sidx = useParams()
  let sid = sidx.id
  let sname = useRef()
  let noenroll = useRef()
  let enrolled = useRef()
  let [internship,setInternship] = useState([])
  useEffect(()=>{
    const getStudentbyID = async ()=>{
        try {
            let res = await axios.get("http://localhost:8282/student/"+sid)
            // console.log(res.data[0].student_name);
            sname.current.innerText = res.data[0].student_name
           
        } catch (err) {
            console.log(err);
        }
    }
    getStudentbyID()

    const getStudentInternships = async ()=>{
      try {
          let res = await axios.get("http://localhost:8282/getStudentInternships/"+sid)
          // console.log(res.data.length)         
          setInternship(res.data)    
          if(res.data.length>0){
             noenroll.current.style.display="none"
             enrolled.current.style.display="block"
            }
          else{
            noenroll.current.style.display="block"
            enrolled.current.style.display="none"
          }

      } catch (err) {
          console.log(err);
      }
  }
  getStudentInternships()
},[])
  return (
    <>
       <div className="section">
    
		<div className="container">
			{/* <div className="row full-height justify-content-center"> */}
				{/* <div className="col-12 text-center align-self-center py-5"> */}
					<div className="section pb-5 pt-5 pt-sm-2 ">

            <div className='mt-4 border border-dark p-3'>
              <p className='h1 font-weight-bold text-center' ref={sname} style={{
                color:"#ffeba7"
              }}></p>
              <div className='h1 font-weight-bold text-center'>
              <span className='font-weight-bold' style={{
                color:"#2c2b38"
              }}> Enrolled Internship(s)</span>
              </div>
            </div>

						<div className="card-3d-wrapxx mx-auto" style={{
              width:"100%",
              height:"100%",
           
              
            }}>
            
              <p className='h1 align-self-center' ref={noenroll} style={{display:"none"}}>You have not enrolled in any internship yet</p>
							<div className="card-3d-wrapper" ref={enrolled}>
								<div className="card-front d-flex flex-wrap"> {/*card-front*/}

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
                                      <button className="btn btn-primary mt-4" >Enrolled</button>
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

                  {/* {
                    internship.map((intern,id)=>(
                      <div className="card text-white mb-3 mt-3 shadow-sm rounded" key={id} style={{
                          maxWidth:"18rem",
                          maxHeight:"19rem",
                          background:"#1f2029",
                          margin:"10px",}}>
                          <div className="card-header">Company Name</div>
                          <div className="card-body">
                            <h5 className="card-title">{intern.internship_title}</h5>
                            <p className="card-text">{intern.internship_desc}</p>
                            <button className="btn btn-primary mt-4">Enrolled</button>
                            <div className=' position-absolute ' style={{
                                      top:"220px",
                                      left:"200px"}}>
                            </div>
                          </div>
                      </div>
                    ))
                  } */}
                     
                      
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

export default EnrolledIntership


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
     <p className=""><Link to="/viewmoreenrolled" className="link align-right">View More</Link></p> 
    </div>
  </div>
</div> */}