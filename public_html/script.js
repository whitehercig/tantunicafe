
function updateSites(category) {
    const siteList = document.getElementById('site-list');
    const categoryTitle = document.querySelector('h2.top-category-title'); // Заголовок категории
    const mainTitle = document.querySelector('h1'); // Заголовок h1
    siteList.innerHTML = ''; // Очистить текущий список

    // Обновление заголовков
    const categoryNames = {
        microzaim: "Микрозаймы",
		investizii: "Инвестиции",
        cryptocurrency: "Криптовалюта",
		cryptowallets: "Криптокошельки",
		freelance: "Фриланс биржи",
        // Добавьте другие категории...
    };

    if (categoryNames[category]) {
        categoryTitle.textContent = categoryNames[category]; // Изменить заголовок категории
        mainTitle.textContent = `Топ ${categoryNames[category]}`; // Изменить заголовок h1

        // Загрузка HTML файла с сайтами
        fetch(`top/${category}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(html => {
                siteList.innerHTML = html; // Вставить загруженный HTML в список
            })
            .catch(error => {
                siteList.innerHTML = '<li>Ошибка загрузки данных.</li>';
                console.error('Ошибка:', error);
            });
    } else {
        siteList.innerHTML = '<li>Нет доступных сайтов для этой категории.</li>';
    }
}
