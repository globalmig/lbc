/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lkcustoms.co.kr", // 실제 도메인
  generateRobotsTxt: true, // robots.txt도 같이 생성
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/admin/*", "/api/*"], // 관리자/API 같은 건 제외
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
