
document.getElementById("message").innerHTML = "<h1>" + "Hello World" + "</h1>"

var string = "look at this"
document.getElementById("blam").innerHTML = "<h1>" + "look at this" + "</h1>"
console.write("string")

function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	//test it
	console.log("your username is " + username + " and your password is " + password)
}
function displayText() {
var userInput = document.getElemnetById('userInput').
	value
	console.log(userInput)
}

var food = ["hotdog", "pizza", "burger", "cake", "chips"]

for (i = 0; i < food.length; i++) {
	console.log(food[i])
}

var topObject = {
	onions: "grilled",
	cheese: "melted",
	price: 10
}
console.log(topObject.onions)
console.log(topObject.cheese)
console.log(topObject.price)

var overwatchArray = [
	{
		name: "mercy",
		type: "support",
		rank: 10
	},
	{
		name: "Ana",
		type: "support",
		rank: 10
	},
	{
		name: "D.V.A.",
		type: "tank",
		rank: 9
	},
	{
		name: "tracer",
		type: "attack",
		rank: 5
	},
	{
		name: "junkrat",
		type: "defense",
		rank: 8
	}

]

for(i = 0; i < overwatchArray.length; i++){
	if(overwatchArray[i].rank <= 9){
		console.log(overwatchArray[i].name + " " + overwatchArray[i].rank)
	}
}




