document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    const currentUser = localStorage.getItem('currentUser');
    const currentPath = window.location.pathname;
    const isAuthPage = currentPath.endsWith('login.html') || currentPath.endsWith('register.html');
    const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';

    // Sinkronisasi UI Navbar (Masuk/Keluar)
    const navRight = document.querySelector('.nav-right');
    if (navRight) {
        if (currentUser) {
            navRight.innerHTML = '<button id="logoutBtn" class="logout-btn">Keluar</button>';
            document.getElementById('logoutBtn').addEventListener('click', () => {
                localStorage.removeItem('currentUser');
                window.location.href = 'login.html';
            });
        } else {
            navRight.innerHTML = '<a href="login.html" class="login-btn-nav">Masuk</a>';
        }
    }

    // Proteksi halaman: Izinkan index.html diakses tanpa login (Landing Page)
    if (!currentUser && !isAuthPage && !isHomePage && !currentPath.endsWith('.css') && !currentPath.endsWith('.js')) {
        window.location.href = 'login.html';
        return;
    }

    // Sinkronisasi data user jika sudah login
    if (currentUser) {
        const userData = JSON.parse(currentUser);
        const welcomeName = document.getElementById('welcomeName');
        if (welcomeName) {
            welcomeName.innerHTML = `Selamat datang, ${userData.name}!<br>Di Website Pembelajaran ChildCoding!`;
        }
    }

    // Jika sudah login dan mencoba mengakses halaman login/register, arahkan ke index.html
    if (currentUser && isAuthPage) {
        window.location.href = 'index.html';
        return;
    }

    // Register Logic
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const username = document.getElementById('username').value.trim().toLowerCase();

            if (!name || !username) {
                alert('Silakan lengkapi semua data!');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || {};
            if (users[username]) {
                alert('Username sudah terdaftar! Silakan gunakan username lain.');
                return;
            }

            users[username] = {
                name: name,
                username: username,
                joinedAt: new Date().toISOString()
            };

            localStorage.setItem('users', JSON.stringify(users));
            alert('Pendaftaran berhasil! Silakan login menggunakan username Anda.');
            window.location.href = 'login.html';
        });
    }

    // Login Logic
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim().toLowerCase();

            if (!username) {
                alert('Silakan masukkan username Anda!');
                return;
            }

            let users = JSON.parse(localStorage.getItem('users')) || {};

            if (users[username]) {
                localStorage.setItem('currentUser', JSON.stringify(users[username]));
                alert(`Selamat datang kembali, ${users[username].name}!`);
                window.location.href = 'index.html';
            } else {
                alert('Username tidak ditemukan. Silakan daftar terlebih dahulu.');
            }
        });
    }
});


