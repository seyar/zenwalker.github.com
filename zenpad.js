var cwd = (function() {
  var result = process.cwd();
  if (~result.indexOf('\\')) {
    result = result.replace(/\\/g, '/');
  }
  return result;
}());

var config = {
  default: {
    siteUrl: 'http://zenwalker.me/',
    siteName: 'zenwalker.me',
    locale: 'ru',
    email: 'zenwalker2@gmail.com'
  },
  development: {
    siteUrl: 'file://' + cwd + '/build/'
  }
};

module.exports = config;
