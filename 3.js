
function bableSort(data){
    let even = []
    let odd = []
    // looping index
    for(let i=0; i<data.length-1; i++){
        // looping perbandinngan data
        for(let j = 0; j<data.length-1; j++){
            // algoritma bablesort
            if (data[j] > data[j+1]){
                let temp = data[j]
                data[j] = data[j+1]
                data[j+1] = temp
            }
    }
    }
     
    for (let i = 0; i < data.length; i++) {
        if(data[i] % 2 == 0){
            even.push(data[i])
        }else{
            odd.push(data[i])
        }  
    }
    
    
    console.log('Array : '+ data);
    console.log(`Ganjil : ${odd}`);
    console.log(`Genap : ${even}`);
}

bableSort([2,24,32,22,31,100,56,21,99,7,5,37,97,25,13,11])