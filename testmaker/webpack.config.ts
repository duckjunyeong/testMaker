import path from 'path';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import webpack, { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

const config: Configuration = {
  name: 'sleact',
  mode: isDevelopment ? 'development' : 'production', // mode를 설정하면 설정값에 따라 default로 설정해주는 것들이 달라짐 
  devtool: !isDevelopment ? 'hidden-source-map' : 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // import할 때 확장자를 생략할 수 있다.
    alias: { // import/ require을 더 편리하게 하기위해 경로들을 설정해줄 수 있다. 
      '@hooks': path.resolve(__dirname, 'hooks'),
      '@components': path.resolve(__dirname, 'components'),
      '@layouts': path.resolve(__dirname, 'layouts'),
      '@pages': path.resolve(__dirname, 'pages'),
      '@utils': path.resolve(__dirname, 'utils'),
      '@typings': path.resolve(__dirname, 'typings'),
    },
  },
  entry: {
    app: './client', // 이 파일을 bundler인 webpack이 가공해서 하나의 파일로 만들겠다. 그 대상이 ./client 파일이다. 
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // 확장자가 tsx인 파일을 읽는다.
        loader: 'babel-loader',// 어떻게? babel-loader로 
        options: { // babel에 관한 설정
          presets: [
            [
              '@babel/preset-env', // 자바스크립트 최신문법을 사용하게 해주는 
              {
                targets: { browsers: ['IE 10'] }, // 지원을 IE10까지만 하겠다. 
                debug: isDevelopment,
              },
            ],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          env: {
            development: {
              plugins: [['@emotion', { sourceMap:true}],require.resolve('react-refresh/babel')],

            },
            production: {
              plugins: ['@emotion'],
            }
          },
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css?$/, // 확장자가 css인 파일을 읽는다.
        use: ['style-loader', 'css-loader'], // 어떻게? style-loader와 css-loader로 
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ // typescript 해석을 빨리하게 해주는 웹팩이다.
      async: false, // true라면 웹팩이 번들링을 다하고 난 뒤 문제를 보고한다. 그래서 번들링하는 과정을 방해하지 않는다. 
      // eslint: {
      //   files: "./src/**/*",
      // },
    }),
    new webpack.EnvironmentPlugin({ NODE_ENV: isDevelopment ? 'development' : 'production' }), // 
  ],
  output: { // 가공된 파일을 어디다 저장할까?
    path: path.join(__dirname, 'dist'),
    filename: '[name].js', // entry파일들이 여러개일 때 각각의 output filename들을 설정한다. [name]은 해당 entry의 속성이름이다.
    publicPath: '/dist/',
  },
  devServer: {
    historyApiFallback: true, // react router
    port: 3090,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    // proxy: {
    //   '/api/': {
    //     target: 'http://localhost:3095',
    //     changeOrigin: true,
    //   }
    // }
  },
};

if (isDevelopment && config.plugins) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new ReactRefreshWebpackPlugin());
}
if (!isDevelopment && config.plugins) {
}

export default config;
