import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  /* config options here */
  // reactCompiler disabled - it was causing module resolution issues with React 19
  // You can re-enable it later when Next.js has better React 19 support
});

export default nextConfig;
