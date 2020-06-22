define( 'app/Components/Popup.js', [
    'app/Components/Component.js'
], function (Component) {

    return class Popup extends Component {

        /**
         * Инициализация компонента
         */
        constructor(data) {

            // Функция, вызывающая родительский конструктор
            super();

            this.data = data;

            this._closePopup = this._closePopup.bind(this); 
       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <div class="overlay open">
                <div class="popup">
                    <a class="popup-close-btn" href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                    <div class="popup-title">
                        <h3 class="popup__title">${this.data.title}</h3>
                        <p class="popup__description">${this.data.description}</p>
                    </div>
                    <div class="popup-btns">
                        <button class="exit-test btn red-styled">${this.data.btns[0]}</button>
                        <button class="cancel-test btn fill-red">${this.data.btns[1]}</button>
                    </div>
                </div>
            </div>
                `;
        }

        showPopup() {
            document.querySelector(".popup-wraper").innerHTML = this.render();
            this.addEventsClose();
            this.getPopupInteraction()
        }

        addEventsClose() {
            document.querySelector(".popup-close-btn").addEventListener('click', () => {
                document.querySelector(".popup-wraper").innerHTML = "";
            });
        }

       _closePopup() {
            document.querySelector(".popup-wraper").innerHTML = "";
        }

        getPopupInteraction() {
            document.querySelector('.cancel-test').addEventListener("click",this._closePopup);
        }

    };

});
