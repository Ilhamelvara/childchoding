// AUTHENTICATION & PROFILE LOGIC
function checkAuth() {
    const userData = localStorage.getItem('childCoding_user');
    const currentPage = window.location.pathname.split('/').pop();

    // Redirect to login if no session (except on index.html, learning.html, event.html)
    // Actually, let's allow viewing public pages, but restrict dashboard.
    if (!userData && currentPage === 'dashboard.html') {
        window.location.href = 'login.html';
        return;
    }

    if (userData) {
        updateUIWithUser(JSON.parse(userData));
    } else {
        showLoginState();
    }
}

function updateUIWithUser(user) {
    const navAvatar = document.getElementById('navAvatar');
    const accountName = document.getElementById('accountName');
    const accountRole = document.getElementById('accountRole');
    const streakDays = document.querySelector('#streakInfo .fw-bold') || document.querySelector('.streak-num');
    
    // Dashboard elements
    const sidebarAvatar = document.getElementById('sidebarAvatar');
    const sidebarName = document.getElementById('sidebarUserName');
    const topbarAvatar = document.getElementById('topbarAvatar');
    const welcomeTitle = document.getElementById('welcomeTitle');
    const heroName = document.getElementById('heroWelcomeName');
    
    const userXP = document.getElementById('userXP');
    const userCourses = document.getElementById('userCourses');
    const userHours = document.getElementById('userHours');

    const avatarText = user.avatar || user.name.substring(0, 2).toUpperCase();

    if (navAvatar) navAvatar.innerText = avatarText;
    if (sidebarAvatar) sidebarAvatar.innerText = avatarText;
    if (topbarAvatar) topbarAvatar.innerText = avatarText;

    if (accountName) accountName.innerText = user.name;
    if (sidebarName) sidebarName.innerText = user.name;
    if (welcomeTitle) welcomeTitle.innerText = user.name;
    if (heroName) heroName.innerText = `${user.name}!`;

    if (accountRole) accountRole.innerText = user.role || 'Pelajar';
    if (streakDays) streakDays.innerText = `${user.streak || 0} Hari`;
    
    if (userXP) { userXP.innerText = user.xp || 0; userXP.dataset.target = user.xp || 0; }
    if (userCourses) { userCourses.innerText = user.courses || 0; userCourses.dataset.target = user.courses || 0; }
    if (userHours) { userHours.innerText = user.hours || 0; userHours.dataset.target = user.hours || 0; }
}

function showLoginState() {
    const accountInfo = document.getElementById('accountInfo');
    const navAvatar = document.getElementById('navAvatar');

    if (accountInfo) {
        accountInfo.innerHTML = `
            <a href="login.html" class="btn btn-sm btn-success px-3 fw-bold">Login</a>
        `;
    }
    if (navAvatar) {
        navAvatar.innerHTML = '<i class="bi bi-person"></i>';
        navAvatar.style.background = '#e2e8f0';
        navAvatar.style.color = '#64748b';
    }
}

function logout() {
    localStorage.removeItem('childCoding_user');
    window.location.href = 'index.html';
}

// Run check on load
document.addEventListener('DOMContentLoaded', checkAuth);
