define( 'app/Components/FinishTest.js', [
    'app/Components/Component.js'
], function (Component) {

    return class FinishTest extends Component {

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
                    <div class="test-finish hide">
                        <div class="test-finish-header">
                            <h3 class="test-finish__title">Тест завершён</h3>
                            <span class="test-finish__description">Вы ответили на 20 из 30 вопросов.</span>
                            <span class="test-finish__answers">Ваши ответы</span>
                        </div>
                        <div class="test-finish-content">
                            <ul class="test-finish__content test-finish__content-ul-unstyled">
                                <li class="test-finish-item">
                                    <h3 class="test-finish__item__title">1. Вопрос</h3>
                                    <span class="test-finish__item-content test-correct-answer">Правильный ответ: вариант Г.</span>  
                                    <span class="test-finish__item-content test-your-answer">Вы ответили: вариант Г.</span>
                                </li>
                                <li class="test-finish-item">
                                    <h3 class="test-finish__item__title">1. Вопрос</h3>
                                    <span class="test-finish__item-content test-correct-answer">Правильный ответ: вариант Г.</span>  
                                    <span class="test-finish__item-content test-your-answer">Вы ответили: вариант Г.</span>
                                </li>
                                <li class="test-finish-item">
                                    <h3 class="test-finish__item__title">1. Вопрос</h3>
                                    <span class="test-finish__item-content test-correct-answer">Правильный ответ: вариант Г.</span>  
                                    <span class="test-finish__item-content test-your-answer">Вы ответили: вариант Г.</span>
                                </li>
                                <li class="test-finish-item">
                                    <h3 class="test-finish__item__title">1. Вопрос</h3>
                                    <span class="test-finish__item-content test-correct-answer">Правильный ответ: вариант Г.</span>  
                                    <span class="test-finish__item-content test-your-answer">Вы ответили: вариант Г.</span>
                                </li>
                                <li class="test-finish-item">
                                    <h3 class="test-finish__item__title">1. Вопрос</h3>
                                    <span class="test-finish__item-content test-correct-answer">Правильный ответ: вариант Г.</span>  
                                    <span class="test-finish__item-content test-your-answer">Вы ответили: вариант Г.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                `;
        }

    };

});
