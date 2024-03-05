import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

function CEnrolledInternship() {
  let cidx = useParams()
  let cid = cidx.id
  let [internshipData,setInternshipData]=useState([])
  useEffect(()=>{
    let getAllInternshilpWithCount = async ()=>{
      let data = await axios.get("http://localhost:8282/company/internship/all/"+cid)
      // console.log(data);
      setInternshipData(data.data)
    }
    getAllInternshilpWithCount();
  },[])
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
              }}><span className='font-weight-bold' style={{
                color:"#2c2b38"
              }}>Student Enrolled Internship</span></p>
            </div>

						<div className="card-3d-wrapxx mx-auto" style={{
              width:"100%",
              height:"100%",
              
            }}>
            
							<div className="card-3d-wrapper">
								<div className="card-front d-flex flex-wrap"> {/*card-front*/}

                  {/* <p className='h1 alif=gn-center'>No History Available</p> */}
                  {
                    internshipData.map((item,i)=>(
                      <div className="card text-white mb-3 mt-3 shadow-sm rounded" key={i} style={{
                            maxWidth:"18rem",
                            maxHeight:"19rem",
                            background:"#1f2029",
                            margin:"10px",}}>
                          <div className="card-body">
                            <h5 className="card-title">TITLE: {item.title}</h5>
                            <p className="card-text">DESC: {item.desc}</p>
                            <button className="btn btn-primary mt-4">{item.count}</button>
                          </div>
                    </div>
                    ))
                  }
                {/* <div className="card text-white mb-3 mt-3 shadow-sm rounded" style={{
                          maxWidth:"18rem",
                          maxHeight:"19rem",
                          background:"#1f2029",
                          margin:"10px",}}>
                          <div className="card-body">
                            <h5 className="card-title">Internship title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary mt-4">count</button>
                          </div>
                  </div> */}
                      
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

export default CEnrolledInternship
