alert("Hello")
let searchBar = document.querySelector("#searchBar");

searchBar.addEventListener('keydown', searching)

function searching(){

let value = searchBar.value

let names = document.querySelectorAll("li.contact-name")

for (let i>0; i < names.length; i++ ){
let name = names[i]
	console.log(name)
}

}




