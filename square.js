let x = 5
let y = 6


function square(x,y) {
	return x * y
}

let altSquare = (x,y) => {
	return x * y
}

console.log("square", square(x,y))
console.log("altSquaere", altSquare(x,y))