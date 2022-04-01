let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];

{/*
const names = []
for (let i = 0; i < students.length; i++) {
    const result = students.name[i]
    names[i] = result
}
*/}
const trueStudents = []
for (let i = 0; i < students.length; i++) {
// ...students[i] - поверхностная копия массива
    const result = {...students[i], isStudent: true}
    trueStudents[i] = result
}

// функция MAP
const myMap = (arr, callBack) => {
    const newArr = [];
    for (let i = 0; i < students.length; i++) {
        const result = callBack(arr[i]);
        newArr[i] = result
    }
    return newArr
}
console.log(myMap(students, s = () => s.name))

// функция Filter

const myFilter = (arr, callBack) => {
    const newArr = [];
    for (let i = 0; i < students.length; i++) {
        if (callBackarr[i] === true)
            newArr.push(arr[i])
    }
    return newArr
}
callFilterFunction = s => s.age >= 20
//consol.log(myFilter(students, callFilterFunction))
//consol.log(students.filter(callFilterFunction))

// функция Filter

const myFind = (arr, callBack) => {

    for (let i = 0; i < students.length; i++) {
        if (callBack(arr[i])?
        return true
    }
}
    console.log(myFind(students, s => s.name === "Alex"))