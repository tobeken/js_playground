const testimonials = [
    {
        name:"Jet Lee",
        photoUrl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I used to spend hours writing creative copy, but now all I do is tell Rytr what I need and it writes everything for me. It's the ultimate AI content writer, and a must-have tool for bloggers, marketers, & entrepreneurs."
    },
    {
        name:"Yann Caro",
        photoUrl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Thank you, Caro, for being an invaluable resource and for consistently exceeding my expectations. You truly deserve the title of an Apple expert."
    },
    {
    name:"Michael Boyne",
    photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text:"Great"
    }
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestimonial()

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(updateTestimonial,10000)
}