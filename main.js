const d = {
    name: "Max",
    age: 50,
    address: {
        city: "Anapa",
        street: "Gogol",
        number_house: 168
    }
};

// Copy object
// 1. Using spread operator
let s1 = {...d};

// 2. Using Object.assign()  method

let s2 = Object.assign({}, d);

// 3. Using JSON

let s3 = JSON.parse(JSON.stringify(d));

// 4. Deep copy

let s4 = JSON.parse(JSON.stringify(d));

// 5. Deep copy using recursion

const deepCopyFunction = (d) => {
    let outObject = {};
    for (let i in d) {
        if (d[i] !== null && typeof(d[i]) === "object")
        outObject[i] = deepCopyFunction(d[i]);
    else
        outObject[i] = d[i];
    }
    return outObject;
}


let s5 = deepCopyFunction(d);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);