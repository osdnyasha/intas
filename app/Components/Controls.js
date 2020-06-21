define( 'app/Components/Controls.js', [
    'app/Components/Component.js'
], function (Component) {

    return class Controls extends Component {

        /**
         * Инициализация компонента
         */
        constructor(data) {

            // Функция, вызывающая родительский конструктор
            super();
            this.name = data["title"];
       
        }
        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {
            // Возвращение рендера
            return `
            <div class="test-header test-header-bottom-line d-flex">
            <h3 class="test__header">${this.name}</h3>
            <div class="test__header-controls d-flex">
                <div class="test-controls-reset">
                    <a href="#" class="controls__reset">Сбросить все ответы</a>
                </div>
                <div class="test-controls-counter left-line">
                    <span class="controls__counter">5/30</span>
                </div>
                <div class="test-controls-time left-line">
                    <span class="controls__time">00:01:34</span>
                </div>
            </div>
            <div class="test__header-contorls-exit">
                <a href="#" class="controls__exit">Выход</a>
            </div>
        </div>
                `;
        }

        setTime() {
            document.querySelector('.controls__time').innerHTML = "00:00:00";
            let this_date = new Date();
            this.start_time_interval = setInterval(function(){
            let new_date = new Date() - this_date;
            let sec   = Math.abs(Math.floor(new_date/1000)%60); //sek
            let min   = Math.abs(Math.floor(new_date/1000/60)%60); //min
            let hours = Math.abs(Math.floor(new_date/1000/60/60)%24); //hours
            if (sec.toString().length   == 1) sec   = '0' + sec;
            if (min.toString().length   == 1) min   = '0' + min;
            if (hours.toString().length == 1) hours = '0' + hours;
            document.querySelector('.controls__time').innerHTML = (hours + ':' + min + ':' + sec);
            },100);
        }

        stopTime() {
            clearInterval(this.start_time_interval);
        }


    };

});








