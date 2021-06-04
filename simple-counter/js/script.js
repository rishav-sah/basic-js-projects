const countValue = document.querySelector('#countValue')

const btnDecrease = document.querySelector('#btnDecrease')
const btnReset = document.querySelector('#btnReset')
const btnIncrease = document.querySelector('#btnIncrease')

let count = 0
countValue.innerText = 0

btnDecrease.addEventListener('click', (e) => {
  countValue.innerText = count--
})

btnIncrease.addEventListener('click', (e) => {
  countValue.innerText = count++
})

btnReset.addEventListener('click', (e) => {
  countValue.innerText = 0
})
