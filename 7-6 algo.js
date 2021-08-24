//BUBBLE SORT

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - 1; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
//Test log
console.log(bubbleSort([3,9,7,2,5]))


//SELECT SORT

function selectSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        var temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
//Test log
console.log(selectSort([5,9,5,3,1,2]))

function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < arr[i-1]){
            //if # is suppose to go inside the sorted section 
            for(let j = i - 1; j >= 0; j--){
                if(arr[j] > arr[j+1]){
                    console.log(`swapping ${arr[j+1]} and ${arr[j]}`);
                    [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
                }
            }

        }
    }
    return arr 
}

console.log(insertSort([5,3,2,7,8,4]))