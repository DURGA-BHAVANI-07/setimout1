// function a(x){
// console.log(x());
// }
// a(function b(){
//     console.log("bhavani");
// })

setTimeout(()=>{
    alert("ordered")
},1000)

setTimeout(()=>{
    alert("shipped to nearest hub")
},10000)

setTimeout(() => {
  alert("delivery person outfor the delivery");
}, 12000);

setTimeout(() => {
  alert("order received");
}, 15000);
