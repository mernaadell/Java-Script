console.log("hello") //output
let name="merna"
let x=10
console.log(x)
x="hi" //dynamic type
console.log(x)
const t=11
//t=1 //error
console.log(t)
//-----------data types-------------
    //->premitives
    //boolean,numbers,string,null,undefiend,Nan,symbol
    let b=true
    console.log(typeof(b))//boolean
    let s
    console.log(typeof s)//undefined idont know what is inside the box
    let e=null //i know the box is empty
    console.log(e)
    //->objects
    //objects(key,value),functions(block ofcode),arrays,dates,collections
    //mutable ->you can change a part of value(array,object)
    //unmutable ->you cant(string,numbers)
//--------------opertaors----------
    //->unary (type of)
    //->binary(1+2) arithmatics
    console.log(5+2,5-10,5%10,2**4)
    console.log(x++) //nan cause xis string
    x=10
    console.log(++x)
    //comparssion
    console.log(3>10)
    console.log(3==10)
    console.log(10===10)
    console.log(3!=10)
    console.log(10!==10)
    console.log(3&&0)
    console.log(10||0)
    console.log(3*"6")  //convert string to number
    console.log(3+"h")  //convert number to string
//condition statment
    if(x>6){
        console.log("hello from if")
    }
    else{
        console.log("hello fromelse")
    }
    let y= 3>2 ?"hi":"no"//ternary operator
    console.log(y)
    x=1
    switch (x){
    case 1:
        console.log("hiii")
        break
    }
//looping
    for(let i=0;i<10;i++){
        console.log(i)
    }
    y=0
    console.log("while")
    while(y<10){
        console.log(y)
        y++
    }
    y=0
    do{
        console.log("first")
        y++
    }while(y>10)
    outerloop:
    for(let i=0;i<10;i++)
    {   innerloop:
        for(let j=0;j<10;j++){
            console.log("im in inner")
            if(i==3)
            break outerloop
        }
    }




    




