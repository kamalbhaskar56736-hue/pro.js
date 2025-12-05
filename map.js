const arr=[1,2,3,4,5,6];

const newarray=[];
idx=0;

arr.map((value,index)=>{
        if((arr[index])%2===0){
            newarray[idx++]=arr[index];
        }
})

console.log(newarray);