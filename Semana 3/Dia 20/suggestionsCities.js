const express = require('express')
const route = require('./suggestionsCities')
const app = express()
const axios = require('axios')

app.use('/suggestions', (req, res) => {
    const query = req.query.q

    axios.get(`https://nominatim.openstreetmap.org/search/${query}?format=json`).then((result) => {
        res.send(result.data.filter((item) => {
            if (item.type === 'city') return item
        }))
    }).catch((err) => {
        console.log(err)
    })
        

})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})