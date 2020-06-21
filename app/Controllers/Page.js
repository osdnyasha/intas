define('app/Controllers/Page.js', [
    'app/Components/Component.js',
    'app/Components/Controls.js',
    'app/Components/FinishTest.js',
    'app/Components/Popup.js',
    'app/Components/Questions.js',
    'app/Components/Sidebar.js',
    'app/Components/TestInfo.js',
    'text!dataset/Tests.json',
    'css!assets/libs/normalize/normalize.css',
    'css!assets/libs/fa/scss/fontawesome.css',
    'css!assets/css/theme.css',
    'css!assets/css/style.css',
], function (Component,Controls,FinishTest,Popup,Questions,Sidebar,TestInfo,Tests) {

    return class Page extends Component {

        /**
         * Инициализация компонента
         */
        constructor() {
            // Функция, вызывающая родительский конструктор
            super();   
            
            this.title = 'Tests';
            this.data = JSON.parse(Tests);

            this.testCurrId = null;

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
                                <!-- sidebar--> 
                                ${new Sidebar()}
                                <div class="main-content">
                                    <h1 class="main__header empty">Выберите тест из списка</h1>
                                    <!--Controls-->
                                    <!--Test info-->
                                    <!--Start test questions-->
                                    <!--End test questions-->
                                    <!--Start test questions-->
                                    <!--End test questions-->
                                    
                                    <!--controls btn-->
                                </div>
                            </div>
                        </div>
                    </main>
                        <!-- start footer--> 
                        <!-- end footer--> 
                        <!-- start popup--> 
                        <!-- end popup--> 
            `
        }

        addEventsTest() {
            const testLinks = document.querySelectorAll('.sidebar-list__item');

            testLinks.forEach((elem) => {
                elem.addEventListener("click", (e) => {
                    if(this.control) {
                        this.control.stopTime();
                    }
                    this.openTestInfo(e.target.parentNode.getAttribute('id'));
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

        openTestInfo(id) {
            console.log("try open ",id);
            document.querySelector('.main-content').innerHTML = `
            ${new TestInfo(this.data[id])}
            `;
            this.testCurrId = id;
            this.addEventsTestBtn();
        }
        startTest() {
            this.control = new Controls(this.data[this.testCurrId]);
            let result = this.control;
            result += new Questions(this.data[this.testCurrId]);
            document.querySelector('.main-content').innerHTML = result;
            this.control.setTime();
        }
    }

});

