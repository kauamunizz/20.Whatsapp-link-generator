import '../styles/style.scss';

"strict mode"

const index = (() => {
    function phoneNumber() {
        const { phone, text } = document.forms.formPhone;
        const phoneReplace = phone.value.replace(/\D/g, '');
        const valor = encodeURI(`https://api.whatsapp.com/send?phone=${phoneReplace}&text=${text.value}`);
        const input = document.querySelector('#valueCopy');

        input.value = valor
    }


    function events() {
        document.forms.formPhone.addEventListener('submit', (event) => {
            event.preventDefault();

            phoneNumber();

            document.querySelector('#hide').classList.remove('hide');
        });

        document.querySelector('#hide button').addEventListener('click', (event) => {
            const buttonCopy = event.currentTarget;
            const link = document.querySelector('#valueCopy');

            navigator.clipboard.writeText(link.value);
            buttonCopy.style.backgroundColor = 'green';

            setTimeout(() => {
                buttonCopy.style.backgroundColor = 'rgb(204, 204, 204)';
            }, 2000);
        });

        document.querySelector('footer nav').addEventListener('click', event => {
            const click = event.target;

            if (click.classList.contains('title-li')) {
                const row = click.closest('ul');
                row.classList.toggle('active');

                event.preventDefault();
            };
        });

        document.querySelector('#dropButton').addEventListener('click', () => {
            const padHeader = document.querySelector('.header');
            const menu = document.querySelector('.items');

            padHeader.classList.toggle('header-padding');
            menu.classList.toggle('hide-menu');
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