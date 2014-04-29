module.exports = function(zenpad, params) {
  var output = '';

  var filter = function(doc) {
    return !!doc.title;
  };

  var docs = zenpad.getDocs('/', { depth: 1, filter: filter });

  if (params.hash.tpl) {
    docs.forEach(function(doc) {
      output += zenpad.getChunk(params.hash.tpl, doc)
    });
  } else {
    docs.forEach(function(doc) {
      output += params.fn(doc);
    });
  }

  return output;
};
