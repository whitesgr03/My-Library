'use strict'

const formBgWrap = document.querySelector('.wrap')
const addBookButton = document.querySelector('.addBookButton')
const closeButton = document.querySelector('.closeButton')

formBgWrap.addEventListener('click', showField)
addBookButton.addEventListener('click', showField)
closeButton.addEventListener('click', showField)
function showField(e) {
    if (e.target === this) {
        formBgWrap.classList.toggle('active')
    }
}

function showField() {
    const wrap = document.querySelector('.wrap');
    wrap.classList.add('active')
}

