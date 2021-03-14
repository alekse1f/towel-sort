
// You should implement your task here.

module.exports = function towelSort(arr = []) {
    let result = [];

    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            Array.prototype.push.apply(result, arr[i]);
        } else {
            const arrR = arr[i].reverse();
            Array.prototype.push.apply(result, arrR);
        }
    }

    return result;
}
