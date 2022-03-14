const sections = document.getElementsByTagName('section');
const nav = document.getElementsByClassName('items');
let tarjetas = document.getElementsByClassName('tarjetas');
let fotoIndex = 0; 
Class = "";
let proyectos = "";
let novedadesIndex = 0;
let mobileMenu = "";
let littleSquare = "";
let topBorder = "";
let tuvieja = [];


window.onload = function () {
    proyectos = document.getElementsByClassName('tarjetasProyecto');
    littleSquare = document.getElementById('square');
    mobileMenu = document.getElementById("mobileMenu");
    const arrayLength = sections.length;
    let scrollTop = "";
    for (var i = 0; i < arrayLength; i++) {
    topBorder = sections[i].offsetTop; 
    let height = sections[i].offsetHeight / 2;
    let total = topBorder + height; 
    tuvieja.push(total);
    nav[0].classList.add("selectedItem");
    for (var t = 0; t < proyectos.length; t++) {
        proyectos[t].style.animationName = "appearProjects";}}
    
    
        document.addEventListener(
            'scroll',
            function()
            {
                scrollTop = window.pageYOffset;
                
    
                
                if (scrollTop <= tuvieja[0]) {
                    for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                    nav[0].classList.remove("unselectedItem");
                    nav[0].classList.add("selectedItem");}
    
    
                 else if (scrollTop <= tuvieja[1]) {
                    for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                    nav[1].classList.remove("unselectedItem");
                    nav[1].classList.add("selectedItem");
}
                    
                    
                    else if (scrollTop <= tuvieja[2]) {
                    for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                    nav[2].classList.remove("unselectedItem");
                    nav[2].classList.add("selectedItem")
                    let tarj= document.getElementsByClassName("messageContainer");
                    for (var t = 0; t < tarj.length; t++) {
                        tarj[t].style.opacity = 1;}
                } 

                else if (scrollTop <= tuvieja[3]) {
                    for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                    nav[3].classList.remove("unselectedItem");
                    nav[3].classList.add("selectedItem");}
                
                
                    else {for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                nav[4].classList.remove("unselectedItem")
                nav[4].classList.add("selectedItem");
            }
            },
    
            
    )

    }

    window.onresize = function () {
        tuvieja = [];
        proyectos = document.getElementsByClassName('tarjetasProyecto');
        littleSquare = document.getElementById('square');
        mobileMenu = document.getElementById("mobileMenu");
        const arrayLength = sections.length;
        let scrollTop = "";
        for (var i = 0; i < arrayLength; i++) {
        topBorder = sections[i].offsetTop; 
        let height = sections[i].offsetHeight / 2;
        let total = topBorder + height; 
        tuvieja.push(total);
        nav[0].classList.add("selectedItem");
        for (var t = 0; t < proyectos.length; t++) {
            proyectos[t].style.animationName = "appearProjects";}}
        
        
            document.addEventListener(
                'scroll',
                function()
                {
                    scrollTop = window.pageYOffset;
                    
        
                    
                    if (scrollTop <= tuvieja[0]) {
                        for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                        nav[0].classList.remove("unselectedItem");
                        nav[0].classList.add("selectedItem");}
        
        
                     else if (scrollTop <= tuvieja[1]) {
                        for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                        nav[1].classList.remove("unselectedItem");
                        nav[1].classList.add("selectedItem");
                        let tarj= document.getElementsByClassName("ejecucionTarj");
                        for (var t = 0; t < tarj.length; t++) {
                            tarj[t].style.opacity = 1;}}
                        
                        
                        else if (scrollTop <= tuvieja[2]) {
                        for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                        nav[2].classList.remove("unselectedItem");
                        nav[2].classList.add("selectedItem")
                        let tarj= document.getElementsByClassName("messageContainer");
                        for (var t = 0; t < tarj.length; t++) {
                            tarj[t].style.opacity = 1;}

                    } 
    
                    else if (scrollTop <= tuvieja[3]) {
                        for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                        nav[3].classList.remove("unselectedItem");
                        nav[3].classList.add("selectedItem");}
                    
                    
                        else {for (var i = 0; i < arrayLength; i++) {if (nav[i].classList.contains("selectedItem")) {nav[i].classList.add("unselectedItem")}};
                    nav[4].classList.remove("unselectedItem")
                    nav[4].classList.add("selectedItem");
                }
                },
        
                
        )
    
        }




//MOUSE TRACKER


const onMouseMove = (e) =>{
    console.log(e.pageX);
  littleSquare.style.left = e.pageX - 40 + 'px';
}

document.addEventListener('mousemove', onMouseMove);

//MOBILE NAV   

function mobile(x) {
    x.classList.toggle("change");
    mobileMenu.classList.toggle("appearMenu");
}

//POP UPS AND PHOTOS

function cardOpen(x) {
    document.getElementById("fondo-tarjetas").setAttribute("style", "animation-name: appearBackground; animation-duration:0.5s; animation-fill-mode: forwards");
    tarjetas[x].setAttribute("style", "animation-name: appearCard; animation-duration:0.5s; animation-fill-mode: forwards");
    Class = "foto" + x.toString();
    makeAppear();
}

function nextImg() {
    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "display: none");
    };
    if(fotoIndex < fotos.length - 1) {fotoIndex++;}
    else {fotoIndex = 0};
    makeAppear();
}

function prevImg() {
    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "display: none");
    };
    if(fotoIndex > 0) {fotoIndex--;}
    else {fotoIndex = fotos.length - 1};
    makeAppear();
}

function makeAppear()  {
    let fotos = document.getElementsByClassName(Class);
    fotos[fotoIndex].setAttribute("style", "display: inherit; animation-name: appearPhoto; animation-duration: 0.5s; animation-fill-mode: forwards");
}


function closeCard() {
    document.getElementById("fondo-tarjetas").setAttribute("style", "display:none");
    for(let i = 0; i < tarjetas.length; i++){
        tarjetas[i].scrollTop = 0;
        tarjetas[i].setAttribute("style", "display:none");
    }

    let fotos = document.getElementsByClassName(Class);
    for(let i = 0; i < fotos.length; i++) {
        fotos[i].setAttribute("style", "opacity: 0");
    };

    fotoIndex = 0; }