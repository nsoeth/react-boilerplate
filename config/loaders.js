const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const MiniCssExtractLoader = {
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: false
  }
};

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    modules: {
      localIdentName: '[local]__[hash:base64:5]'
    }
  }
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true
  }
};

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      ident: 'postcss',
      sourceMap: true,
      plugins: () => [
        require('autoprefixer')({
          browsers: ['>1%', 'last 2 versions']
        })
      ]
    }
  }
};

module.exports = [
  {
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  {
    test: /\.html$/,
    loader: 'html-loader'
  },
  {
    test: /\.(scss|css)$/,
    exclude: /\.module\.scss$/,
    use: [
      MiniCssExtractLoader,
      CSSLoader,
      postCSSLoader,
      'sass-loader'
    ]
  },
  {
    test: /\.module\.scss$/,
    use: [
      MiniCssExtractLoader,
      {
        loader: 'dts-css-modules-loader',
        options: {
          namedExport: true
        }
      },
      CSSModuleLoader,
      postCSSLoader,
      'sass-loader',
    ]
  },
  {
    test: /\.(png|jpe?g|gif)$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: '/assets/[name].[hash].[ext]'
        }
      }
    ]
  },
  {
    test: /\.(svg|woff|woff2|ttf|eot|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  }
]