const request = require('postman-request')
const axios = require('axios')
const url = "http://api.weatherstack.com/current?access_key=6ffb6f5609ecb2fa5060f1c92bb121e3&query=37.2682,49.5891"

// request({url:url},(error,response)=>{
//     console.log(response)
// })

axios.get(url)
    .then(res=>console.log(res))
