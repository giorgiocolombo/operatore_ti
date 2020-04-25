document.addEventListener("DOMContentLoaded", () => {

    const importo = document.querySelector(".importo")
    const meno = document.querySelector(".minus")
    const piu = document.querySelector(".plus")
    const nav = document.querySelector(".nav_menu")
    const navIcon = document.querySelector(".menu_icon")
    const longbar = navIcon.querySelector(".longbar")
    const shortbar = navIcon.querySelector(".shortbar")

    importo.value = 10

    meno.addEventListener("click", evt => {
        evt.preventDefault()
        if (importo.value > 10) {
            importo.value = parseInt(importo.value) - 10
        }
    })

    piu.addEventListener("click", evt => {
        evt.preventDefault()
        if (importo.value < 50) {
            importo.value = parseInt(importo.value) + 10
        }
    })

    navIcon.addEventListener("click", () => {
        if (longbar.classList.contains("longbaractive")) {
            nav.classList.remove("nav_menu_active")
            longbar.classList.remove("longbaractive")
            shortbar.classList.remove("shortbaractive")
        } else {
            nav.classList.add("nav_menu_active")
            longbar.classList.add("longbaractive")
            shortbar.classList.add("shortbaractive")
        }
    })


})