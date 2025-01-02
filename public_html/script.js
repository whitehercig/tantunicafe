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
        cryptotrading: "Крипто биржи",
        freelance: "Фриланс биржа",
        ecommerce: "Электронная коммерция",
        webdevelopment: "Веб-разработка",
        graphicdesign: "Графический дизайн",
        contentcreation: "Создание контента",
        influencermarketing: "Маркетинг влияния",
        appdevelopment: "Разработка приложений",
        seooptimization: "SEO-оптимизация",
        affiliatemarketing: "Партнёрский маркетинг",
        onlinecoaching: "Онлайн коучинг",
        healthwellness: "Здоровье и благополучие",
        financialservices: "Финансовые услуги",
        travel: "Путешествия и туризм",
        cybersecurity: "Кибербезопасность",
        ai: "Искусственный интеллект",
        blockchain: "Блокчейн",
        cloudservices: "Облачные услуги",
        startups: "Стартапы"
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

// Список страниц
const pages = [
    { name: "Микрозаймы", category: "microzaim" },
    { name: "Инвестиции", category: "investizii" },
    { name: "Криптовалюта", category: "cryptocurrency" },
    { name: "Криптокошельки", category: "cryptowallets" },
    { name: "Крипто биржи", category: "cryptotrading" },
    { name: "Фриланс биржа", category: "freelance" },
    { name: "Электронная коммерция", category: "ecommerce" },
    { name: "Веб-разработка", category: "webdevelopment" },
    { name: "Графический дизайн", category: "graphicdesign" },
    { name: "Создание контента", category: "contentcreation" },
    { name: "Маркетинг влияния", category: "influencermarketing" },
    { name: "Разработка приложений", category: "appdevelopment" },
    { name: "SEO-оптимизация", category: "seooptimization" },
    { name: "Партнёрский маркетинг", category: "affiliatemarketing" },
    { name: "Онлайн коучинг", category: "onlinecoaching" },
    { name: "Здоровье и благополучие", category: "healthwellness" },
    { name: "Финансовые услуги", category: "financialservices" },
    { name: "Путешествия и туризм", category: "travel" },
    { name: "Кибербезопасность", category: "cybersecurity" },
    { name: "Искусственный интеллект", category: "ai" },
    { name: "Блокчейн", category: "blockchain" },
    { name: "Облачные услуги", category: "cloudservices" },
    { name: "Стартапы", category: "startups" }
];
// Функция обработки ввода
document.getElementById('searchInput').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Очистить результаты

    if (query) {
        const matches = pages.filter(page => page.name.toLowerCase().includes(query));
        if (matches.length > 0) {
            matches.forEach(page => {
                const button = document.createElement('button');
                button.textContent = page.name; // Имя категории
                button.addEventListener('click', () => {
                    updateSites(page.category); // Вызов функции для отображения результата
                    resultsContainer.classList.remove('active'); // Скрыть результаты
                });
                resultsContainer.appendChild(button);
            });
            resultsContainer.classList.add('active'); // Показать результаты
        } else {
            resultsContainer.innerHTML = '<p style="padding: 10px; color: #777;">Ничего не найдено</p>';
            resultsContainer.classList.add('active');
        }
    } else {
        resultsContainer.classList.remove('active'); // Скрыть результаты
    }
});

