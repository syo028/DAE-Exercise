document.addEventListener('DOMContentLoaded', function() {
    // 獲取繼續按鈕元素
    const continueBtn = document.getElementById('continue-btn');

    // 添加點擊事件監聽器
    continueBtn.addEventListener('click', function() {
        // 添加按鈕點擊效果
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);

        // 添加過渡效果
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';

        // 延遲跳轉以顯示過渡效果
        setTimeout(() => {
            window.location.href = 'register.html';
        }, 500);
    });

    // 添加頁面載入動畫
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});
