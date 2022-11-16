
// we have to handle two conditions:
// 1. when argument is Array 
// 2. when argument is non-array
Array.prototype.myConcat = function(){
    const argumentBunch = arguments;
    // "this" here refers to the reference with which you invoke the myConcat i.e "arr1"
    let inputArray = this;

    for (let i = 0; i < argumentBunch.length; i++) {
        // handling case when array
        if(Array.isArray(argumentBunch[i])){
           inputArray = pushValues(inputArray, argumentBunch[i])
        } else {
            // handling case when non-array
            inputArray.push(argumentBunch[i]);
        }
        
    }
    return inputArray;

}

function pushValues(src, dest) {
    for(let i = 0; i < dest.length; i ++) {
        src.push(dest[i])
    }
    return src
}

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const value1 = 'y'
const value2 = () => {}
const value3 = undefined
const value4 = null

console.log(arr1.myConcat(arr2, value1, value2, value3, value4))