let searchBar = document.querySelector("#searchBar");

searchBar.addEventListener('keyup', searching)

function searching(){

let value = searchBar.value

let names = document.querySelectorAll("li")

for (let i=0; i < names.length; i++ ){
let name = names[i].innerHTML

if(name.toUpperCase().includes(value.toUpperCase())){
	names[i].style.display = 'block'

}
else{
	names[i].style.display = 'none'

}
	
	}

}




