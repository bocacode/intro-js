function findMaxNumber(arr) {
   let biggestNum = arr[0]
   for (let i = 1; i < arr.length ; i++) { // loop through each number of array
     if (arr[i] > biggestNum) {
       biggestNum = arr[i]
     }
   }
   console.log(biggestNum)
}

findMaxNumber([1, 2, 3, 5, 6, 2, 1, 7])

const ages = [37, 38, 30, 22, 17, 25, 19, 24, 21, 20, 27, 32, 33, 45]
findMaxNumber(ages)
