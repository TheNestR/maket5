document.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('textToCopy');
    const notificationElement = document.getElementById('copyNotification');

    textElement.addEventListener('click', () => {
        const textToCopy = textElement.innerText;

        // Используем API Clipboard для копирования текста
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                // Показываем уведомление
                notificationElement.classList.add('show');
                // Прячем уведомление через 3 секунды
                setTimeout(() => {
                    notificationElement.classList.remove('show');
                }, 3000);
            })
            .catch(err => {
                console.error('Не удалось скопировать текст: ', err);
            });
    });
});
