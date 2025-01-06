//Object literal
// let customerInfo = {
//     customerName: "Ibraheem",
//     customerAge: 25,
//     occupation: "Product Designer"
// }
// console.log(customerInfo)

//Array 
// let myArray= [
//     "Shoes",
//     "Bags",
//     "Babes",
//     "Phones"
// ];


// let arrayOutput = myArray[1];
// console.log(arrayOutput);

// const myFunction=(itemOne, ...otheritem)=>{
//     let firstItem=itemOne;
//     let secondItem= otheritem;

//     let totalItem = firstItem + secondItem;
//     return totalItem;
// }

// console.log(myFunction(200,300));

// let x = -1
// if(x>0){
//     console.log("positive");
    
// }else if(x < 0){
//     console.log("Negative");
    
// }else{
//     console.log("zero")
// }
function greet(name= "Guest"){
    return `Hello, ${name}`
}

console.log(greet())