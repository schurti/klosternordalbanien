import type { NextConfig } from "next";

const rawBasePath = process.env.BASE_PATH ?? "";
const basePath =
  rawBasePath === "/"
    ? ""
    : rawBasePath
        ? rawBasePath.startsWith("/")
          ? rawBasePath.replace(/\/+$/, "")
          : `/${rawBasePath.replace(/\/+$/, "")}`
        : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
