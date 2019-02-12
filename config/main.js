const root = require('./helpers/root');

module.exports = (function () {
  const base = root('./'),
    src = root('src'),
    dist = root('dist'),
    tmp = root('tmp'),
    html = root('src', 'index.html'),
    devPort = 8080,
    extensions = ['.js', '.ts', '.tsx', '.html', 'scss'];

  return {
    base: base,
    src: src,
    dist: dist,
    tmp: tmp,
    devPort: devPort,
    extensions: extensions,
    html: html
  }
})();