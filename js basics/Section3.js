//numbers
    let x=9864 
    let y=13.11 //all types are numbers
    let z=1.311e+1
    console.log(x.toExponential()) //l numers 3obaa 3n objects gwaha methods
    console.log(y.toFixed(2)) //round string
    console.log(y.toString(2)) //binary
    //infinty &NAN
    console.log(5/0)//infinty
    console.log("hi"*2)//nan
    console.log(isNaN(NaN))
//strings
    console.log("hello\x66") //asci
    //Template Literals 
    let s=`hello
     merna` //by7as b enter
     let s2='   hi ${}  '
     console.log(s2)
     console.log(s2.trim())
//arrays
    let arr=[1,2,4,0]
    console.log(arr)
    arr[4]=11
    console.log(arr)
    console.log(arr.length)
    console.log(arr.sort())
    console.log(arr.push(5)) //ydef fe la5er
    console.log(arr.pop())//y7zaf mn l a5er
    console.log(arr.shift()) //y7zaf mn awal
    console.log(arr.unshift(1))//ydef mn awal
    console.log(arr.splice(3,0,"hi")) //mn awal index 3 aktab hi
    console.log(arr)
    console.log(arr.splice(3,2))
    console.log(arr.fill("*",1,5))
    console.log(arr.copyWithin(1,0,3))//y7ot eliimfrod kanm7tot mn index 0,3 mn awal 1
    console.log(arr)
    console.log(arr.slice(1,2))//ytl3 goz2
    arr2=[4,3,2]
    console.log(arr.concat(arr2))
    console.log(arr.reverse()) //bt8yar fe array
    console.log(arr.toString()) //yshel brackets
    console.log(arr.join(""))//yshel ,
    let arr3="mena".split("")
    console.log(arr3)
    console.log(arr2.indexOf(5))
    console.log(arr2.includes(6))
    console.log(arr2.find(e=> e>1 ))//awe3onser bs
    console.log(arr2.filter(e=> e>1 ))
    console.log(arr2.every(e=> e>1 ))//boolean 3la kol l elements
    console.log(arr2.some(e=> e>1 ))//wa7ed atleast
//Mapping
   arr.forEach(e=>console.log(e)) //loop bta5od call back function
   let a=arr.map(e=>e++)//l nateg elii b3mal 3leh op arg3ofe arr gdeda call back function a3ml elii ana 3wzah fe array elements
   console.log("hi",a)
   console.log(arr.reduce((p,c)=>p+c)) //bta5od 2 parameters previous =0and current awal element
   console.log(arr.reduceRight((p,c)=>p+c))//mn l ymen
   console.log(typeof arr)
   console.log(Array.isArray(arr))
//2D array
    let d2=[
        [1,2],
        [2,1]
    ]
    console.log(d2[1][1])
    for(let i of d2){
        for(let j of i)
        {
            console.log(j)
        }

    }
    console.log("len",d2.length)
    for(let i=0 ;i<d2.length;i++){
        for(let j =0;j<d2.length;j++)
        {
            console.log(d2[i][j])
        }
    }
//Destructing Assignment 
    let [a1,b1,c1,d1]=arr
    let ob={
        a:1,
        b:2,
        c:3
    }
    let {f,g,h}=ob
    console.log("hi mon")

    console.log(f)
//Spread Operator
    let g2=[1,2,3]
    function sum(a,b,c){
        let sum=0
        g2.map(e=>sum=+e)
        return sum

    }
    console.log(sum(...g2)) //lazem ...
    let [c,...z2]=g2
    console.log(z2) //array of 2 elements
//Array Constructor
    let u=Array(5) //size
    console.log(u)
    let u2=Array.of(1,2,3)//elements
    console.log(u2)
    let u3=Array.from({length:5},(e,i)=>i) //y3ml array mn lengh 5  w ymlah b l function  i -> index e->elements elii f array
    console.log(u3)
// Arrays are by Reference 
    let a2=[1,2,3]
    let b2=[5,19,3]
    b2=a2
    a2[2]=18//by reference
    console.log(b2)
    b2=Array(a)
    b2[0]=17
    console.log(a2)//mesh htt8yar hna by vlue
//Type Conversion
    //bsta5od l constructor
    let x2=Number("")
    console.log(x2)
    x3=parseInt("5")
    console.log(x3)
    let a3=[1,2,3]
    a4=Object(a3) //hya hya 3shan  array 3obara 3n object
    console.log(a4)
    x3=Object(x3)
    console.log(x3) //Math Object
    let x5=Math.floor(5.2)
    console.log(x,Math.E)
    let y5=[1,3,5,2,4]
    console.log(Math.min(...y5))
    console.log(Math.random()) //mn 0 l 1
    console.log(Math.random()*10)
//Strict Mode -
    r=10//global
    console.log(r)
    'use strict'
    j=20
    console.log(j)//prop hya l type



