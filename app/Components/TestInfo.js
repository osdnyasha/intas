define( 'app/Components/TestInfo.js', [
    'app/Components/Component.js'
], function (Component) {

    return class TestInfo extends Component {

        /**
         * Инициализация компонента
         */
        constructor(data) {

            // Функция, вызывающая родительский конструктор
            super();

            this.defaultDescr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper volutpat tristique. Fusce et nunc porttitor, pretium urna at, sagittis purus. Nullam sagittis congue sapien non sodales. Aliquam vel condimentum lacus, sit amet feugiat velit. Suspendisse congue imperdiet dui, sit amet cursus mi viverra sed. Nam porttitor venenatis vehicula. Vestibulum sed arcu vel lorem venenatis tempor.";
            this.description = data.description ? data.description : this.defaultDescr;

       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <div class="test-description">
                        <div class="test-description-title">Описание</div>
                        <div class="test-description-content">
                            <p class="test-description__content">
                               ${ this.description}
                            </p>
                            <div class="test-controls-btns">
                                <button class="start-test btn fill-red">Начать</button>
                                <button class="cancel-test btn">Отмена</button>
                            </div>
                        </div>
                    </div>
                `;
        }

    };

});




