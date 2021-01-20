
const modal = $.logIn()

document.addEventListener('click', event => {
    event.preventDefault()
    const btnOpen = event.target.dataset.open
    if (btnOpen === "true"){
        modal.open()
    }
})