let arr =[1,2,3,4,5,6,7,8,9,10]
// console.log(arr);

// Use filter to find even numbers
let evenNumbers = arr.filter(num => num % 2 === 0);

console.log(evenNumbers); 
 let array =[12,13,14,15,16,17,18]
 // square using map
 let square = array.map(array=>array**2)
 console.log(square)
 //splice 3rd element fromm arr
 arr.splice(2,1)
 console.log(arr);
 // concatination 
  let combined =arr.concat(array)
 console.log(combined);
 //check for specific value

  console.log( arr.includes(2));// return true 
   arr.push(11)
   arr.push(44)
   arr.push(99)
   console.log(arr);
//pop last element
arr.pop()
console.log(arr);
// remove ist element from an array
arr.shift()
console.log(arr);
let newarr =[]
newarr.push(100)
console.log(newarr);
console.log(newarr.length);
let fianlarr = []
fianlarr.push(33,44)
fianlarr.pop()
console.log(fianlarr)


//objects
let obj ={
    name:"qurat",
    class:10,
    age:17,
    school:"bhss",
    fee:1200

};
let obj2={
    name:'saima',
    class:5,
    age:14,
    subject: "hindi",
    location:"anantnag"

};


let object= Object.assign({},obj,obj2)
console.log(object);
//        another method
// console.log(obj.name);
// let combinedobj ={...obj, ...obj2};

// console.log(combinedobj);
 Object.freeze(obj)
 obj.age=20//chnage the value after freeezing 
 console.log(obj);// return original object nothing will be added
 console.log(Object.hasOwnProperty(obj))// return true or false
 console.log(Object.entries(obj2));