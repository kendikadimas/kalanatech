export const dynamic = 'force-static';

export default function sitemap() {
    return [
        {
            url: 'https://kalanalabs.my.id',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://kalanalabs.my.id/rental-mobil',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://kalanalabs.my.id/tour-travel',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://kalanalabs.my.id/terms',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: 'https://kalanalabs.my.id/artikel/jasa-pembuatan-website-purwokerto',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://kalanalabs.my.id/artikel/kenapa-bisnis-wajib-punya-website',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://kalanalabs.my.id/artikel/manfaat-website-umkm-purwokerto',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://kalanalabs.my.id/artikel/tips-seo-website-bisnis',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://kalanalabs.my.id/artikel/website-profesional-kepercayaan-pelanggan',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];
}
