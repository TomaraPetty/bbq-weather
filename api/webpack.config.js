import { NxAppWebpackPlugin } from '@nx/webpack/app-plugin';
import { join } from 'path';

export const output = {
  path: join(__dirname, 'dist'),
};
export const plugins = [
  new NxAppWebpackPlugin({
    target: 'node',
    compiler: 'tsc',
    main: './src/main.ts',
    tsConfig: './tsconfig.app.json',
    assets: ['./src/assets'],
    optimization: false,
    outputHashing: 'none',
    generatePackageJson: true,
  }),
];
