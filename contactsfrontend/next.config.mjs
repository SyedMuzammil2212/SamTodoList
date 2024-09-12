/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Add 'localhost' as an allowed domain
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5001", // Replace this with the port your backend is running on
        pathname: "/uploads/**", // Path to the images on your server
      },
    ],
  },
};

export default nextConfig;
