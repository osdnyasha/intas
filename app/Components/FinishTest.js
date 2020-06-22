define( 'app/Components/FinishTest.js', [
    'app/Components/Component.js'
], function (Component) {

    return class FinishTest extends Component {

        /**
         * Инициализация компонента
         */
        constructor(data,answers,finished = false) {

            // Функция, вызывающая родительский конструктор
            super();

            this.data = data;
            this.userAnswersList = answers;
            this.finished = finished;
       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `<div class="test-header test-header-bottom-line d-flex">
                    <h3 class="test__header">${this.data["title"]}</h3>
                    </div>    
                    <div class="test-finish">
                        <div class="test-finish-header">
                            <h3 class="test-finish__title">Тест завершён</h3>
                            <span class="test-finish__description">Вы ответили на ${this.userAnswersList.length} из ${this.data["questions"].length} вопросов.</span>
                            <span class="test-finish__answers">Ваши ответы</span>
                        </div>
                        <div class="test-finish-content">
                            <ul class="test-finish__content test-finish__content-ul-unstyled">
                                ${this.getRenderItems()}
                            </ul>
                        </div>
                    </div>
                    ${this.btnRender()}
                `;
        }

        getRenderItems() {
            let result = '';
            let id = 0;
            this.data["questions"].forEach((elem) => {
                result += `<li class="test-finish-item">
                <h3 class="test-finish__item__title">${elem["name"]}</h3>
                ${this.setRenderItems(elem,id)}
            </li>`;
            id++;
            });
            return result;
        }

        setRenderItems(data,id) {
            let result = `<span class="test-finish__item-content test-correct-answer">Правильный ответ: ${data["answers"][data["correctAnswer"]]}.</span>  
                          <span class="test-finish__item-content test-your-answer">Вы ответили: ${data["answers"][this.userAnswersList[id]] ? data["answers"][this.userAnswersList[id]] : "Не ответили"}.</span>`;
            return result;
        }

        btnRender() {
            if(this.finished) {
                return `<div class="test-bottom-controls flex-center d-flex">
                            <button class="btn red-styled delete-storage">Пройти еще раз</button>
                        </div>`;
            } else {
                return "";
            }
        }

    };

});
