define( 'app/Components/Questions.js', [
    'app/Components/Component.js'
], function (Component) {

    return class Questions extends Component {

        /**
         * Инициализация компонента
         */
        constructor(data) {

            // Функция, вызывающая родительский конструктор
            super();
            this.data = data;
       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <div class="test-questions">
            <ul class="test-questions__ul test-questions__ul-unstyled">
                ${this.prepareQuestions()}
            </ul>
        </div>
        <div class="test-bottom-controls top-line-gray">
            <button class="btn red-styled stop-test">Завершить</button>
        </div>
                `;
        }

        prepareQuestions() {
            let result = '';
            let id = 0;
            this.data["questions"].forEach((elem) => {
                result += `<li class="test-questions__item">
                <h3 class="test-questions__item-title">${elem["name"]}</h3>
                <div class="test-questions__item-content test-answers d-flex">
                ${this.prepareAnswers(elem["answers"],id)}
                </div>
            </li>
                `;
                id++;
            })
                return result;
        }

        prepareAnswers(data,id) {
            let result = '';
            data.forEach((e)=> {
                result += `<label class="test-question__label"><input type="radio" name="test${id}"/>${e}</label>`;
            })
            return result;
        }

    };

});
