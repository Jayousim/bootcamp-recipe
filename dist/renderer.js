
const source = $('#recipe-template').html();
const template = Handlebars.compile(source)
const container = $('#container')


class Renderer{
    constructor(){

    }

    render(recipes){
        container.empty();
        newHtml = template({recipes: recipes})
        container.append(newHtml)
    }
}