let dataPlus = document.querySelector('#one')
let dataMinus = document.querySelector('#two')
let firsth1 = document.querySelector('#theree')
let speedcar = document.querySelector('#lol')
let count = 60;
let speed = 750

dataPlus.onclick = () => {
    if (document.onclick = dataPlus) {
        {
            firsth1.innerHTML = count += 5
        }
        if (document.onclick = dataPlus) {
            speedcar.innerHTML = speed -= 5
        }
    }

    dataMinus.onclick = () => {
        if (document.onclick = dataMinus) {
            firsth1.innerHTML = count -= 5
        }
        if (document.onclick = dataPlus) {
            speedcar.innerHTML = speed += 5
        }
    }

}

let dataOpen = document.querySelectorAll('.b [data-open]')
let black = document.querySelector('.top')
let modal_bg = document.querySelector('.modal_bg')
let img = document.querySelectorAll('img')


dataOpen.forEach(btn => {
    btn.onclick = () => {
        console.log('clik');
        black.style.display = 'flex'
        modal_bg.style.display ='block'
    }
})

img.forEach(btn => {
    btn.onclick = () => {
        console.log('clik');
        black.style.display = 'none'
        modal_bg.style.display ='none'
    }
})