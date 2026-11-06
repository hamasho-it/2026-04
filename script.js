/* Bus-Fit 共通JavaScript (script.js) */
document.addEventListener("DOMContentLoaded", () => {
    // バス停検索機能 (bus_stop_select.html)
    const searchInput = document.getElementById("search-bus-stop");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const filter = e.target.value.toLowerCase();
            const items = document.querySelectorAll(".bus-stop-item");
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(filter)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // 予約フォーム送信 (reservation_form.html)
    const reservationForm = document.getElementById("reservation-form");
    if (reservationForm) {
        reservationForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("予約が完了しました。ご乗車をお待ちしております。");
            window.location.href = "./index.html";
        });
    }

    // リマインダー設定送信 (reminder_setting.html)
    const reminderForm = document.getElementById("reminder-form");
    if (reminderForm) {
        reminderForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("リマインダー設定を確定しました。到着前にお知らせします。");
            window.location.href = "./index.html";
        });
    }
});
