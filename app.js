const section = document.querySelector('section')
const money = document.getElementById('money')
const display = document.getElementById('display')
const change = document.getElementById('change')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let sugar = document.querySelectorAll('section > div')
let count = 2;


plus.addEventListener('click', () => {
    if (count === 4) {
        return
    } else {
        count = count + 1
    }
    sugar[count].style.backgroundColor = '#FF0037'
})

minus.addEventListener('click', () => {
    if (count === 0) {
        sugar[0].style.backgroundColor = '#FF0037'
        return
    }
    sugar[count].style.backgroundColor = '#FFD43F'
    count = count - 1
})

section.addEventListener('click', (event) => {
    if (isNaN(event.target.innerText)) {
        if (event.target.closest('div').lastChild.innerText - money.value < 0) {
            display.innerHTML = `You choose ${event.target.closest('div').firstChild.innerText} and ${count} level sugar
            <p style="color:#FF0037;">Is preparing</p>
            `
            setTimeout(() => {
                display.innerHTML = `
                <p style="color:#349D00;">Prepared</p>
                Take your order and change`
                change.innerText = Math.abs(event.target.closest('div').lastChild.innerText - money.value)
                money.value = ''
            }, 10000)
        } else if (event.target.closest('div').lastChild.innerText - money.value === 0) {
            display.innerHTML = `You choose ${event.target.closest('div').firstChild.innerText} and ${count} level sugar
            <p style="color:#FF0037;">Is preparing</p>
            `
            setTimeout(() => {
                display.innerHTML = `
                <p style="color:#349D00;">Prepared</p>
                <p> You don't have a change</p>
                Take your order`
                change.innerText = Math.abs(event.target.closest('div').lastChild.innerText - money.value)
                money.value = ''
            }, 10000)
        } else {
            display.innerHTML = `You have to add ${event.target.closest('div').lastChild.innerText - money.value} dram`
        }
    }
})