/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://halseus.com',  // Change this to your actual domain
    generateRobotsTxt: true, // Generates robots.txt automatically
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: ['/protected', '/api/private'] },
      ],
    },
  };
  