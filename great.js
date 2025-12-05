const arr =[2,9,5,10,20,22,25,26,29,30,25,38,34,39,40];
let binary = arr.filter(num =>num >20 && num <40)
.map((num,idx)=>{
    return `${num}  =  ${num.toString(2)}`;
})
console.log(binary);