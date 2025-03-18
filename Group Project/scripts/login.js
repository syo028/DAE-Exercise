document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');

    // 切換密碼顯示/隱藏
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('bx-show');
        togglePassword.classList.toggle('bx-hide');
    });

    // 檢查是否有保存的登入信息
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
        rememberCheckbox.checked = true;
    }

    // 處理表單提交
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // 保存或清除記住的郵箱
        if (rememberCheckbox.checked) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }

        try {
            // 這裡添加您的登入邏輯
            // 例如：調用API進行驗證
            // const response = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email, password }),
            // });

            // 模擬登入成功
            showLoadingState();
            await new Promise(resolve => setTimeout(resolve, 1500)); // 模擬API調用延遲
            
            // 登入成功後重定向到主頁
            window.location.href = 'social.html';
        } catch (error) {
            showError('登入失敗，請檢查您的電子郵件和密碼');
        }
    });

    // 社交媒體登入按鈕處理
    document.querySelector('.social-btn.google').addEventListener('click', () => {
        // 實現Google登入邏輯
        console.log('Google登入被點擊');
    });

    document.querySelector('.social-btn.facebook').addEventListener('click', () => {
        // 實現Facebook登入邏輯
        console.log('Facebook登入被點擊');
    });

    // 顯示加載狀態
    function showLoadingState() {
        const loginBtn = loginForm.querySelector('.login-btn');
        const originalText = loginBtn.innerHTML;
        loginBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> 登入中...';
        loginBtn.disabled = true;
        
        // 3秒後恢復按鈕狀態（如果登入失敗）
        setTimeout(() => {
            loginBtn.innerHTML = originalText;
            loginBtn.disabled = false;
        }, 3000);
    }

    // 顯示錯誤信息
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        // 移除舊的錯誤信息
        const oldError = loginForm.querySelector('.error-message');
        if (oldError) {
            oldError.remove();
        }
        
        loginForm.insertBefore(errorDiv, loginForm.firstChild);
        
        // 3秒後自動移除錯誤信息
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
}); 