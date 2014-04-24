/**
 * Replace .md to .html in file names and
 * content in markdown render to html.
 */

var marked = require('marked');
var renderer = new marked.Renderer();

module.exports = function(zenpad) {
  
  renderer.heading = function(text, level) {
    if (level >= 2) {
      return '<h' + level + ' id="' + transliterate(text) + '">' + text + '</h' + level + '>';
    } else {
      return '<h' + level + '>' + text + '</h' + level + '>';
    }
  };

  renderer.code = function(code, lang) {
    if (lang) {
      return '<pre><code class="' + lang + '">' + escape(code) + '</code></pre>';
    } else {
      return '<pre><code>' + escape(code) + '</code></pre>';
    }
  };

  zenpad.listenEvent('afterDocParse', function(doc) {
    if (/\.md$/.test(doc.url)) {
      doc.url = doc.url.replace(/\.md$/, '.html');
      doc.content = marked(doc.content, { renderer: renderer });
    }
  });

};

function transliterate(str) {
  var table = {
    "а": "a",
    "б": "b",
    "в": "v",
    "г": "g",
    "д": "d",
    "е": "e",
    "ё": "e",
    "ж": "zh",
    "з": "z",
    "и": "i",
    "й": "y",
    "к": "k",
    "л": "l",
    "м": "m",
    "н": "n",
    "о": "o",
    "п": "p",
    "р": "r",
    "с": "s",
    "т": "t",
    "у": "u",
    "ф": "f",
    "х": "h",
    "ц": "ts",
    "ч": "ch",
    "ш": "sh",
    "щ": "sch",
    "ъ": "",
    "ы": "i",
    "ь": "",
    "э": "e",
    "ю": "yu",
    "я": "ya"
  };

  var escapedStr = str.toLowerCase().replace(/[^a-zа-яё0-9-]+/g, '-');
  var output = '';

  for (var i in escapedStr) {
    var letter = escapedStr[i];
    output += table[letter]
      ? table[letter]
      : letter;
  }

  return output;
}

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
