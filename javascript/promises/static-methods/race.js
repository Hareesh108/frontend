const Api1 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("Resolve1")
    },5000)
    
    setTimeout(()=>{
        reject("Reject")
    },1000)
})

const Api2 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("Resolve2")
    },3000)
    
    // setTimeout(()=>{
    //     reject("Reject")
    // },1000)
})

const Api3 = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        resolve("Resolve3")
    },4000)
    
    // setTimeout(()=>{
    //     reject("Reject")
    // },1000)
})

const res = Promise.race([Api1,Api2,Api3]).then((value)=>{
        console.log(value)
    }).catch((error)=>{
        console.log(error)
    })


// Api1.then((value)=>{
//     console.log("value:",value)
// }).catch((error)=>{
//     console.log(error)
// })