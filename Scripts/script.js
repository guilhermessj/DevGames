// Toggle button and navbar

const navbar = document.querySelector(".mobile-nav")
const btnToggle = document.querySelector("#button-modified")

btnToggle.addEventListener("click", ()=>{
    btnToggle.classList.toggle("active")
    navbar.classList.toggle("active")
})

btnToggle.querySelector(".mobile-nav").forEach(n => n.addEventListener('click', () =>{
    btnToggle.classList.remove("active")
    navbar.classList.remove("active")
}))

// Toggle button and navbar