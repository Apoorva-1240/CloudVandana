const arr1=[24,23,18,76];
const arr2 =[54,23,12,97,100];
function arrSort(arr){
    arr.Sort((a,b)=>a-b);
    arr.reverse();
    return arr;
}
console.log(arrSort(arr1));
console.log(arrSort(arr2));