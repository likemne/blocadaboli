<script>
        // Простая логика для фильтрации
        document.querySelectorAll('.filter-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
        
        // Сброс фильтров
        document.querySelector('.reset-filter').addEventListener('click', function() {
            document.querySelectorAll('.filter-item').forEach(item => {
                item.classList.remove('active');
            });
        });
    </script>