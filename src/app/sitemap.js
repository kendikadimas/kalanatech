export default function sitemap() {
  const baseUrl = 'https://kalanalabs.my.id';

  // Artikel slugs
  const articles = [
    'jasa-pembuatan-website-purwokerto',
    'kenapa-bisnis-wajib-punya-website',
    'manfaat-website-umkm-purwokerto',
    'tips-seo-website-bisnis',
    'website-profesional-kepercayaan-pelanggan',
  ];

  const articleEntries = articles.map((slug) => ({
    url: `${baseUrl}/artikel/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/rental-mobil`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-travel`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...articleEntries,
  ];
}
