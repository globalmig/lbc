import { MetadataRoute } from "next";
import { notices } from "./board/notices";
import { resourcePosts } from "./library/resources";
import { products } from "./shop/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lbcbio.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/company`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/board`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/library`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/partner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/map`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const boardRoutes: MetadataRoute.Sitemap = notices.map((notice) => ({
    url: `${baseUrl}/board/${notice.id}`,
    lastModified: new Date(notice.createdAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const libraryRoutes: MetadataRoute.Sitemap = resourcePosts.map((post) => ({
    url: `${baseUrl}/library/${post.id}`,
    lastModified: new Date(post.createdAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const shopRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/shop/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...boardRoutes, ...libraryRoutes, ...shopRoutes];
}
