function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var date = new Date()
    var hours = date.getHours()
    
    msg.innerHTML = `Agora são ${hours} horas.`

    if (hours >= 0 && hours < 12){
        img.src = 'morning.png'
        document.body.style.background = '#cec46b'
    } else if (hours >= 12 && hours <= 18) {
        img.src = 'afternoon.png'
        document.body.style.background = '#e09249'
    } else {
        img.src = 'night.png'
        document.body.style.background = '#00387d'
    }
}