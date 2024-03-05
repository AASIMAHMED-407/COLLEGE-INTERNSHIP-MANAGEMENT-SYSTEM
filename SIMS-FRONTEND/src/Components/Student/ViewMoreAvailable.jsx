import React from 'react'
import {Link} from 'react-router-dom'
function ViewMoreAvailable() {
  return (
    <>
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
											<h4 className="mb-4 pb-3">Company Name</h4>
                      <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" value={"About AI"} placeholder="Internship title" id="logpass" autocomplete="off" readOnly/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                                            <div class="form-group mb-3 mt-2">
                                                <textarea class="form-style" value={"desc"} id="exampleFormControlTextarea1" rows="3" cols="3" readOnly></textarea>
                                            </div>
                                            <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" value={"Duration: 3 Month"} placeholder="Company phone" id="logpassx" autocomplete="off" readOnly/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
                                            <div className="form-group mt-2">
												<input type="text" name="logpass" className="form-style" value={"90347787658"} placeholder="Company phone" id="logpass" autocomplete="off" readOnly/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" value={"company123@gmail.com"} placeholder="Company Email" id="logemail" autocomplete="off" readOnly/>
												<i className="input-icon uil uil-at"></i>
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
	</div>
    <div className='fixed-top ' style={{
            position:"fixed",
            top:"750px",
            left:"1400px"
          }}>
              <p className=""><Link to="/ongoinginternship" className="btn align-right">Back To Available...</Link></p>
          </div> 
    </>
  )
}

export default ViewMoreAvailable
