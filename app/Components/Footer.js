define( 'app/Components/Footer.js', [
    'app/Components/Component.js'
], function (Component) {

    return class Footer extends Component {

        /**
         * Инициализация компонента
         */
        constructor() {

            // Функция, вызывающая родительский конструктор
            super();

       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <footer class="footer">
                <a class="footer__by" href="#">2020 © INTAS-Company.com</a>
            </footer>
                `;
        }

    };

});
