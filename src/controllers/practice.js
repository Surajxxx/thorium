// const axios = require('axios')

// const getByDistrict = async function (req,res){
//     try{
//         let district = req.query.district_id
//         let date = req.query.date
//         if(district && date){
//             let options = {
//                 method: "GET",
//                 url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${district}&date=${date}`
//             }
//             let result = await axios(options)
//             console.log(result)
//             res.status(200).send({status: true, msg: result.data})

//         }else{
//             res.status(400).send({status: false, msg:"please provide input data" })
//         }

//     }catch (error){
//         res.status(500).send({error: error.message})
//     }
// }

// module.exports.getByDistrict = getByDistrict

// let arr = []
// arr[0] = 5
// console.log(arr)
// let obj = {}
// obj["name"] = "suraj" // obj.name = "suraj"
// console.log(obj)