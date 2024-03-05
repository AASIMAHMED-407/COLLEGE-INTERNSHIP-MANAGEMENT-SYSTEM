import React, { useEffect, useRef } from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

function CProfile() {
    let cidx = useParams()
	let cid = cidx.id
    let cname = useRef()
	let cphoneno = useRef()
	let cemail = useRef()
	let cpassword = useRef()
    useEffect(()=>{
        const getCompanybyID = async ()=>{
            try {
                let res = await axios.get("http://localhost:8282/company/"+cid)
				if(res.data.length >0){
					cname.current.value = res.data[0].company_name
					cphoneno.current.value = res.data[0].company_phoneno
					cemail.current.value = res.data[0].company_email
					cpassword.current.value = res.data[0].company_password
				}
            } catch (err) {
                console.log(err);
            }
        }
        getCompanybyID()
    },[])
  return (
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
                                        <h4 className="mb-4 pb-3">Profile</h4>
                                        <div className="form-group mt-2">
                                            <input type="text" name="logpass" className="form-style" placeholder="Your Name" id="logpass" autoComplete="off" readOnly ref={cname}/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>

                                         <div className="form-group mt-2">
                                            <input type="text" name="logpass" className="form-style" placeholder="Your phone" id="logpass" autoComplete="off" readOnly ref={cphoneno}/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <div className="form-group mt-2">
                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" readOnly ref={cemail}/>
                                            <i className="input-icon uil uil-at"></i>
                                        </div>	
                                        <div className="form-group mt-2">
                                            <input type="text" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" readOnly ref={cpassword}/>
                                            <i className="input-icon uil uil-lock-alt"></i>
                                        </div>
                                        <Link to="" className="btn mt-4">Edit</Link>
                                        <p className="mb-0 mt-4 text-center"><Link to={"/chome/"+cid} className="link">Back To Home...</Link></p>
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

export default CProfile
