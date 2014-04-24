var cwd = (function() {
  var result = process.cwd();
  if (~result.indexOf('\\')) {
    result = result.replace(/\\/g, '/');
  }
  return result;
}());

var config = {
  default: {
    siteUrl: 'http://zenwalker.ru/',
    siteName: 'zenwalker.ru',
    locale: 'ru'
  },
  development: {
    siteUrl: 'file://' + cwd + '/build/'
  }
};

module.exports = config;
