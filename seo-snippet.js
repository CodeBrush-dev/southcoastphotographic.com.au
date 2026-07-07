// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.southcoastphotographic.com.au",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.southcoastphotographic.com.au/","title_tag":"South Coast Photography | South Coast Photographic","meta_description":"South Coast Photography specialist for small business, events, property and aerial shoots across the Illawarra and NSW South Coast. Professional imagery that markets your brand."},{"page_url":"https://www.southcoastphotographic.com.au/about","title_tag":"Professional Photographer Illawarra | South Coast Photographic","meta_description":"Professional Photographer Illawarra and NSW South Coast with 15+ years’ experience in business, property, marketing and headshot photography. Quality, natural imagery that lasts."},{"page_url":"https://www.southcoastphotographic.com.au/about-3","title_tag":"South Coast Photography Products | South Coast Photographic","meta_description":"South Coast Photography products for small business: headshots, product, property and aerial photography to enhance your brand across web, print and marketing on the NSW South Coast."},{"page_url":"https://www.southcoastphotographic.com.au/photography-services","title_tag":"Commercial Photographer South Coast | South Coast Photographic","meta_description":"Commercial Photographer South Coast providing corporate, small business, property, aerial, event and headshot photography across the NSW South Coast, Shoalhaven and Illawarra."},{"page_url":"https://www.southcoastphotographic.com.au/small-business-photography","title_tag":"Small Business Photography South Coast | South Coast Photographic","meta_description":"Small Business Photography South Coast for websites, social media and marketing. Affordable, professional imagery that showcases your brand and team across the NSW South Coast."},{"page_url":"https://www.southcoastphotographic.com.au/commercial-corporate-photography","title_tag":"Corporate Photography South Coast | South Coast Photographic","meta_description":"Corporate Photography South Coast for websites, marketing and reports. Professional commercial images, staff portraits and business branding photography across the NSW South Coast."},{"page_url":"https://www.southcoastphotographic.com.au/property-photography","title_tag":"Property Photography South Coast | South Coast Photographic","meta_description":"Property Photography South Coast for real estate, Airbnb and commercial spaces. Creative, affordable images that highlight your property and boost your online marketing."},{"page_url":"https://www.southcoastphotographic.com.au/headshot-staff-photography","title_tag":"Headshot Photography South Coast | South Coast Photographic","meta_description":"Headshot Photography South Coast for business staff portraits, corporate profiles and marketing. Professional, natural headshots that help your brand stand out across the South Coast."},{"page_url":"https://www.southcoastphotographic.com.au/aerial-photography","title_tag":"Aerial Photography South Coast | South Coast Photographic","meta_description":"Aerial Photography South Coast for tourism, property and marketing. Professional drone imagery showcasing your location, real estate or business across the NSW South Coast."}],"keywords":["South Coast Photography","Commercial Photographer South Coast","Small Business Photography South Coast","Aerial Photography South Coast","Marketing Photography South Coast","Headshot Photography South Coast","Property Photography South Coast","Event Photographer South Coast","Corporate Photography South Coast","Professional Photographer Illawarra"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.southcoastphotographic.com.au/#localbusiness",
  "name": "South Coast Photographic",
  "url": "https://www.southcoastphotographic.com.au/",
  "image": [
    "https://static.wixstatic.com/media/39ee3d_91531069baf04b779ae871ee9f76eff4%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/39ee3d_91531069baf04b779ae871ee9f76eff4%7Emv2.jpg",
    "https://static.wixstatic.com/media/39ee3d_41d39d6166994bbf8613b51fc8bca359%7Emv2.jpg/v1/fit/w_2500,h_1330,al_c/39ee3d_41d39d6166994bbf8613b51fc8bca359%7Emv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/39ee3d_91531069baf04b779ae871ee9f76eff4%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/39ee3d_91531069baf04b779ae871ee9f76eff4%7Emv2.jpg",
  "description": "South Coast Photographic is a professional commercial, corporate, business and portrait photography service based on the NSW South Coast, specialising in small business, marketing, property, headshot, staff and aerial photography across the Illawarra, Shoalhaven and South Coast regions.",
  "telephone": "+61-431-776-036",
  "email": "southcoastphotographer@mail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11 Diadem Ave",
    "addressLocality": "Vincentia",
    "addressRegion": "NSW",
    "postalCode": "2540",
    "addressCountry": "AU"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Illawarra, NSW"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Shoalhaven, NSW"
    },
    {
      "@type": "AdministrativeArea",
      "name": "South Coast, NSW"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "addressCountry": "AU"
  },
  "sameAs": [
    "https://www.google.com/search?q=South+Coast+Photographic+Vincentia"
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "priceRange": "$$",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Small Business Photography",
        "description": "Professional, high quality photography for small businesses for use on websites, social media and printed materials across the NSW South Coast.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Commercial & Corporate Photography",
        "description": "Corporate and commercial photography services including workplace, product and staff portraits for websites, social media and print marketing.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Shoalhaven, NSW"
          },
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Property & Real Estate Photography",
        "description": "Affordable property and real estate photography with creative flair for businesses and organisations along the NSW South Coast.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Headshot & Staff Photography",
        "description": "Business headshots and staff portraits for online and print marketing, staff profiles and reports for organisations of all sizes.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Shoalhaven, NSW"
          },
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Aerial & Drone Photography",
        "description": "High quality creative aerial and drone photography for lifestyle, tourism, property and real estate online and print marketing on the NSW South Coast.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Marketing Photography",
        "description": "Marketing photography to tell the story of your brand and create excellent images for online and print campaigns.",
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "NSW South Coast"
          }
        ]
      }
    }
  ],
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Laughter House Entertainment"
      },
      "reviewBody": "A massive thank you to SCP for their incredible ability to catch a myriad of different moments and emotions for our business. They have given us a treasure trove of amazing photos, every single one of them is gold and leaps off the page with joy and emotion.",
      "name": "Business photography for Laughter House Entertainment"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "South Coast Opthamology"
      },
      "reviewBody": "From the entire team at South Coast Opthamology we would like to thank South Coast Photographic. On the day it very easy to work with them, and they understood exactly what we wanted. They were extremely professional. We have had so many positive comments on our photos.",
      "name": "Commercial photography for South Coast Opthamology"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Duratec Australia"
      },
      "reviewBody": "A five star experience for sure! SCP was super accommodating of our not-quite finished commercial workspace and made it look complete with their professionalism and skill.",
      "name": "Corporate photography for Duratec Australia"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
