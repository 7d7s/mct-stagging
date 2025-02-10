// utils/seoHelpers.ts
import { SEO_DEFAULTS } from "../config/seoConfig";
interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  [key: string]: unknown;
  author?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  ogType?: string;
  ogLocale?: string;
  ogSiteName?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageType?: string;
  ogImageAlt?: string;
  ogImageUrl?: string;
  ogImageSecureUrl?: string
  canonicalUrl?: string;
  themeColor?: string;
}
export function generateMetaTags(metaData: SeoMetadata) {
    return {
      title: metaData.title || SEO_DEFAULTS.title,
      description: metaData.description || SEO_DEFAULTS.description,
      keywords: metaData.keywords || SEO_DEFAULTS.keywords,
      author: metaData.author || SEO_DEFAULTS.og.author,
      twitterCard: metaData.twitterCard || SEO_DEFAULTS.twitter.card,
      twitterSite: metaData.twitterSite || SEO_DEFAULTS.twitter.site,
      twitterCreator: metaData.twitterCreator || SEO_DEFAULTS.twitter.creator,
      ogType: metaData.ogType || SEO_DEFAULTS.og.type,
      ogLocale: metaData.ogLocale || SEO_DEFAULTS.og.locale,
      ogSiteName: metaData.ogSiteName || SEO_DEFAULTS.og.title,
      ogImage: metaData.ogImage || SEO_DEFAULTS.og.image,
      canonicalUrl: metaData.canonicalUrl || SEO_DEFAULTS.canonicalUrl,
      themeColor: metaData.themeColor || SEO_DEFAULTS.themeColor,
    };
  }
