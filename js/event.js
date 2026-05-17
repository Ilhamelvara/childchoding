/* ==========================================
   EVENT PAGE - Modal & Interaction Logic
   ========================================== */

const eventData = {
    'webinar': {
        type: 'Webinar Gratis',
        title: 'Membangun Karir Sebagai Web Developer',
        desc: `<p>Mulai langkah awalmu di dunia teknologi! Webinar interaktif ini dirancang khusus bagi pemula yang ingin memahami prospek kerja dan langkah konkret untuk menjadi seorang Web Developer profesional di tahun 2026.</p>
               <p>Dalam sesi ini, pembicara akan membagikan roadmap belajar yang efisien, cara menembus industri teknologi tanpa background IT, serta tips menyusun portfolio pertama yang memikat perusahaan.</p>
               <p><strong>Detail Pelaksanaan:</strong></p>
               <ul class="event-detail-list">
                   <li><strong>Waktu:</strong> 15 Mei 2026, 19:00 - 21:00 WIB</li>
                   <li><strong>Tempat:</strong> Via Zoom Meeting</li>
                   <li><strong>Pembicara:</strong> Budi Santoso (Lead Frontend Engineer)</li>
               </ul>
               <p><strong>Apa saja yang akan dibahas?</strong></p>
               <ul class="event-detail-list">
                   <li>Roadmap terlengkap dari pemula ke profesional (HTML, CSS, JS, hingga Framework).</li>
                   <li>Bagaimana industri memandang keahlian dibanding gelar akademik.</li>
                   <li>Sesi Q&amp;A langsung untuk berdiskusi seputar tantangan belajarmu.</li>
               </ul>`
    },
    'workshop': {
        type: 'Workshop Hands-on',
        title: 'Membuat Portfolio dengan React JS',
        desc: `<p>Bawa keahlian coding-mu ke tingkat selanjutnya! Workshop hands-on ini akan memandu Anda secara langsung untuk membangun website portfolio pribadi yang modern, interaktif, dan berestetika premium menggunakan React JS.</p>
               <p>Peserta diharapkan sudah memiliki pemahaman dasar HTML, CSS, dan JavaScript dasar sebelum mengikuti workshop ini agar pembelajaran berjalan maksimal.</p>
               <p><strong>Detail Pelaksanaan:</strong></p>
               <ul class="event-detail-list">
                   <li><strong>Waktu:</strong> 22 Mei 2026, 10:00 - 15:00 WIB</li>
                   <li><strong>Tempat:</strong> Via Google Meet</li>
                   <li><strong>Pembicara:</strong> Elvara Rahma (Lead Developer)</li>
               </ul>
               <p><strong>Agenda Praktik:</strong></p>
               <ul class="event-detail-list">
                   <li>Instalasi dan setup proyek React dengan Vite.</li>
                   <li>Membuat komponen interaktif (Hero, Project Grid, Contact Form).</li>
                   <li>Menyematkan animasi micro-interaction yang smooth.</li>
                   <li>Deploy website ke Vercel secara live sehingga bisa langsung diakses publik.</li>
               </ul>`
    },
    'hackathon': {
        type: 'Kompetisi Coding',
        title: 'ChildCoding Hackathon 2026',
        desc: `<p>Uji kreativitas dan kemampuan memecahkan masalahmu dalam ajang kompetisi coding nasional terbesar tahun ini! <strong>ChildCoding Hackathon 2026</strong> menantang para pemula dan mahasiswa untuk merancang solusi digital inovatif.</p>
               <p>Tema kompetisi tahun ini adalah <em>"Teknologi Edukasi Kreatif untuk Anak"</em>. Kembangkan aplikasi web atau mobile interaktif yang membuat belajar menjadi sangat seru!</p>
               <p><strong>Detail Pelaksanaan:</strong></p>
               <ul class="event-detail-list">
                   <li><strong>Waktu:</strong> 05 Juni 2026, 08:00 WIB (48 Jam)</li>
                   <li><strong>Tempat:</strong> Online Challenge Platform</li>
                   <li><strong>Juri:</strong> Juri Ahli (Praktisi Senior &amp; EdTech)</li>
               </ul>
               <p><strong>Detail Hadiah:</strong></p>
               <ul class="event-detail-list">
                   <li><strong>Juara 1:</strong> Rp5.000.000 + Sertifikat + Magang</li>
                   <li><strong>Juara 2:</strong> Rp3.000.000 + Sertifikat Kejuaraan</li>
                   <li><strong>Juara 3:</strong> Rp1.500.000 + Sertifikat Kejuaraan</li>
               </ul>`
    }
};

function openEventDetail(e, key) {
    e.preventDefault();
    const data = eventData[key];
    if (!data) return;

    document.getElementById('modalEventType').textContent  = data.type;
    document.getElementById('modalEventTitle').textContent = data.title;
    document.getElementById('modalEventDesc').innerHTML    = data.desc;

    document.getElementById('eventModal').classList.add('active');
}

function closeModal() {
    document.getElementById('eventModal').classList.remove('active');
}

// Close on Esc key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
