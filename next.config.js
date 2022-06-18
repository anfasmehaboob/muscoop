const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = {
  env:{
    GOOGLE_MAP_KEY:process.env.GOOGLE_MAP_KEY
  }
};

const sentryWebpackPluginOptions = {
  silent: true,
};

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withSentryConfig(
  moduleExports,
  sentryWebpackPluginOptions,
  nextConfig
);
