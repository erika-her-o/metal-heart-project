const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-main');
const form = document.getElementById('form');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal-body');
const closeModalButton = document.querySelector('.close-modal');
const sections = document.querySelectorAll('.scroll');

function scrollToSection(event) {
    const elementToScroll = document.querySelector(event.target.dataset.target);
    elementToScroll.scrollIntoView({ block: 'start', behavior: 'smooth', alignToTop: true });
}

function openModal() {
    modal.classList.toggle('hidden');
    document.body.classList.toggle('no-overflow');
}

function closeModal() {
    modal.classList.toggle('hidden');
    document.body.removeAttribute('class');
}

function sendUserData(event) {
    event.preventDefault();

    const messages = modalBody.querySelectorAll('p');

    if (messages.length > 0) {
        for (let i = 0; i < messages.length; i++) {
            modalBody.removeChild(messages[i]);
        }
    }

    const names = event.target[0].value.trim();
    const email = event.target[1].value.trim();
    const phone = event.target[2].value.trim();
    const message = event.target[3].value.trim();
    const regexNames = /[^a-zA-Z ]/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /[^0-9]/;
    const errorMessages = [];

    if (names.length === 0 || regexNames.test(names)) {
        errorMessages.push('* Nombre *');
    }

    if (email.length === 0 || !regexEmail.test(email)) {
        errorMessages.push('* Email *');
    }

    if (phone.length === 0 || regexPhone.test(phone)) {
        errorMessages.push('* Teléfono *');
    }

    if (message.length === 0) {
        errorMessages.push('* Mensaje *');
    }

    if (errorMessages.length > 0) {
        const messageError = document.createElement('p');
        messageError.textContent = 'Por favor, verifica los siguientes campos:';
        modalBody.insertBefore(messageError, closeModalButton);

        for (let i = 0; i < errorMessages.length; i++) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = errorMessages[i];
            modalBody.insertBefore(errorMessage, closeModalButton);
        }

        openModal();
    } else {
        const messageOk = document.createElement('p');
        messageOk.textContent = 'Gracias por preferirnos ♥, nos comunicaremos contigo a la brevedad.';
        modalBody.insertBefore(messageOk, closeModalButton);
        openModal();
    }
}

hamburger.onclick = () => menu.classList.toggle('hide');
form.onsubmit = sendUserData;
closeModalButton.onclick = closeModal;
sections.forEach(section => section.onclick = scrollToSection);