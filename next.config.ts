import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Isso permite que o build seja concluído mesmo com erros de tipo
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
