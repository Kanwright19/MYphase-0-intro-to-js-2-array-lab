// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
//

function destructivelyAppendCat(catName) {
  cats.push(catName);
}  

function destructivelyPrependCat(catName){
    cats.unshift(catName);
}
    
function destructivelyRemoveLastCat(catName) {
    cats.pop(catName);
}

function  destructivelyRemoveFirstCat(catName){
    cats.shift(catName);
}



function appendCat (newCatName) {

const newArr = cats.slice();
    newArr.push(newCatName);
        return newArr;
};


function prependCat(newCatName) {
    
const newArr = cats.slice();
    newArr.unshift(newCatName)
        return newArr
};


const removeLastCat = function () {
    const newArray = cats.slice();
    newArray.pop();
        return newArray;
};

const removeFirstCat = function () {
    const newArray = cats.slice();
    newArray.shift();
    return newArray;
};