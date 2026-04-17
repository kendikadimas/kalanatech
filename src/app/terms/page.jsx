import React from 'react';

// Terms page skeleton
// Styling will be migrated in Step 3

export const metadata = {
  title: 'Syarat & Ketentuan | KalanaLabs',
  description: 'Aturan Main & Kebijakan Kerjasama KalanaLabs',
};

export default function Terms() {
  return (
    <div className="terms-page">
      <nav className="p-6 border-b flex justify-between items-center">
        <div className="font-bold text-xl">KalanaLabs</div>
        <a href="/" className="text-blue-600">Kembali ke Beranda</a>
      </nav>
      
      <header className="bg-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold">Syarat & Ketentuan Layanan</h1>
        <p className="mt-4 text-gray-600">Aturan Main & Kebijakan Kerjasama KalanaLabs</p>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6 prose prose-blue">
        <p>Selamat datang di KalanaLabs! Merupakan sebuah kehormatan bagi kami untuk menjadi partner digital Anda.</p>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">1. Definisi & Ruang Lingkup Layanan</h2>
          <p>KalanaLabs menyediakan beberapa tingkatan layanan pengembangan digital...</p>
        </section>
        {/* Rest of content will be carefully migrated in Step 3/4 */}
      </main>
    </div>
  );
}
