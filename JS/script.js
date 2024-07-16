// Array creation and initialization
function arrayCreation(arr){
    return arr
}
let arr=[10,20,30,40,50];
console.log("Array creation and initialization ",arrayCreation(arr))


// Array Manipulation
function pop(arr){
    arr.pop() 
    return arr
}
function push(arr){
    arr.push(23)
    return arr
}
let arr1=[1,2,3,4,5]
console.log("Array after poping",pop(arr1))
console.log("Array after pushing",push(arr1))


// Array Sorting
function sorting(arr){
    return arr.sort()
}
let arr3=[34,23,75,98.45,21,65]
console.log("Array after sorting",sorting(arr3))


// Array Searching
function index(arr){
    return arr.indexOf(83)
}
function reverse(arr){
    arr.reverse()
    return arr
}
let arr4=[12,65,34,83,39,62,87]
console.log("Index value of 83 is ",index(arr4))
console.log("Array after reversing ",reverse(arr4))


// Array Joim and Splitting
let arr5=[56,25,98,77,54,13]
console.log("Array using join function",arr5.join(" / "))
let arr6=arr5.join(" ")
console.log("Array using split function",arr6.split(" "))


