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
    let e=document.getElementById("firstid")
    e.style.backgroundColor="red"
    console.log(e.style.backgroundColor)//proparity mwgoda gwa e //bs hna bygblii lw l stylemwgod gwa l tag
    console.log(window.getComputedStyle(e))//kol l css leha //method bdeha parameter l e
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
//set
    e.textContent="<span>hi</span>"//hy3mlha anha text
    e.innerHTML="<span>hi</span> "//hy3mlha html
    input.value="merna"
    link.href="www.amazon.com"




