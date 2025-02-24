function logThis() {
    console.log
   (this)
   }
   const obj = {
    logThis
   ,
    logThis2() {
    return logThis()
    },
    logThis3() {
    return obj.logThis();
   
   }
   }
   obj.logThis();
   obj.logThis2();
   obj.logThis3();