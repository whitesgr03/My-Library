'use strict'

const addBookButton = document.querySelector('.addBookButton')

addBookButton.addEventListener('click', showField)
function showField(e) {
    if (e.target === this) {
        formBgWrap.classList.toggle('active')
    }
}

function showField() {
    const wrap = document.querySelector('.wrap');
    wrap.classList.add('active')
}

