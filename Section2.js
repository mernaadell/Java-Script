//------functions
function pow(x,y){
    console.log(x**y)
}
pow(2,5)
let pw=function pow(x,y){
    console.log(x**y)
}
pow(2,5)
//higher order fuction
let pw1=function (){
    console.log("hi1")
    return function second(){
        return 5
    }
}
console.log(pw1())
//arrow function
let pw2= first =>{
    console.log("hi2")
    
}
console.log(pw2(2))

let pw3= () =>{
    console.log("hi3")
    
}
console.log(pw3())
let pw4= x =>{ //take one parameter
    console.log("hi4",x)
    
}
console.log(pw4(1))
let pw5= x =>x //y3ml return l x
console.log(pw5(29))
//pure function
y=1 
let inc=(x)=>{ //law adat ll function y hy8yar feha
    x++
    return x
}
y=inc(y)
console.log(y)
//----------scopes
//ay global a2dar a3mal access mn ay mkan
//functional scope
let c=()=>{
    x=10
}
//block scope
{
    let d=19 //mesh h2dar awsalo
    var f=17 //hshofo bra
    console.log("imin scope")
}
//IIFE funcion+call
(function fun(x){
    console.log("hello")
})(10)