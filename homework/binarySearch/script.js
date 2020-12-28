function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
}

function recursiveBinarySearch(arr, element, start, end){
    //Base condition
    if (start > end) return false;
    //Find the middle index
    let middle = Math.floor((start + end) / 2);
    //Compare mid with given key x
    if (arr[mid] === x) return true;
    //If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x ) 
        return recursiveBinarySearch(arr, x, start, mid-1);
    else
        //If element at mid is smalelr than x,
        // search in the right half of mid
        return recursiveBinarySearch(arr, x, mid+1, end)
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}