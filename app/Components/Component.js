define('app/Components/Component.js', ['app/ComponentStorage.js'], function (ComponentStorage) {

    /**
     * Класс, представляющий компонент
     */
    return class Component {

        /**
         * Создание и инициализация объектов
         */
        constructor() {

            // Добавление компонента в хранилище
            ComponentStorage.add(this);

            // Метод, который запускается непосредственно перед рендерингом компонента
            this.beforeRender();
        }

        toString() {
            return this.render();
        }

        /**
         * Рендеринг компонента
         * @returns {string}
         */
        render() {}

        /**
         * Метод, который запускается непосредственно перед рендерингом компонента
         * @returns {void}
         */
        beforeRender() {}

        /**
         * Метод, который запускается после того, как компонент отрендерился в DOM
         * @returns {void}
         */
        afterRender() {
            
        }
        
    }

});
