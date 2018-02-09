function forEach (array, callBack){
    const result = [];
    for (let i = 0; i < array.length; i++){
        result.push(callBack(array[i]));
    }
    return result;
}

module.exports.forEach = forEach;

// let arr = [1, 2, 3];

// arr.forEach(function(nums) {
//   console.log(nums);
// });

