/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://plausible.io https://api.emailjs.com`.replace(
    /\s+/g,
    " "
  ),
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com",
  "connect-src 'self' https://api.github.com https://api.emailjs.com https://www.google-analytics.com https://plausible.io https://region1.google-analytics.com",
  "frame-src 'self' https://www.google.com",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
];

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "opengraph.githubassets.com", pathname: "/**" },
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspDirectives.join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
