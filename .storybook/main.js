const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')
const postcss = require('postcss')
const tailwindcss = require('../tailwind.config')

module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
          postcssOptions: {
            plugins: {
              tailwindcss, // or you can nest your options entirely here
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      image: {
        loading: 'eager',
      },
      nextConfigPath: path.resolve(__dirname, '../next.config.js'),
    },
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    // styles
    config.module.rules.push({
      test: /\.(sass|scss)$/,
      use: ['resolve-url-loader'],
      include: path.resolve(__dirname, '../'),
    })
    // fonts
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    })

    return config
  },
}
