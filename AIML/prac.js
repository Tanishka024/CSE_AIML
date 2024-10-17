// // console.lof("Hello")

// // function aa(){
// //     console.log("first");
// // }
// // aa();

// // (function() {
// //     console.log("Second");
// // })();

// // //through arrow
// // () => {
// //     console.log("Third");
// // }

// // //through constructor
// // let a= new Function('console.log("Fourth")');

// // setTimeout(aa,4000)

// // console.log("World")

// function rollNumber(num,delay, nextroll){
//     settimeout(()=>{
//         console.log("Roll no.is ",num);
//         if(nextroll) nextroll();
//     },delay);
//     }
// ;const promise_new Promide((resolve,reject) => {
//     console.
// })



function  getroll(num, delay){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Roll.No. is:",num);
            resolve("Successfully done");
        }, delay);
    });
}
getroll(i,1000).then(() => {
    getroll(2,2000).then(() => {
        
    })
})
