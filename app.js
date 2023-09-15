    //== Higher Order Function ==//


                // map //
/////////////////////////////////////////////////////////////
// const containerElement = document.querySelector(".container");
// let num = [10, 20, 30, 40, 50];
// function mapElements(array) {
//     let newArray = []
//     for (let index = 0; index < array.length; index++) {
//         newArray.push(convertElement(array[index]))
//     }
//     return newArray.join("")
// };

// function convertElement(element) {
//     return `<h1>${element}</h1>`
// }

// containerElement.innerHTML = mapElements(num)
///////////////////////////////////


// let newNum = num.map((item) =>{
//     return `<h1>${item}</h1>`
// })
// containerElement.innerHTML = newNum.join("");


////////////////////////////////////////////






            //   filter  //
///////////////////////////////////////////
// let num = [10, 20, 30, 40, 50];


// function filterElements(array) {
//     let newArray = []
//     for (let index = 0; index < array.length; index++) {
//         if (filterElement(array[index])) {
//             newArray.push(array[index])
//         }
//     }
//     return newArray
// };

// function filterElement(element) {
//     return element > 20
// }

// console.log(filterElements(num));
////////////////////////////////////////////


// let filterNum = num.filter(function (item) {
//    return item > 20 
// });
// console.log(filterNum);


///////////////////////////////////////////////////





                 // Reduce  //
///////////////////////////////////////////////////
// let num = [10, 20, 30, 40, 50];
// function reduceElements(array, init) {
//     let initial = init
//         for (let index = 0; index < array.length; index++) {
//             initial+= array[index]
//         }
//         return initial
// };


// console.log(reduceElements(num, 50));


///////////////////////////////
// let numbers = num.reduce((accumulator, current) =>{
//     return accumulator + current
// },50)
// console.log(numbers);
//////////////////////////////////////////////////