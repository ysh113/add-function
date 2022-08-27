const toDo = document.getElementById("to-do")
const button = document.getElementsByClassName("btn")
const lists = document.getElementById("lists")
const myForm = document.getElementById("my-form")

myForm.addEventListener('submit', onsubmit)


function onsubmit(e){
    e.preventDefault()
   const li = document.createElement("li")
   li.appendChild(document.createTextNode(`${toDo.value}`))
   lists.appendChild(li)
   document.getElementById("to-do").value = ""
}

lists.addEventListener('click', function(e){
    this.removeChild(e.target)
})