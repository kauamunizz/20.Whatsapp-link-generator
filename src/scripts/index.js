import '../styles/style.scss';

"strict mode"

const index = (() => {
    function phoneNumber() {
        const { phone, text } = document.forms.formPhone;
        const phoneReplace = phone.value.replace(/\D/g, '');
        const valor = encodeURI(`https://api.whatsapp.com/send?phone=${phoneReplace}&text=${text.value}`);
        const copy = document.querySelector('#copy');

        copy.innerText = valor;
    }


    function events() {
        document.forms.formPhone.addEventListener('submit', (event) => {
            event.preventDefault();

            phoneNumber();

            document.querySelector('#hide').classList.remove('hide');
        });

        document.querySelector('#hide button').addEventListener('click', () => {
            console.log('clicado');
            const link = document.querySelector('#copy');
            navigator.clipboard.writeText(link.innerText);
            console.log(link.innerText);
        });
        
    }


    function init() {
        events();
    }


    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', index.init);