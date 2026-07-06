import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/Home/AboutUs",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/Home/Verticals",
        destination: "/solutions/b2b",
        permanent: true,
      },
      {
        source: "/Home/VerticalB2C",
        destination: "/solutions/b2c",
        permanent: true,
      },
      {
        source: "/Home/VerticalB2G",
        destination: "/solutions/b2g",
        permanent: true,
      },
      {
        source: "/Home/Software",
        destination: "/solutions/software",
        permanent: true,
      },
      {
        source: "/Home/Contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/Home/Blogs",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/Home/News",
        destination: "/news",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

