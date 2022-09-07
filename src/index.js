window.addEventListener('DOMContentLoaded', fetches())

//submit button & event listener
let submit = document.getElementById("sub")
submit.addEventListener('onsubmit', console.log('submitted'))

// let card= {
//     Name: e.target.new-name.value,
//     Restaurant: e.target.new-restaurant.value,
//     Image: e.target.new-image.value,
//     Rating: e.target.new-rating.value,
//     Comment: e.target.new-comment.value
// }   

//create function 
//NEEDS WORK!!               //diff class for CSS?
function create(e){
    e.preventDefault
    
}

function fetches(){
    fetch('http://localhost:3000/ramens')
    .then((res)=>(res.json()))
    .then((res)=>{res.forEach((i)=>(renderCard(i)))}
)}
//document.createElement('div').innerHTML(i)

function renderCard(i){
   let div = document.createElement('div')
    div.createTextNode = i
}
console.log(renderCard())
//I understand what I need to do theoretically, but I don't
//get why I can't create an element in HTML. I think I'm
//using the right commands. 

