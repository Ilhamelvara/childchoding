document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Jika pengguna sedang di halaman register
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const username = document.getElementById('username').value.trim().toLowerCase();

            if (!name || !username) {
                alert('Silakan lengkapi semua data!');
                return;
            }

            // Ambil data users dari localStorage (sebagai simulasi database)
            let users = JSON.parse(localStorage.getItem('users')) || {};

            if (users[username]) {
                alert('Username sudah terdaftar! Silakan gunakan username lain.');
                return;
            }

            // Simpan data user baru
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

    // Jika pengguna sedang di halaman login
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
                // Set sesi user saat login berhasil
                localStorage.setItem('currentUser', JSON.stringify(users[username]));
                alert(`Selamat datang kembali, ${users[username].name}!`);
                
                // Arahkan ke halaman utama (misal index.html)
                window.location.href = 'index.html';
            } else {
                alert('Username tidak ditemukan. Silakan daftar terlebih dahulu.');
            }
        });
    }
});
