function Intersect(array1, array2){
    let result = [];
    for(let i =0; i < array1.length; i++){
        for(let j = 0; j < array2.length; j++){
            if(array1[i] == array2[j]){
                let found = false;
                for(let k = 0; k < result.length; k++){
                    if(result[k] == array1[i]){
                        found = true;
                    }
                }if(found == false){
                    result.push(array1[i])
                }
                
            }
        }
    }return result

}

function Union(array1, array2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            result.push(array1[i])
            i++
        } else if(array2[j] < array1[i]) {
            result.push(array2[j])
            j++
        } else {
            result.push(array1[i])
            i++
            j++
        }
        

    }
    if (i < array1.length) {
        for (let k = i; k < array1.length; k++) {
            result.push(array1[k]);
        }
    }
    if (j < array2.length) {
        for (let k = j; k < array2.length; k++) {
            result.push(array2[k]);
        }
    }
    
    return result 
}

console.log(Union([1,2,2,3,4],[1,2,5,7]))
console.log(Intersect([1,1,2,2,2,4], [1,2,4]))