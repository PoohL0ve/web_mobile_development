/**
 * The mergeSort algorithm arranges an array in ascending order
 * by splitting the array in half, arranging each half then
 * merging the two halves. The process is repeated until the array
 * is in ascending order.
 */

const mergeSort = (series) => { 
    if (series.length <= 1) {
        return series;
    }

    // Find the middle point to divide the array into two halves
    const middle = Math.floor(series.length / 2);
    const leftHalf = series.slice(0, middle);
    const rightHalf = series.slice(middle);

    // Recursively sort the two halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

const merge = (leftArr, rightArr) => {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from left and right arrays and push the smaller one
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArray.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from left or right (one of them will be empty)
    return resultArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
console.log(mergeSort([2, 3, 1]));