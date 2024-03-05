import React from 'react'
import {Link, useParams} from 'react-router-dom'

function SCard() {
	let sid = useParams()
	// console.log(sid.id);
  return (
    <>
    <div className="section">
		<div className="container d-flex flex-column">

				<div className="text-center py-3 mt-5">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/enrolledInternship/"+sid.id} className="btn" style={{
                                        height:"100px",
                                        width:"700px",
                                        fontSize:"30px",
                                    }}>Enrolled Internship</Link>
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
                                    <Link to={"/ongoinginternship/"+sid.id} className="btn" style={{
                                        height:"100px",
                                        width:"700px",
                                        fontSize:"30px"
                                    }}>Available Internship</Link>
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
                                    <Link to="/shistory" className="btn" style={{
                                        height:"100px",
                                        width:"700px",
                                        fontSize:"30px"
                                    }}>History</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> */}
		      	</div>

                  <div className="col-4 text-center py-5">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> */}
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to={"/sprofile/"+sid.id} className="btn" style={{
                                       height:"100px",
                                        width:"700px",
                                        fontSize:"30px"
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

export default SCard


{/* <div className="section">
		<div className="container">
				<div className="col-12 text-center align-self-center py-5">
					{/* <div className="section pb-5 pt-0 pt-sm-2 text-center"> 
						<div className="card-3d-wrapxxxx">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
                                    <Link to="/ongoinginternship" className="btn" style={{
                                        height:"200px"
                                    }}>On Going Intership</Link>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	{/* </div> 
		      	</div>
	    </div>
	</div> */}