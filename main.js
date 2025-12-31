function showLinks(){
    const links = document.getElementById('links-container')
    const square = document.getElementById('square')

    links.style.display = 'flex'
    square.style.display = 'block'
    setTimeout(() => {
        links.style.display = 'none'
        square.style.display = 'none'
    }, 3000)
}