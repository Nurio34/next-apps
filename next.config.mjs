// // next.config.mjs
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: "https",
//                 hostname: "openweathermap.org",
//             },
//         ],
//     },
// };

// export default nextConfig;
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["openweathermap.org"],
    },
};

export default nextConfig;
