//Select elements
//get
    let x=document.getElementById("firstid")
    console.log(x)
    let y=document.getElementsByClassName("class")
    console.log(y)
    y=document.querySelector("div.class") //lzam . ll class//bnfs concept css
    //select awal 3onsar bs fe asm class da
    console.log(y)
    x=document.querySelectorAll(".class") //kol l elements elii wa5da asm l class da
    console.log(x)
    console.log(document.head)//de mesh function de proparity
    console.log(document.body)
    console.log(document.documentElement)//html kolo
    let c=document.title
    console.log(c)
    document.title="mayar"
    console.log(document.forms)
    console.log(document.images)
    console.log(document.anchors) //a eliimwgod feha attr name
    console.log(document.links) //a eliimwgod feh href
//style
    let e=document.getElementById("firstid")
    e.style.backgroundColor="red"
    console.log(e.style.backgroundColor)//proparity mwgoda gwa e //bs hna bygblii lw l stylemwgod gwa l tag
    //console.log(window.getComputedStyle(e))//kol l css leha //method bdeha parameter l e
    console.log(window.getComputedStyle(e).color)//color bs
    console.log(e.clientHeight)//elii zaher ll user
    console.log(e.scrollHeight)//kol l size b scroll
    console.log(e.offsetHeight)//by7sab l size bta3 l sheret bta3 scroll m3aya
    console.log(e.clientTop)//border
    console.log(e.offsetTop)//mn awall pae
    console.log(e.innerHTML) //kol elii w l div da 7ata lw tags
    console.log(e.textContent) //l text bs  //useful
    console.log(e.innerText) //l user shyfo bs y3nii ay hidden mesh hytl3ly
    let input=document.querySelector(".text")
    console.log(input)
    console.log(input.value)
    let radio=document.querySelector(".radio")
    console.log(radio)
    let link=document.querySelector(".link")
    console.log(link.href)//l attr fe html btb2a properties fe js
    //console.log(radio.checked)
// atrr and classes
    console.log(link.getAttribute("href"))//l kol l attr eliimwoda w mesh mwgoda k proparity
    link.setAttribute("href","#")
    console.log(link.getAttribute("href"))
    console.log(link.hasAttribute("target"))
    link.removeAttribute("href")
    console.log(link.classList) //l class elii mwoda fe ta da
    link.classList.add("newclass")
    link.classList.remove("newclass")
    link.classList.toggle("blue")//lw mwod htshelo w lw mesh mwod ht7oto
    link.classList.contains("blue")
    link.classList.replace("blue","b")
    console.log(link.classList.length)

//set
    e.textContent="<span>hi</span>"//hy3mlha anha text
    e.innerHTML="<span>hi</span> "//hy3mlha html
    input.value="merna"
    link.href="www.amazon.com"
//Create Nodes 
    let div=document.querySelector("div")
    let p=document.createElement("p") //a3ml paragraph
    p.textContent="hello from cloned text"//a7otolo text
    console.log(p)
    div.appendChild(p)//t7oto f a5er l div
    console.log("div",div)
    div.append(p,p)//ta5od ay 3dad 
    console.log("div2",div)
    div.insertBefore(p,document.getElementById("b")) //before ay id l reference child
    div.insertAdjacentElement("afterbegin",p)
    div.insertAdjacentHTML("afterbegin","<span>hi</span>")//yt3malm3 l kalm k html omalelii fo2 as text

    console.log(div)
    
    console.log(document.createTextNode("hi merna"))//b3ml create l text 3shan a7oto wa tag
    let c1=document.createComment("comment")
    console.log(c1)
    let y1=document.createAttribute("id")//a3ml atrr
    y1.value="name"
    console.log(y1)
    p.setAttributeNode(y1)//kda l tag p b7otlo attr
    console.log(p)
//clone node
    console.log(div.cloneNode())//mn 8er l kalam elii gwah
    console.log(div.cloneNode(true))//b l lamnfs ko haga
//Navigation
    //any akon f emkan w atn2al mkan tani reference leh as child parent etc
    console.log("--------")
    let p2=document.querySelector(".par")
    console.log(p2)
    console.log(p2.childNodes)
    console.log(p2.children)//imp
    console.log(p2.firstChild)
    console.log(p2.firstElementChild)//imp
    console.log(p2.lastChild)
    console.log(p2.lastElementChild)
    console.log(p2.childElementCount) //3dad l tags
    console.log(p2.nextElementSibling)
    console.log(p2.nextSibling)
    console.log(p2.previousElementSibling)
//Remove Elements
    p2.remove()
    div.removeChild(div.firstElementChild)
    




