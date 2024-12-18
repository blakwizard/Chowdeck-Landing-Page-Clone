
// let customerInfo = {
//     customerName: "Ibraheem",
//     customerAge: 25,
//     occupation: "Product Designer"
// }
// console.log(customerInfo)
// let myArray= [
//     "Shoes",
//     "Bags",
//     "Babes",
//     "Phones"
// ];

// let arrayOutput = myArray[1];
// console.log(arrayOutput);

const myFunction=(itemOne, ...otheritem)=>{
    let firstItem=itemOne;
    let secondItem= otheritem;

    let totalItem = firstItem + secondItem;
    return totalItem;
}

console.log(myFunction(200,300));