const targetDate = new Date('2024-01-15') // <- Change the date here

const updateTimer = () => {
    const today = new Date()
    const milisecondsToDays = 1000 * 60 * 60 * 24
    const difference  = Math.floor((targetDate - today) / milisecondsToDays)

    const timerElement = document.querySelector('#timer')
    timerElement.textContent = difference.toString().padStart(2, '0')
}

updateTimer()

setInterval(updateTimer, 1000)