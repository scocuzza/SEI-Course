// function bubbleSort(array) {
//     let swapped = true;
//     let i = 0
//     let tmp

//     while(swapped) {
//         swapped = false
//         for(let i = 0; i < array.length; i++) {
//             if(array[i] > array[i + 1]) {
//                 tmp = array[i]
//                 array[i] = array[i+ 1]
//                 array[i + 1] = tmp
//                 swapped = true
//             }
//         }
//     }
//     return array
// }

// function insertionSort (items) {
//     // Loop through each element
//     let tmp;
//     for(let i = 0; i < items.length; i++) {
//         let j = i - 1
//         tmp = items[i]
//         while (j >= 0 && items[j] > tmp) {
//             items[j + 1] = items[j]
//             j--
//         }
//         items[j+1] = tmp
//     }
//     return items
//   }


function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(
        mergeSort(left), 
        mergeSort(right)
        )
  }

  function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
        } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
  }



let array = [4,3,8,5,8,1,34,5,6]
console.log(mergeSort(array.slice()))
// console.log(bubbleSort(array)); 
// console.log(insertionSort(array)); 
