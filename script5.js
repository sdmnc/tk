
//Lesson 20
//1. **Задача усреднения**. У нас есть массив объектов, которые представляют оценки учащихся на экзамене.//

const studentGrades = [{
    name: "Anna", note: 9
},
{ name: "Cristian", note: 9 },
{ name: "Denis", note: 8 },
{ name: "Daniel ", note: 6 },
{ name: "Elena", note: 10 },
{ name: "Vali", note: 5 },
]

const averageGrade = studentGrades.reduce((sum, student) => sum + student.note, 0) / studentGrades.length;
console.log(`The average grade is: ${averageGrade}`);


//2. **фильтрация и сопоставление**

const products = [
    { name: "Tshirt", price: 50, isAvailable: true },
    { name: "Pants", price: 80, isAvailable: false },
    { name: "Jacket", price: 120, isAvailable: true },
    { name: "Shirt", price: 60, isAvailable: true },
    { name: "Skirt", price: 40, isAvailable: false }
];

const availableProducts = products.filter(product => product.isAvailable === true);
const names = availableProducts.map(availableProducts => availableProducts.name);
console.log(names)

//** Нахождение максимального элемента**://

const numbers = [55, 6, 83, 42, 777, 555, 4, 999]

const maxNumber = numbers.reduce((accumalator, currentValue) => { return Math.max(accumalator, currentValue); })
console.log(maxNumber);

//4. ** Классификация студентов. **

let students = [
    { John: [8, 7, 9] },
    { Mary: [9, 9, 10] },
    { Alex: [6, 8, 7] }
]
function calculateAverageGrades(students) {
    const grades = students.reduce((acc, student) => {
        const studentName = student.name;
        const studentGrades = student.grades;
        const totalGrades = studentGrades.reduce((sum, grade) => sum + grade, 0);
        const averageGrade = totalGrades / studentGrades.length;
        acc[studentName] = averageGrade;
        return acc;
    }, {});
    return grades;
}

//Lesson 22 + HW //
//Написать стрелочную функцию которая в качестве параметра принимает объект с данными о студенте

let student = {
    name: "John",
    lastName: "Doe",
    faculty: "history",
    year: 3
};
function desturction(obj) {
    const { name, lastName } = obj;
    const fullName = `${name} ${lastName}`;
    return { ...obj, fullName };
}

const updatedProfile = desturction(student)
console.log(updatedProfile);




