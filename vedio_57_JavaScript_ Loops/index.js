console.log("I am a tutorial on loops");
 let a=1;

 for(let i=0;i<100;i++){
    console.log(a+i);
 }

 let obj ={
    name: "Arghya",
    role: "Developer",
    age: "25",
    company: "ArghyaInovator"
 }
  
 for (const key in obj) { // for objects
    console.log(key)
    
    
 }

 for (const c of "Arghya") { //for array

    console.log(c)
    
 }

 let i=0;
 while(i<6){
    console.log(i)
    i++;
 }

let i =0;
 do {
    console.log(i)
    i++;
    
 } while (condition);