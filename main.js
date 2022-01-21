let div = document.querySelector(".glava")
let Resume = document.getElementById("Resume")

function Created(){
    div.style.display = "flex"
}

Resume.addEventListener("click", Created)




let word = document.querySelector(".glava")
let contacts = document.querySelector(".contacts")
let email = document.querySelector(".email")
let phone = document.querySelector(".phone")
let skills = document.querySelector(".skills")
let html = document.querySelector(".html")
let css = document.querySelector(".css")
let git = document.querySelector(".git")
let python = document.querySelector(".python")
let js = document.querySelector(".js")
let ss = document.querySelector(".ss")
let tw = document.querySelector(".tw")
let sk = document.querySelector(".sk")
let language = document.querySelector(".chelik")
let language1 = document.querySelector(".chelik1")
let language2 = document.querySelector(".chelik2")
let TextColor = document.getElementById("text")

function Text(){
    word.style.color = "blue"
    contacts.style.color = "blue"
    email.style.color = "blue"
    phone.style.color = "blue"
    skills.style.color = "blue"
    html.style.color = "blue"
    css.style.color = "blue"
    git.style.color = "blue"
    python.style.color = "blue"
    js.style.color = "blue"
    ss.style.color = "blue"
    tw.style.color = "blue"
    sk.style.color = "blue"
    language.style.color = "blue"
    language1.style.color = "blue"
    language2.style.color = "blue"
}

TextColor.addEventListener("click", Text)




let Background = document.getElementById("background")
let a = document.querySelector(".box_contentv1")
let b = document.querySelector(".box_contentv2")


function BackColor(){
    div.style.backgroundColor = "red"
    a.style.backgroundColor = "yellow"
    b.style.backgroundColor = "yellow"
}

Background.addEventListener("click", BackColor)