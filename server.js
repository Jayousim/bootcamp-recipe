const express = require('express')
const httprequest = require('request')
const app = express()
const url = 'https://recipes-goodness.herokuapp.com/recipes/'


const exractRecipeData = u => { return { ingredients: u.ingredients, title: u.title, thumbnail: u.thumbnail, href: u.href}}

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


app.get('/sanity', function(req, res){
    console.log('fareed')
    res.send('fareed')
})

app.get('/recipes/:ingredient', function(request, response){
    ingredient = request.params.ingredient
    console.log(ingredient)
    const options = {
        url: url + ingredient,
        method: 'GET'
    }
    httprequest(options, function(err,res, body){
        const bodyJson = JSON.parse(body)
        const recipes = bodyJson.results
        console.log(recipes[0])
        response.end({ message: recipes });
    })
})

