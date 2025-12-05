const arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const binary=arr.map((num,index)=>{
    return `${index}  =  ${num.toString(2)}`;
})
console.log(binary);
