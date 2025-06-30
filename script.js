<script>
    // Полная реализация фильтрации статей
    document.addEventListener('DOMContentLoaded', function() {
        const filterItems = document.querySelectorAll('.filter-item');
        const resetButton = document.querySelector('.reset-filter');
        const articleCards = document.querySelectorAll('.article-card');
        
        // Обработчики для фильтров
        filterItems.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
                filterArticles();
            });
        });
        
        // Обработчик для сброса фильтров
        resetButton.addEventListener('click', function() {
            filterItems.forEach(item => item.classList.remove('active'));
            filterArticles();
        });
        
        // Функция фильтрации статей
        function filterArticles() {
            // Получаем активные фильтры
            const activeFilters = Array.from(filterItems)
                .filter(item => item.classList.contains('active'))
                .map(item => item.textContent.trim());
            
            // Если нет активных фильтров - показать все статьи
            if (activeFilters.length === 0) {
                articleCards.forEach(card => {
                    card.style.display = 'block';
                });
                return;
            }
            
            // Фильтрация статей
            articleCards.forEach(card => {
                const category = card.querySelector('.article-category').textContent.trim();
                const shouldShow = activeFilters.some(filter => 
                    filter === category || 
                    filter === 'Все' || 
                    (filter === 'Новости' && card.classList.contains('news'))
                );
                
                card.style.display = shouldShow ? 'block' : 'none';
            });
        }
        
        // Инициализация фильтрации
        filterArticles();
    });
</script>
