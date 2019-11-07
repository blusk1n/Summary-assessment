var text = document.getElementById("text")
var colors = document.getElementById("colors")
var button =  document.getElementById("btn")
var ul =  document.getElementById("ul")

button.onclick= function(){
	if(colors.value === "blue" || colors.value === "yellow" || colors.value === "red")
		ul.innerHTML += "<li class='"+ colors.value+"'>"+text.value+"</li>"
}