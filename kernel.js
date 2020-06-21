/**
 * Инициализация приложения
 */

    try {

        // Загрузка компонентов
        require([
            'app/ComponentStorage.js',
            'app/Controllers/Page.js'
        ], function (ComponentStorage,Page) {
            console.log(ComponentStorage.list);
            document.body.innerHTML = new Page().render();
            ComponentStorage.list.forEach(instance => {
                instance.afterRender();
            });
        });

    } catch (e) {
        document.body.innerHTML = 'Упс, похоже, что-то пошло не так.';
    }

