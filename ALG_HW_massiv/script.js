const arrat1 = [100, 112, 256, 349, 770]
const array2 = [72, 86, 113, 119, 265, 445, 892]
//const k = 6
function findKElement(array1, array2, k){
    mergedArray = array1 + array2
    sortedArray = sort(mergedArray)
    kElement = sortedArray[k-1]
} return kElement