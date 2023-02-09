import path from 'path';

import { StorybookConfig } from '@storybook/core-common';

const storybookConfig: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],
  typescript: { reactDocgen: 'react-docgen-typescript' },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Resolve absolute imports
    config.resolve?.modules?.push(path.resolve(process.cwd(), 'src'));

    return config;
  },
};

module.exports = storybookConfig;
