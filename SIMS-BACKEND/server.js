const expree  = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = expree()
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sims"
})
app.use(expree.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hello from backend")
})


app.post("/student_register",(req,res)=>{
    let query = "INSERT INTO student(`student_name`,`student_usn`,`student_phoneno`,`student_gender`,`student_email`,`student_password`) VALUES(?)"
    let values = [
        req.body.name,
        req.body.usn,
        req.body.phoneno,
        req.body.gender,
        req.body.email,
        req.body.password,
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json(data)
    })
})

app.post("/student_login",(req,res)=>{
    let values = [
        req.body.sEmail,
        req.body.sPassword,
    ]
    let query = `SELECT * FROM student WHERE student_email='${values[0]}' AND student_password='${values[1]}'`
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json(data)
    })
})

app.get("/student",(req,res)=>{
    let query = "SELECT * FROM student;"
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})
app.get("/student/:id",(req,res)=>{
    let id = req.params.id
    let query = `SELECT * FROM student WHERE student_id='${id}';`
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})

app.get("/getStudentInternships/:id",(req,res)=>{
    let sid = req.params.id
    // student_take_internship
    // internship
    let query = `SELECT i.internship_title, i.internship_desc, i.internship_startdate, i.internship_enddate
                FROM student_take_internship sti, internship i
                WHERE sti.student_id = '${sid}' AND sti.internship_id = i.internship_id;`
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})

function addCompanyLocation(cid,locations){
    locations.forEach(location => {
        let query = "INSERT INTO company_location(`company_id`,`company_location`) VALUES(?)"
        let values = [cid,location]
        db.query(query,[values],(err,data)=>{
            if(err) return res.send(err)
            return
        })
    });
}

app.post("/company_register",(req,res)=>{
    let query = "INSERT INTO company(`company_name`,`company_phoneno`,`company_email`,`company_password`) VALUES(?)"
    let locationArr = req.body.locations
    let values = [
        req.body.name,
        req.body.phoneno,
        req.body.email,
        req.body.password,
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.send(err)
        // if(err) return res.json("error occured while inserting data")
    // console.log(data.insertId);
        if(data.affectedRows==1){
            let cid = data.insertId
            addCompanyLocation(cid,locationArr)
            return res.send(data)
            // locationArr.forEach(location => {
            //     let query = "INSERT INTO company_location(`company_id`,`company_location`) VALUES(?)"
            //     let values = [cid,location]
            //     db.query(query,[values],(err,data)=>{
            //         if(err) return res.send(err)
            //         return
            //     })
            // });
        }
        // return res.json(data)
    })
})

app.post("/company_login",(req,res)=>{
    let values = [
        req.body.cEmail,
        req.body.cPassword,
    ]
    let query = `SELECT * FROM company WHERE company_email='${values[0]}' AND company_password='${values[1]}'`
    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json(data)
    })
})

app.get("/company",(req,res)=>{
    let query = "SELECT * FROM company;"
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})

app.get("/company/:id",(req,res)=>{
    let id = req.params.id
    let query = `SELECT * FROM company WHERE company_id='${id}'`
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})

// app.get("/company/internship/:id",(req,res)=>{
//     let cid = req.params.id
//     let query = `SELECT internship_id FROM company_offers_internship WHERE company_id='${cid}'`
//     let dataArray = []
//     db.query(query,(err,data)=>{
//         if (err) return res.send(err)
//         // res.send(data)
//         // console.log(data);
//         data.forEach((elem)=>{	
//             let query = `SELECT internship_title, internship_desc, internship_startdate, internship_enddate FROM internship WHERE internship_id = '${elem.internship_id}'`
//             db.query(query,(err,data)=>{
//                 if (err) return res.send(err)
//                 // res.send(data)
//                 let obj = {
//                     title:data[0].internship_title,
//                     desc:data[0].internship_desc,
//                     sdate:data[0].internship_startdate,
//                     edate:data[0].internship_enddate }

