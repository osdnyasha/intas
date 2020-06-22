define('app/Controllers/Test.js', [
    'app/Components/Component.js',
    'app/Components/Controls.js',
    'app/Components/FinishTest.js',
    'app/Components/Popup.js',
    'app/Components/Questions.js',
    'app/Components/Sidebar.js',
    'app/Components/TestInfo.js',
    'app/Components/Footer.js',
    'text!dataset/Tests.json',
    'css!assets/libs/normalize/normalize.css',
    'css!assets/libs/fa/scss/fontawesome.css',
    'css!assets/css/theme.css',
    'css!assets/css/style.css',
], function (Component,Controls,FinishTest,Popup,Questions,Sidebar,TestInfo,Footer,Tests) {

    return class Test extends Component {
        /**
         * Инициализация компонента
         */
        constructor() {
            // Функция, вызывающая родительский конструктор
            super();   
            
            this.title = 'Tests';
            this.data = JSON.parse(Tests);
            this.correctAnswersList = new Array();
            this.usersAnswersList = new Array();
            this.totalCorrectAnswers = 0;

            this.testCurrId = null;

            this.stopTest = this.stopTest.bind(this);

        }

        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            return `<main class="main">
                        <div class="wraper">
                            <div class="page-header">
                                <h1 class="page-header__title">${this.title}</h1>
                            </div>
                            <div class="page-content d-flex">
                                ${new Sidebar()}
                                <div class="main-content">
                                    <h1 class="main__header empty">Выберите тест из списка</h1>
                                </div>
                            </div>
                        </div>
                    </main>
                    ${new Footer()}
                        <div class="popup-wraper"></div>
            `;
        }

        addEventsTest() {
            const testLinks = document.querySelectorAll('.sidebar-list__item');

            testLinks.forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    if(this.control) {
                        this.control.stopTime();
                    }
                    if(document.documentElement.clientWidth < 800) {
                        document.querySelector(".sidebar").classList.add("open");
                    }
                    if(e.target.tagName == "LI") {
                        this.openTestInfo(e.target.getAttribute('id'));
                    } else {
                        this.openTestInfo(e.target.parentNode.getAttribute('id'));
                    }
                    
                })
            })
        }

        afterRender() {
            this.addEventsTest();
        }
        addEventsTestBtn() {
            document.querySelector('.cancel-test').addEventListener("click",() => {
                if(this.control) {
                    this.control.stopTime();
                }
                this.closeTestInfo();
            });
            document.querySelector('.start-test').addEventListener("click",() => {
                this.startTest();
            });
        }

        closeTestInfo() {
            document.querySelector('.main-content').innerHTML = '<h1 class="main__header empty">Выберите тест из списка</h1>';
        }

        SetInitComponent(instance) {
            instance.afterRender();
        }

        checkProccesTest() {

            if(sessionStorage.getItem([`test${this.testCurrId}`])) {
                return false;
            }
            
            return true;
           
        }

        openTestInfo(id) {
            this.testCurrId = id;

            if(this.checkProccesTest()) {
                document.querySelector('.main-content').innerHTML = `${new TestInfo(this.data[id])}`;
                this.addEventsTestBtn();
            } else {
                this.openFinishedTest();
            }
            
            
        }
        startTest() {
            
            this.control = new Controls(this.data[this.testCurrId]);
            this.questions = new Questions(this.data[this.testCurrId]);

            let result = this.control + this.questions;

            document.querySelector('.main-content').innerHTML = result;

            this.control.setTime();
            this.initForm();
            this.SetInitComponent(this.control);


            this.addEventsControlsProccesing();
        }

        stopTimer() {
            if(this.control) {
                this.control.stopTime();
            }
        }

        addEventsControlsProccesing() {
            const inputs = document.querySelectorAll('input');
            document.querySelector('.controls__reset').addEventListener("click",() => {
                inputs.forEach((input) => {        
                   input.checked = false;
                   document.querySelector("#countChecked").innerHTML = '0';
                   event.preventDefault();
               })
           });

           document.querySelector('.controls__exit').addEventListener("click",() => {

               this.popup = new Popup({
                   "title" : "Вы уверены что хотите выйти?",
                   "description" : "Все результаты будут сброшены",
                   "btns": [
                       "Выход","Отмена"
                   ]
               });
               
               this.popup.showPopup();

               document.querySelector(".exit-test").addEventListener("click", this.stopTest)

           });

           ;
        }

        stopTest() {
            if(this.popup) {
                this.popup._closePopup();
            }
            this.stopTimer();
            this.closeTestInfo();
        }

        initForm() {
            this.correctAnswersList = this.questions.correctAnswersList;
            let form = document.querySelector("#form");
            let self = this;
            form.addEventListener("submit", function(event) {

            let data = new FormData(form);

            self.usersAnswersList = [];
            self.totalCorrectAnswers = 0;


            for (const entry of data) {
                self.usersAnswersList[String(entry[0]).replace(/[^-0-9]/gim,'')] = (parseInt(entry[1]));
            };

            sessionStorage.setItem([`test${self.testCurrId}`],JSON.stringify(self.usersAnswersList));
  
            self.checkAnswers();
            event.preventDefault();

            self.getFinishPage();

            }, false);
        }

        
        checkAnswers() {
            for(let i = 0; i < this.correctAnswersList.length; i++) {
                if(this.correctAnswersList[i] == this.usersAnswersList[i]){
                    this.totalCorrectAnswers++;
                }
            }
        }

        getFinishPage() {
            this.finishTest = new FinishTest(this.data[this.testCurrId],this.usersAnswersList);
            this.stopTimer();
            document.querySelector(".main-content").innerHTML = this.finishTest.render();
        }

        openFinishedTest() {
            this.stopTimer();
            const answers = JSON.parse(sessionStorage.getItem([`test${this.testCurrId}`]));
            this.finishTest = new FinishTest(this.data[this.testCurrId],answers,true);
            document.querySelector(".main-content").innerHTML = this.finishTest.render();
            this.removeStorage();
        }

        removeStorage() {
            const self = this;
            document.querySelector(".delete-storage").addEventListener("click", () => {
                sessionStorage.removeItem(`test${this.testCurrId}`);
                self.openTestInfo(this.testCurrId);
            });
        }
        
    }

});

