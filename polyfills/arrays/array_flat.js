
// we have to handle two conditions:
// 1. when argument is Array 
// 2. when argument is non-array
Array.prototype.myFlat = function() {
    const output = []
    function flattenArray(arr) {
        for(let i = 0; i < arr.length; i ++) {
            if (Array.isArray(arr[i])) {
                flattenArray(arr[i])
            } else {
                output.push(arr[i])
            }
        }
        return output
    }
    return flattenArray(this);
}

const inputArray = [0, 1, 2, [3, 4, [5, 6]]];


console.log(inputArray.flat())