//                 dataArray.push(obj)
//                 // console.log(data[0].internship_title);
//                 // console.log(obj);
//                 // console.log(dataArray)
//                 // console.log("NEXT");
//             })
//             // res.send(dataArray)
//         })
//         // res.send(dataArray)
//         // console.log(dataArray)
//     })
// })
app.get("/company/internship/:id", async (req, res) => {
    let cid = req.params.id;
    let query = `SELECT internship_id FROM company_offers_internship WHERE company_id='${cid}'`;
    let dataArray = [];

    try {
        let data = await new Promise((resolve, reject) => {
            db.query(query, (err, data) => {
                if (err) reject(err);
                resolve(data);
            });
        });

        for (let elem of data) {
            let innerQuery = `SELECT internship_id, internship_title, internship_desc, internship_startdate, internship_enddate FROM internship WHERE internship_id = '${elem.internship_id}'`;
            let innerData = await new Promise((resolve, reject) => {
                db.query(innerQuery, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            });

            if (innerData.length > 0) {
                let obj = {
                    id: innerData[0].internship_id,
                    title: innerData[0].internship_title,
                    desc: innerData[0].internship_desc,
                    sdate: innerData[0].internship_startdate,
                    edate: innerData[0].internship_enddate
                };
                dataArray.push(obj);
            }
        }
        // console.log(dataArray);
        res.json(dataArray); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/company/internship/all/:cid",async(req,res)=>{
    let cid = req.params.cid
    let query = `SELECT internship_id FROM company_offers_internship WHERE company_id='${cid}';`
    let dataArray = []
    try{
        let iids = await new Promise((resolve,reject)=>{
            db.query(query,(err,data)=>{
                if(err) reject(err);
                resolve(data);
            })
        })
        // res.send(data)
        for(let iid of iids){
            let innerQuery = `SELECT internship_id, internship_title, internship_desc, internship_startdate, internship_enddate FROM internship WHERE internship_id = '${iid.internship_id}'`;
            let innerQueryCount = `SELECT COUNT(student_id) FROM student_take_internship WHERE internship_id = '${iid.internship_id}'`;

            let innerData = await new Promise((resolve, reject) => {
                db.query(innerQuery, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            });
            let innerDataCount = await new Promise((resolve, reject) => {
                db.query(innerQueryCount, (err, data) => {
                    if (err) reject(err);
                    resolve(data);
                });
            });
            if (innerData.length > 0) {
                let obj = {
                    id: innerData[0].internship_id,
                    title: innerData[0].internship_title,
                    desc: innerData[0].internship_desc,
                    sdate: innerData[0].internship_startdate,
                    edate: innerData[0].internship_enddate,
                    count:innerDataCount[0]["COUNT(student_id)"]
                };
                dataArray.push(obj);
            }
        }
        // console.log(dataArray);
        res.json(dataArray); 
    }catch(err) {console.log(err);}
})

app.get("/company_location/:id",(req,res)=>{
    let id = req.params.id
    let query = `SELECT company_location.company_location FROM company_location WHERE company_id='${id}'`
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all company locations")
        return res.json(data)

    })
})

function addCompanyIDandInternshipID(cid,iid){
    let query = "INSERT INTO company_offers_internship(`company_id`,`internship_id`) VALUES(?)"
    let values = [cid,iid]
    db.query(query,[values],(err,data)=>{
            if(err) return res.json(err)
            return
      })
}
app.post("/internship_create",(req,res)=>{
    let query = "INSERT INTO internship(`internship_title`,`internship_desc`,`internship_startdate`,`internship_enddate`) VALUES(?)"
    let cid = req.body.cid
    let values = [
        req.body.title,
        req.body.desc,
        req.body.sdate,
        req.body.edate,
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
    // console.log(data.insertId);
        if(data.affectedRows==1){
            let iid = data.insertId
            addCompanyIDandInternshipID(cid,iid)
            return res.send(data)
                // let query = "INSERT INTO company_offers_internship(`company_id`,`internship_id`) VALUES(?)"
                // let values = [cid,iid]
                // db.query(query,[values],(err,data)=>{
                //     if(err) return res.json(err)
                //     return
                // })
        }
    })
})

app.get("/internship",(req,res)=>{
    let query = "SELECT * FROM internship;"
    db.query(query,(err,data)=>{
        if(err) return res.json("error occured while fetching all data")
        return res.json(data)

    })
})

app.delete("/delete/internship/:id",(req,res)=>{
    let ID = req.params.id
    let query = `DELETE FROM internship WHERE internship_id='${ID}'`
    db.query(query,[ID],(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json("internship deleted successfully")
        // return res.json(data)
    })
})

app.post("/studnetEnrollInternship",(req,res)=>{
    let query = "INSERT INTO student_take_internship(`student_id`,`internship_id`) VALUES(?)"
    let values = [
       req.body.sid,
       req.body.iid
    ]
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json(data)
    })
})

app.put("/student/update/:id",(req,res)=>{
    let query = "UPDATE student SET `student_name` = ?, `student_usn`=?,`student_phoneno`=?,`student_email`=?, `student_password`=?  WHERE student_id=?"
    let values = [
        req.body.name,
        req.body.usn,
        req.body.phoneno,
        req.body.email,
        req.body.password
    ]
    let ID = req.params.id
    db.query(query,[...values,ID],(err,data)=>{
        if(err) return res.json(err)
        // if(err) return res.json("error occured while inserting data")
        return res.json(data)
        // return res.json(data)
    })
})



app.listen(8282,()=>{
    console.log("server is running at port 8282");
})
