/**
 * Jekyll-like documents location.
 * Translate posts/2010-11-25-index.md to posts/2010/11/index.md.
 */

var path = require('path');

module.exports = function(zenpad) {

  zenpad.listenEvent('afterDocParse', function(doc) {
    var filename = path.basename(doc.url);
    var dirname = path.dirname(doc.url);

    var re = /^([0-9]{4})-([0-9]{2})-([0-9]{2})-(.+)/;
    
    if (re.test(filename)) {
      var matches = re.exec(filename)
        , year = matches[1]
        , month = matches[2]
        , day = matches[3]
        , title = matches[4];

      doc.url = dirname + '/' + year + '/' + month + '/' + title;
    }
  });

};
