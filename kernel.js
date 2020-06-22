/**
 * Инициализация приложения
 */

    try {

        // Загрузка компонентов
        require([
            'app/ComponentStorage.js',
            'app/Controllers/Test.js'
        ], function (ComponentStorage,Test) {
            document.body.innerHTML = new Test().render();
            ComponentStorage.list.forEach(instance => {
                instance.afterRender();
            });
        });

    } catch (e) {
        document.body.innerHTML = 'Упс, похоже, что-то пошло не так.';
    }

