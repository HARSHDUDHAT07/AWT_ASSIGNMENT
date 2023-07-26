let arr = [2, "Harsh Dudhat", 5.25, 6.58965, 9];

console.log("Length of the array:", arr.length);

console.log("Element at index 2:", arr[2]);

arr.push("Jyot"); 
//created by Harsh Dudhat 21CE026
console.log("After push new Array :", arr);

arr.pop();
console.log("After pop : ", arr);

arr.unshift(0); 
console.log("After unshift : ", arr);

arr.shift();
console.log("After shift:", arr);

let joinedArray = arr.join(", ");

console.log("Joined array:", joinedArray);

delete arr[2]; 
console.log("After delete:", arr);

let newArray = arr.concat([6, 7, 8]); 
console.log("Concatenated array:", newArray);

let flattenedArray = newArray.flat(); 

console.log("Flattened array:", flattenedArray);

let splicedArray = arr.splice(1, 8, 18, 11); 

console.log("After splice:", arr);

let slicedArray = arr.slice(2, 7);

console.log("Sliced array:", slicedArray);

let person = {
  name: "Harsh Dudhat",
  age: 20,
  gender: "Male",
};

function displayPersonDetails(person) {
  console.log("Name:", person.name);
  console.log("Age:", person.age);
  console.log("Gender:", person.gender);
}

displayPersonDetails(person);
