import '../styles/style.scss';

"strict mode"

const index = (() => {
    function phoneNumber() {
        const { phone, text } = document.forms.formPhone;
        const valor = `https://api.whatsapp.com/send?phone=${phone.value}&text=${text.value}`;
        const copy = document.querySelector('#copy');

        copy.innerText = valor;
    }

    function events() {
        document.forms.formPhone.addEventListener('submit', (event) => {
            event.preventDefault();

            phoneNumber();

            document.querySelector('#hide').classList.remove('hide');
        })
        
    }


    function init() {
        events();
    }


    return {
        init
    }
})();

document.addEventListener('DOMContentLoaded', index.init);