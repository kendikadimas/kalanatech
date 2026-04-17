/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kalanalabs.my.id',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/private/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://kalanalabs.my.id/sitemap.xml',
    ],
  },
}
