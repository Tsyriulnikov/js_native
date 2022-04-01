// arr.sort((a,b) => a<=b ? -1: 1)
// arr.sort((a,b) => a<b ? -1:1)
// arr.sort((a,b)=> a - b)

const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
sortStud = [...students.sort((a,b)=>a.age - b.age)]
console.log(sortStud)
console.log(students)
console.log(students===sortStud)

// bubble sort
let arr = [3,6,1,5,2,67,4]

// for (let j = 0; j <arr.length-1 ; j++) {
//     for (let i = 0; i < arr.length-1-j; i++) {
//         (arr[i] > arr[i+1]) && ([arr[i], arr[i+1]]=[arr[i+1], arr[i]])
//     }
// }
console.log(arr)


arr.forEach(()=>arr.map((el,i,array)=>(el>array[i+1])&&([array[i],array[i+1]]=[array[i+1],array[i]])))
console.log(arr)