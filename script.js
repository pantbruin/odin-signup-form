const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const form = document.querySelector('#right-section-form')
const errorSpan = document.querySelector('.error')


form.addEventListener('submit', (e) => {
    if (password.value !== confirmPassword.value) {
        errorSpan.style.display = 'inline'
        e.preventDefault()
    }
})

password.addEventListener('focus', (e) => {
    if (errorSpan.style.display === 'inline'){
        errorSpan.style.display = 'none'
    }
})