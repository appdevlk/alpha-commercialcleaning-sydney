module.exports = {
  siteUrl: 'https://alpha-commercialcleaning-sydney.com.au/',
  generateRobotsTxt: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/_next/static/sitemap.xml',
      },
    ];
  },
};
