
serverUrl = "http://localhost:3000/"

const renderer = new Renderer()
const sendIngridientQuery =  function() {

    let input = $("#item-input").val()
    $.get(serverUrl + `recipes/${input}`, function(recipes) {
        
        renderer.render(recipes.recipes)

    })
}

$("#req-btn").click(sendIngridientQuery)



