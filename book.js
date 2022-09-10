'use strict'

const addBookButton = document.querySelector('.addBookButton')

addBookButton.addEventListener('click', showField)

function showField() {
    const wrap = document.querySelector('.wrap');
    wrap.classList.add('active')
}

