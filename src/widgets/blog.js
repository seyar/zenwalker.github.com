module.exports = function (zenpad, params) {
  var output = '';
 
  var docs = params.hash.docs
    ? params.hash.docs
    : zenpad.getDocs('blog/', {});
  
  docs = docs.sort(function(a, b) {
    return b.date - a.date;
  });

  if (params.hash.tpl) {
    docs.forEach(function(doc) {
      doc.intro = doc.content.split('<!-- cut -->')[0];
      output += zenpad.getChunk(params.hash.tpl, doc)
    });
  } else {
    docs.forEach(function(doc) {
      doc.intro = doc.content.split('<!-- cut -->')[0];
      output += params.fn(doc);
    });
  }

  return output;
};
