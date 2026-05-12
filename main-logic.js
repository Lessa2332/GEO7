const SCRIPT_URL = "ВАШ_URL_З_КРОКУ_1"; // Вставте сюди посилання з Google Scripts

// Функція для збереження прогресу та відправки вчителю
function saveAndSync(updatedData) {
    // 1. Оновлюємо локальну пам'ять (для учня)
    localStorage.setItem('geo_user', JSON.stringify(updatedData));
    
    // 2. Відправляємо вчителю в таблицю
    fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // щоб уникнути проблем з CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });

    console.log("Дані синхронізовано!");
}

// Функція для отримання поточної інформації про учня
function getUser() {
    return JSON.parse(localStorage.getItem('geo_user')) || null;
}
