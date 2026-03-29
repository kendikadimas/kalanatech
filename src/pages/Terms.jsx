import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      

    {/*  Navigation  */}
    <nav className="navbar navbar-solid" id="navbar">
        <div className="nav-container">
            <Link to="/" className="nav-logo">
                <img src="logo.png" alt="KalanaLabs Logo" className="logo-img" />
                KalanaLabs
            </Link>
            <ul className="nav-links" id="navLinks">
                <li><a href="/#hero" className="nav-link">Home</a></li>
                <li><a href="/#services" className="nav-link">Layanan</a></li>
                <li><a href="/#portfolio" className="nav-link">Portofolio</a></li>
                <li><a href="/#pricing" className="nav-link">Harga</a></li>
                <li><a href="/#about" className="nav-link">Tentang Kami</a></li>
                <li><a href="/#articles" className="nav-link">Artikel</a></li>
                <li><a href="/#faq" className="nav-link">FAQ</a></li>
            </ul>
            <a href="/#contact" className="nav-cta">Konsultasi Gratis</a>
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    {/*  Header  */}
    <header className="page-header">
        <div className="container">
            <h1>Syarat & Ketentuan Layanan</h1>
            <p>Aturan Main & Kebijakan Kerjasama KalanaLabs</p>
        </div>
    </header>

    {/*  Document Content  */}
    <main className="document-container">
        <div className="doc-content">
            <p>Selamat datang di KalanaLabs! Merupakan sebuah kehormatan bagi kami untuk menjadi partner digital Anda.</p>
            <p>Dokumen <em>Terms & Conditions</em> (T&C) ini disusun dengan tujuan menciptakan transparansi, melindungi hak kedua belah pihak, serta memastikan setiap proyek berjalan lancar dari tahap awal hingga peluncuran. Dengan menyetujui penawaran kami atau membayarkan Uang Muka (DP), Klien dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.</p>

            <div className="doc-alert">
                <h3><ion-icon name="flash-outline"></ion-icon> Ringkasan Singkat (TL;DR)</h3>
                <p>Bagi Anda yang membutuhkan poin-poin utamanya secara cepat, berikut adalah ringkasan aturan main di KalanaLabs:</p>
                <ul>
                    <li><strong>Pembayaran</strong>: Skema 50% DP (tidak dapat dikembalikan jika batal sepihak oleh klien) dan 50% Pelunasan (harus diselesaikan sebelum serah terima akhir/akses <em>source code</em> diberikan).</li>
                    <li><strong>Revisi & "Unlimited"</strong>: Terdapat batasan revisi sesuai paket. Klaim "Revisi Unlimited" berlaku <em>hanya</em> pada masa pengembangan aktif (sebelum tahap UAT) dan terbatas pada perubahan minor (seperti teks, warna, tata letak dasar), bukan perombakan fitur.</li>
                    <li><strong>Keterlambatan Klien</strong>: Mohon responsif! Jika Klien tidak memberikan materi yang dibutuhkan selama lebih dari 14 hari kerja, proyek akan dianggap "Pause" atau "Selesai" secara sepihak untuk menjaga alokasi waktu <em>developer</em>.</li>
                    <li><strong>Hosting & Domain</strong>: Gratis untuk 1 tahun pertama dengan batasan <em>resource</em>. KalanaLabs tidak bertanggung jawab jika website <em>down</em> akibat lonjakan trafik di luar spesifikasi paket.</li>
                    <li><strong>Garansi</strong>: Garansi perbaikan <em>bug/error</em> berlaku 30 hari pasca-peluncuran. Di luar 30 hari, penyesuaian akan masuk layanan <em>Maintenance</em> berbayar.</li>
                </ul>
            </div>

            <section>
                <h2>1. Definisi & Ruang Lingkup Layanan</h2>
                <p>KalanaLabs menyediakan beberapa tingkatan layanan pengembangan digital, yang secara garis besar dibedakan menjadi:</p>
                <ol>
                    <li><strong>Paket Basic/Starter</strong>: Layanan ringkas yang menggunakan struktur/desain siap pakai untuk <em>deployment</em> cepat guna kebutuhan promosi dasar.</li>
                    <li><strong>Paket Business/Professional</strong>: Website dengan fitur dinamis tingkat menengah, desain kustom, dan CMS penuh.</li>
                    <li><strong>Paket Advanced/Enterprise</strong>: Solusi sistem kustom lengkap, aplikasi berbasis data kompleks, integrasi API, dirancang spesifik untuk alur bisnis.</li>
                </ol>
                <p>Ruang lingkup pasti dijabarkan secara terperinci dalam dokumen penawaran (Quotation) atau Statement of Work (SoW). Segala permintaan penambahan fitur di luar dokumen tersebut adalah <em>Change Request</em> dengan biaya tambahan.</p>
            </section>

            <section>
                <h2>2. Kebijakan Revisi & Ketegasan "Unlimited"</h2>
                <p>KalanaLabs berkomitmen menyajikan hasil terbaik, namun sebuah proyek yang efektif mutlak memerlukan batasan:</p>
                <ul>
                    <li><strong>Batasan Revisi Standar</strong>: Kuota revisi pada paket reguler berlaku untuk perubahan minor setelah draf desain diajukan, bukan pembuatan desain baru dari awal.</li>
                    <li><strong>Definisi "Revisi Unlimited"</strong>: Pada paket Premium, Klien berhak revisi tanpa batas dengan syarat berlaku <strong>hanya selama masa pengembangan berjalan</strong> dan <strong>sebelum tahap User Acceptance Test (UAT)</strong>.</li>
                    <li><strong>Skala Minor vs Mayor</strong>: Revisi "Unlimited" dibatasi pada penyesuaian skala kecil (copywriting, warna, font). Perubahan skala besar (perombakan database, fitur, algoritma) masuk kategori fitur baru, bukan revisi.</li>
                </ul>
            </section>

            <section>
                <h2>3. Hosting, Domain & Stabilitas Server</h2>
                <ul>
                    <li>Layanan mencakup biaya registrasi Domain dan penyewaan Hosting gratis khusus <strong>Tahun Pertama</strong>. Perpanjangan tahun selanjutnya menjadi tanggung jawab Klien.</li>
                    <li>Hosting gratis memiliki batas spesifikasi <em>resource</em> (Space, Bandwidth, CPU). KalanaLabs <strong>tidak bertanggung jawab</strong> atas <em>server down</em> jika trafik melonjak melebihi kapasitas layanan hosting. Klien dapat melakukan <em>upgrade</em> server dengan biaya tambahan.</li>
                </ul>
            </section>

            <section>
                <h2>4. Tanggung Jawab Konten & Materi</h2>
                <ul>
                    <li>Klien berkewajiban menyediakan seluruh aset proyek (Teks, Produk, Logo, Fotografi), kecuali berlangganan layanan <em>Copywriting</em> dari KalanaLabs.</li>
                    <li><strong>Pelepasan Tanggung Jawab Hukum</strong>: KalanaLabs tidak bertanggung jawab atas tuntutan hukum akibat pelanggaran Hak Cipta pada materi yang diberikan Klien. Klien menjamin materi yang diberikan sah dan legal.</li>
                </ul>
            </section>

            <section>
                <h2>5. Termin & Kebijakan Pembayaran</h2>
                <p>Kami mengaplikasikan skema pembayaran <strong>Termin 50/50</strong>:</p>
                <ul>
                    <li><strong>Uang Muka (DP) 50%</strong>: Wajib dibayarkan sebelum pengerjaan. Bersifat <strong>Non-Refundable</strong> jika Klien membatalkan proyek sepihak.</li>
                    <li><strong>Pelunasan 50%</strong>: Wajib diselesaikan setelah tahap UAT. Akses administrator dan <em>source code</em> diberikan setelah pelunasan 100%.</li>
                </ul>
            </section>

            <section>
                <h2>6. Jeda Proyek & Keterlambatan Serah Materi</h2>
                <p>Bila Klien <strong>berabsen/lepas komunikasi selama lebih dari 14 Hari Kerja</strong> tanpa alasan yang kuat, KalanaLabs berhak secara sepihak mengatur status proyek menjadi <strong>"Pause"</strong> atau menjadikannya langsung <strong>"Completed" (Selesai Administratif)</strong>.</p>
            </section>

            <section>
                <h2>7. Garansi & Pemeliharaan</h2>
                <ul>
                    <li>Fasilitas <strong>Garansi Perbaikan Bug Dasar 30 Hari</strong> terhitung sejak momen peluncuran serah-terima perdana.</li>
                    <li>Setelah masa 30 Hari, segala penambahan fitur atau perbaikan fungsional disarankan untuk tertaut lewat paket <strong>Layanan Maintenance Berbayar</strong>.</li>
                </ul>
            </section>
            
            <p style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--gray-100)' }}>
                KalanaLabs senantiasa mengutamakan jalur solutif secara komunikasi dua arah demi kesuksesan digital bisnis Anda.
                <br /><br />
                <strong>Pemutakhiran Terakhir: Maret 2026</strong>
            </p>
        </div>
    </main>

    {/*  Footer  */}
    <footer className="footer">
        <div className="container">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="nav-logo footer-logo">
                        <img src="logo.png" alt="KalanaLabs Logo" className="logo-img" />
                        KalanaLabs
                    </Link>
                    <p>Partner digital terpercaya untuk membantu bisnis Anda tumbuh dan berkembang di era digital.</p>
                </div>
                <div className="footer-col">
                    <h4>Navigasi</h4>
                    <ul>
                        <li><a href="/#hero">Home</a></li>
                        <li><a href="/#services">Layanan</a></li>
                        <li><a href="/#pricing">Harga</a></li>
                        <li><a href="/#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Kontak</h4>
                    <ul>
                        <li><a href="mailto:kalanalabs@gmail.com">kalanalabs@gmail.com</a></li>
                        <li><a href="https://wa.me/6285707736885">+62 857-0773-6885</a></li>
                        <li><a href="#">Purwokerto, Jawa Tengah</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 KalanaLabs. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    

    </>
  );
}
