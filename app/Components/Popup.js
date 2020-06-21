define( 'app/Components/Popup.js', [
    'app/Components/Component.js'
], function (Component) {

    return class Popup extends Component {

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
            <div class="overlay">
                <div class="popup">
                    <a class="popup-close-btn" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                    <div class="popup-title">
                        <h3 class="popup__title">Вы уверены что хотите выйти?</h3>
                        <p class="popup__description">Все результаты будут сброшены</p>
                    </div>
                    <div class="popup-btns">
                        <button class="exit-test btn red-styled">Выход</button>
                        <button class="cancel-test btn fill-red">Отмена</button>
                    </div>
                </div>
            </div>
                `;
        }

    };

});
