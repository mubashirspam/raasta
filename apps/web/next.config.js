module.exports = {
  allowedDevOrigins: [
    "http://192.168.18.237:3000",
    "http://192.168.18.237:3001",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://192.168.31.147:3000",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    qualities: [75, 90, 100],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  compress: true,
};
