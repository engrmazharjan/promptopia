/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during build on Vercel
  },
}

export default nextConfig