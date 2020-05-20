let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify("https://example.com/" + element));
}
console.log(functionalUrls(states));

console.log("Includes:");

function dakotaDouble(string) {
  return string.toUpperCase().split(/\s+/)
}

function functionalDakota(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

function functionalDouble(elements) {
  return elements.filter(element => element.split(/\s+/).lenght === 2);
}

// singles: Functional version
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log("contains Dakota: ", functionalDakota(states));
console.log("contains Double: ", functionalDouble(states));
console.log("contains Double: ", functionalDoubles(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// multiply: Funtional solution
function multiplyImp (elements) {
  let total = 1;
  elements.forEach(function(n) {
    total *= n
  });
  return total;
}
console.log(multiplyImp(numbers));

function functionalImp (elements) {
  return elements.reduce((element, total) => {total *= element};
    return total;
  }, 1);


  // lengths: Functional solution
  function functionalLengths(elements) { return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {}); }
  console.log(functionalLengths(states));
