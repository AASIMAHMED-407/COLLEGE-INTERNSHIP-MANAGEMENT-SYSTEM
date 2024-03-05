import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

function CCard() {
	let cid = useParams()
  	// console.log(cid.id)
  return (
    <>
    <div className="section">
	{/* style={{
		display:"flex",
		alignItems:"center",
		justifyContent:"center",
	}} */}
	{/* d-flex flex-column */}
		<div className="container d-flex flex-column " style={{
			// position:"relative",
			// left:"200px"
		}}>

				<div className="text-center py-3 mt-5">
					{/* align-self-center <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx ">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/cmakeinternship/"+cid.id} className="btn" style={{
                                        height:"100px",
                                        width:"700px",
                                        fontSize:"30px",
										borderRadius:"20px"
                                    }}>Create An Internship</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> */}
		      	</div>

                  <div className=" col-4 text-center  py-4">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/cenrolledstudentinternship/"+cid.id} className="btn" style={{
                                       height:"100px",
                                        width:"700px",
                                        fontSize:"30px",
										borderRadius:"20px"
                                    }}>Enrolled Student Internship Count</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> */}
		      	</div>

                  <div className="col-4 text-center  py-4">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/cviewallinternship/"+cid.id} className="btn" style={{
                                       height:"100px",
                                        width:"700px",
                                        fontSize:"30px",
										borderRadius:"20px"
                                    }}>View All Internships</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> */}
		      	</div>

                  <div className="col-4 text-center  py-4">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/cprofile/"+cid.id} className="btn" style={{
                                       height:"100px",
                                        width:"700px",
                                        fontSize:"30px",
										borderRadius:"20px"
                                    }}>Profile</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> */}
		      	</div>
	    </div>
	</div>
    
    </>
  )
}

export default CCard
