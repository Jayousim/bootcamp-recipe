const express = require('express')
const request = require('request')
const app = express()
const url = 'https://recipes-goodness.herokuapp.com/recipes/'

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


app.get('/sanity', function(req, res){
    console.log('fareed')
    res.send('fareed')
})

app.get('/recipes/:ingredient', function(req, res){
    ingredient = req.params.ingredient
    const options = {
        url: url + ingredient,
        method: 'GET'
    }
    request(options, function(err, res, body){
        console.log(body)
    })
    
})
