//While loop//

const person = { name: "Jane", age: "23", city: "LA" }

function printObj(person) {

    let i = 0
    
    let keys = Object.keys(person);
    let values = Object.values(person);
    let count = keys.length;  // or va
    
    while (i < count) {
        console.log(keys[i] + ": " + values[i]);
      

        i++
    }
}
printObj(person)
//Object search//
const person2 = { name: "John", age: "24", city: "NY" }

function search (Object, key){
for(let k in Object){
    if(k === key){
        console.log("true")
        break;
    }else{
        console.log("false")
       
    }
    }
}
search(person2, "age")
search(person2, "John")
search(person, "age")
search(person, "gender")


