const imgStore = [
    'mb.png',
    'pc.png',
    'video.png'
]

let imgNow = 0

const sliderEl = {
    img: document.querySelector("#sliderImg"),
    btns: {
        btn1: document.querySelector('#btn1'),
        btn2: document.querySelector('#btn2')
    }
}

sliderEl.btns.btn1.addEventListener('click', () => {
    if (imgNow != 0) {
        imgNow -= 1
    } else {
        imgNow = imgStore.length-1
    }
    sliderEl.img.src = `./img/${imgStore[imgNow]}`
})

sliderEl.btns.btn2.addEventListener('click', () => {
    if (imgNow != imgStore.length-1) {
        imgNow += 1
    } else {
        imgNow = 0
    }
    sliderEl.img.src = `./img/${imgStore[imgNow]}`
})