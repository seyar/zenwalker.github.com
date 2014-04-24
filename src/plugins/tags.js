module.exports = function (zenpad) {
  
  zenpad.listenEvent('afterBuild', function () {
    var tags = {};
    zenpad.getDocs('blog/', {}).forEach(function(doc) {
      if (doc.tags) {
        doc.tags.forEach(function(tag) {
          if (!tags[tag]) {
            tags[tag] = [];
          }
          tags[tag].push(doc);
        });
      }
    });
    for (var tag in tags) {
      zenpad.createDoc('blog/tags/' + tag + '.html', {
        title: 'Посты с тегом «' + tag + '»',
        layout: 'blog/tag',
        docs: tags[tag]
      }).build();
    }
  });

};
