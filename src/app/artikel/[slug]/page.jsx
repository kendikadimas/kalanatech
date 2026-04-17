import React from 'react';
import Link from 'next/link';

// Mock article data - in real app, fetch from CMS or JSON file
const articles = [
  {
    slug: 'jasa-pembuatan-website-purwokerto',
    title: 'Jasa Pembuatan Website Purwokerto: Solusi Digital Partner Bisnis Anda',
    date: '14 Maret 2026',
    readTime: '5 Menit Baca'
  },
  {
    slug: 'kenapa-bisnis-wajib-punya-website',
    title: 'Kenapa Bisnis Wajib Punya Website di Era Digital?',
    date: '10 Maret 2026',
    readTime: '4 Menit Baca'
  },
  {
    slug: 'manfaat-website-umkm-purwokerto',
    title: 'Manfaat Website untuk UMKM di Purwokerto',
    date: '5 Maret 2026',
    readTime: '6 Menit Baca'
  },
  {
    slug: 'tips-seo-website-bisnis',
    title: 'Tips SEO untuk Website Bisnis Anda',
    date: '1 Maret 2026',
    readTime: '7 Menit Baca'
  },
  {
    slug: 'website-profesional-kepercayaan-pelanggan',
    title: 'Website Profesional Meningkatkan Kepercayaan Pelanggan',
    date: '25 Februari 2026',
    readTime: '5 Menit Baca'
  }
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <div>Artikel tidak ditemukan.</div>;

  return (
    <div className="article-layout">
      <nav className="p-6 border-b">
         <Link href="/" className="font-bold text-xl">KalanaLabs</Link>
      </nav>

      <main className="max-w-3xl mx-auto py-16 px-6">
        <header className="mb-10">
          <div className="text-gray-500 text-sm mb-2">
            {article.date} • {article.readTime}
          </div>
          <h1 className="text-4xl font-bold">{article.title}</h1>
        </header>

        <article className="prose prose-lg max-w-none">
          <p>Konten artikel "{article.title}" sedang dalam proses migrasi...</p>
          {/* Detailed content migration in Step 3/4 */}
        </article>
      </main>
    </div>
  );
}
