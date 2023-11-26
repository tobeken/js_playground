//mapとfilter
const arr =[10,20,30,40];
const newArry = [];

for(let i = 0; i <arr.length;i++){
    const val = arr[i] * 2;
    if(val > 50){
        newArry.push(arr[i]*2)
    }
    
}

console.log(newArry)
const newArry2 = arr.map((val,i) =>val * 2)
console.log(newArry2)

const newArr3 = newArry2.filter(val => val > 50)
console.log(newArr3)