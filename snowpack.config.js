/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/dist',
    public: '/',
  },
  alias: {
    '@': './src/',
    'pages': './src/pages',
    'components': './src/components',
  },
  plugins: [
    '@snowpack/plugin-babel',
    // '@snowpack/plugin-webpack',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none'
  },
  buildOptions: {
    baseUrl: '.'
  },
};
