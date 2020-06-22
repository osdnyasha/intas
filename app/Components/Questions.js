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
            this.correctAnswersList = new Array();
       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <div class="test-questions">
            <form id="form">
            <ul class="test-questions__ul test-questions__ul-unstyled">
                ${this.prepareQuestions()}
            </ul>
            </form>
        </div>
        <div class="test-bottom-controls top-line-gray">
            <button form="form" type="submit" class="btn red-styled stop-test">Завершить</button>
        </div>`;
        }

        prepareQuestions() {
            let result = '';
            let id = 0;
            this.data["questions"].forEach((elem) => {
                const classType = elem["type"] ? "test-answers-type2" : "";

                result += `<li class="test-questions__item">
                <h3 class="test-questions__item-title">${elem["name"]}</h3>
                <div class="test-questions__item-content test-answers d-flex ${classType}">
                ${this.prepareAnswers(elem["answers"],id,elem["required"])}
                </div>
            </li>`;
                id++;
                this.correctAnswersList.push(elem["correctAnswer"]);
            });

                return result;
        }

        prepareAnswers(data,globalId,required) {
            let requiredQuest = required ? "required" : '';
            let result = '';
            let id = 0;
            data.forEach((e)=> {
                result += `<label class="test-question__label"><input type="radio" name="test${globalId}" value="${id}" ${requiredQuest}>${e}</label>`;
                id++;
            });
            return result;
        }

    };

});
