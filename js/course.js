// ==========================================
// COURSE DETAIL PAGE - Lesson Modal & Curriculum
// Digunakan oleh: frontend-detail.html dan halaman kursus lainnya
// ==========================================

const lessons = {
    'html-intro': {
        title: 'Pengenalan HTML & Struktur Dokumen',
        explanation: `<p>HTML (<strong>HyperText Markup Language</strong>) adalah bahasa standar untuk membuat halaman web. HTML menggunakan <em>tag</em> untuk menandai elemen-elemen pada halaman.</p>
            <p>Setiap dokumen HTML memiliki struktur dasar yang wajib ada:</p>
            <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code> — Memberitahu browser bahwa ini dokumen HTML5</li>
                <li><code>&lt;html&gt;</code> — Elemen akar dari seluruh halaman</li>
                <li><code>&lt;head&gt;</code> — Berisi metadata seperti judul dan link CSS</li>
                <li><code>&lt;body&gt;</code> — Berisi semua konten yang tampil di layar</li>
            </ul>`,
        code: `&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Halaman Pertamaku&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Halo, Dunia!&lt;/h1&gt;
    &lt;p&gt;Ini adalah halaman web pertamaku.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;`
    },
    'html-tags': {
        title: 'Tag-tag HTML yang Wajib Dikuasai',
        explanation: `<p>HTML memiliki banyak tag, tetapi ada beberapa yang paling sering digunakan dan wajib dikuasai:</p>
            <ul>
                <li><code>&lt;h1&gt; - &lt;h6&gt;</code> — Heading / Judul (h1 terbesar, h6 terkecil)</li>
                <li><code>&lt;p&gt;</code> — Paragraf teks</li>
                <li><code>&lt;a href="..."&gt;</code> — Link/tautan ke halaman lain</li>
                <li><code>&lt;img src="..."&gt;</code> — Menampilkan gambar</li>
                <li><code>&lt;ul&gt; / &lt;ol&gt; / &lt;li&gt;</code> — Daftar tidak berurutan / berurutan</li>
                <li><code>&lt;div&gt;</code> — Kontainer blok serbaguna</li>
                <li><code>&lt;span&gt;</code> — Kontainer inline serbaguna</li>
            </ul>`,
        code: `&lt;!-- Heading --&gt;
&lt;h1&gt;Judul Utama&lt;/h1&gt;
&lt;h2&gt;Sub Judul&lt;/h2&gt;

&lt;!-- Paragraf &amp; Link --&gt;
&lt;p&gt;Kunjungi &lt;a href="https://google.com"&gt;Google&lt;/a&gt; untuk mencari.&lt;/p&gt;

&lt;!-- Gambar --&gt;
&lt;img src="foto.jpg" alt="Foto Profil" width="200"&gt;

&lt;!-- Daftar --&gt;
&lt;ul&gt;
    &lt;li&gt;HTML&lt;/li&gt;
    &lt;li&gt;CSS&lt;/li&gt;
    &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;`
    },
    'html-form': {
        title: 'Membuat Form & Tabel HTML',
        explanation: `<p><strong>Form</strong> digunakan untuk mengumpulkan input dari pengguna, seperti login, registrasi, atau pencarian.</p>
            <p><strong>Tabel</strong> digunakan untuk menampilkan data yang terstruktur dalam baris dan kolom.</p>
            <p>Elemen form penting:</p>
            <ul>
                <li><code>&lt;form&gt;</code> — Pembungkus form</li>
                <li><code>&lt;input type="text"&gt;</code> — Kotak teks</li>
                <li><code>&lt;input type="password"&gt;</code> — Kolom kata sandi</li>
                <li><code>&lt;button type="submit"&gt;</code> — Tombol kirim</li>
            </ul>`,
        code: `&lt;!-- Form Login --&gt;
&lt;form action="/login" method="POST"&gt;
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" placeholder="email@kamu.com"&gt;

    &lt;label for="password"&gt;Password:&lt;/label&gt;
    &lt;input type="password" id="password" name="password"&gt;

    &lt;button type="submit"&gt;Masuk&lt;/button&gt;
&lt;/form&gt;

&lt;!-- Tabel Sederhana --&gt;
&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;Nama&lt;/th&gt;
        &lt;th&gt;Nilai&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Budi&lt;/td&gt;
        &lt;td&gt;90&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;`
    },
    'html-semantic': {
        title: 'HTML5 Semantik: header, nav, section',
        explanation: `<p>HTML5 memperkenalkan tag-tag <strong>semantik</strong> — tag yang menjelaskan makna konten, bukan hanya tampilannya. Ini membantu browser, mesin pencari, dan screen reader memahami struktur halaman.</p>
            <p>Tag semantik yang penting:</p>
            <ul>
                <li><code>&lt;header&gt;</code> — Bagian atas halaman (logo, judul)</li>
                <li><code>&lt;nav&gt;</code> — Menu navigasi</li>
                <li><code>&lt;main&gt;</code> — Konten utama halaman</li>
                <li><code>&lt;section&gt;</code> — Bagian/grup konten bertema</li>
                <li><code>&lt;article&gt;</code> — Konten mandiri (berita, post blog)</li>
                <li><code>&lt;footer&gt;</code> — Bagian bawah halaman</li>
            </ul>`,
        code: `&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;body&gt;

    &lt;header&gt;
        &lt;h1&gt;ChildCoding&lt;/h1&gt;
    &lt;/header&gt;

    &lt;nav&gt;
        &lt;a href="/"&gt;Home&lt;/a&gt;
        &lt;a href="/kursus"&gt;Kursus&lt;/a&gt;
    &lt;/nav&gt;

    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Kursus Terbaru&lt;/h2&gt;
            &lt;article&gt;
                &lt;h3&gt;Belajar HTML Dasar&lt;/h3&gt;
                &lt;p&gt;Mulai belajar dari sini!&lt;/p&gt;
            &lt;/article&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2026 ChildCoding&lt;/p&gt;
    &lt;/footer&gt;

&lt;/body&gt;
&lt;/html&gt;`
    },
    'html-seo': {
        title: 'Aksesibilitas & SEO Dasar',
        explanation: `<p><strong>SEO (Search Engine Optimization)</strong> adalah cara agar halaman web mudah ditemukan di mesin pencari seperti Google.</p>
            <p><strong>Aksesibilitas</strong> memastikan halaman web dapat digunakan oleh semua orang, termasuk yang menggunakan screen reader.</p>
            <p>Tips dasar SEO &amp; Aksesibilitas di HTML:</p>
            <ul>
                <li>Gunakan <code>&lt;title&gt;</code> yang deskriptif di setiap halaman</li>
                <li>Tambahkan <code>&lt;meta name="description"&gt;</code> untuk ringkasan halaman</li>
                <li>Selalu isi atribut <code>alt</code> pada tag <code>&lt;img&gt;</code></li>
                <li>Gunakan heading secara berurutan: h1 → h2 → h3</li>
                <li>Gunakan tag semantik (header, nav, main, footer)</li>
            </ul>`,
        code: `&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

    &lt;!-- SEO: Judul dan Deskripsi --&gt;
    &lt;title&gt;Belajar HTML - ChildCoding&lt;/title&gt;
    &lt;meta name="description"
        content="Panduan lengkap belajar HTML dari dasar untuk pemula."&gt;

&lt;/head&gt;
&lt;body&gt;

    &lt;!-- Aksesibilitas: Alt pada gambar --&gt;
    &lt;img src="logo.png" alt="Logo ChildCoding"&gt;

    &lt;!-- Heading berurutan --&gt;
    &lt;h1&gt;Belajar HTML&lt;/h1&gt;
    &lt;h2&gt;Modul 1: Dasar HTML&lt;/h2&gt;
    &lt;h3&gt;Tag Penting&lt;/h3&gt;

&lt;/body&gt;
&lt;/html&gt;`
    }
};

// ---------- Lesson Modal ----------
function openLesson(e, key) {
    e.preventDefault();
    const lesson = lessons[key];
    if (!lesson) return;

    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonBody').innerHTML = `
        <div class="lesson-text">${lesson.explanation}</div>
        <div class="lesson-code-block">
            <div class="code-header">
                <span>Contoh Kode</span>
            </div>
            <pre><code>${lesson.code}</code></pre>
        </div>`;

    document.getElementById('lessonModal').classList.add('active');
}

// ---------- Curriculum Accordion ----------
function toggleCurriculum(header) {
    header.parentElement.classList.toggle('open');
}
