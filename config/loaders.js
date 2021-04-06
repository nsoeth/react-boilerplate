const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]'
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      require('autoprefixer')({
        browsers: ['>1%', 'last 2 versions']
      })
    ]
  }
}

const lessLoader = {
  loader: 'less-loader',
  options: {
    javascriptEnabled: true,
  },
}


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
      MiniCssExtractPlugin.loader,
      CSSLoader,
      postCSSLoader,
      'sass-loader'
    ]
  },
  {
    test: /\.module\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
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
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
      CSSLoader,
      lessLoader
    ]
  }
]