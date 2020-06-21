define( 'app/Components/Sidebar.js', [
        'app/Components/Component.js',
        'text!dataset/Tests.json'
    ], function (Component,Tests) {

        return class Sidebar extends Component {

            /**
             * Инициализация компонента
             */
            constructor() {

                // Функция, вызывающая родительский конструктор
                super();
                this.data = JSON.parse(Tests);
            }
            /**
             * Рендеринг компонента
             * @returns {string}
             */
            render() {
                // Возвращение рендера
                return `
                    <aside class="sidebar sidebar-gray sidebar-bordered">
                        <div class="sidebar-container">
                            <div class="sidebar-header sidebar-header-bottom-line">
                                <a href="#" class="sidebar-header__close"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>
                                <a href="#" class="sidebar-header__open"><i class="fa fa-bars" aria-hidden="true"></i></a>
                                <h3 class="sidebar__header">ТЕСТЫ</h3>
                            </div>
                            <div class="sidebar-content">
                                <div class="sidebar-list">
                                    <ul class="sidebar-ul-styled">
                                        ${this.createTest()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </aside>
                    `;
            }

            createTest() {
                let result = '';
                let id = 0;
                this.data.forEach( (e) => {
                    result += `<li class="sidebar-list__item" id="${id}"><a href="#">${(e["title"])}</a></li>`;
                    id++;
                });
                
                return result;
            }

            closeSidebar() {
                document.querySelector('.sidebar').classList.add('open');
            }

            openSidebar() {
                document.querySelector('.sidebar').classList.remove('open');
            }

            addHandlers() {
                const closeBtn = document.querySelector('.sidebar-header__close');
                const openBtn = document.querySelector('.sidebar-header__open');


                closeBtn.addEventListener("click", () => {
                    this.closeSidebar();
                });
                openBtn.addEventListener('click', () => {
                    this.openSidebar();
                });

            }

            afterRender() {
                this.addHandlers();
            }
        };

    });
