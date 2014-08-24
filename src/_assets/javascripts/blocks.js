/* =content */

jQuery(function($) { 'use strict';

  var $this = $('.content');

  /**
   * Full height content.
   */

  var headerHeight = $('.header').length
    ? $('.header').outerHeight()
    : 0;

  var footerHeight = $('.footer').length
    ? $('.footer').outerHeight()
    : 0;

  $(window).on('resize', function() {
    var windowHeight = $(window).height();
    if ($this.outerHeight() < windowHeight) {
      $this.css({ minHeight: (windowHeight - footerHeight) - ((50*2) + headerHeight) });
    }
  })
  .trigger('resize');

});

/* =post */

jQuery(function($) { 'use strict';

  var key = 'Wk6L7edq8DE3xWCimaaVbjkO8oNgO1sAOwuIi1cRYV7DwxGLKhSNWT05SiarkWvr';
  var username = 'zenwalker';

  var $post = $('.post');
  var $page = $('.page');


  if ($post.length) {
    var $button = $('.post__footer-comments');
    var threadUrl = [ 'link:' + $button.data('thread') || location.href ];

    $.ajax({
      data: { api_key: key, forum: username, thread: threadUrl },
      url: 'https://disqus.com/api/3.0/threads/set.jsonp',
      dataType: 'jsonp',
      type: 'get'
    }).done(function(res) {
      var count = res.response.length
        ? res.response[0].posts
        : 0;

      $button.text($button.text() + ' (' + count + ')');
    });

    $('.post__footer-comments').one('click', function(e) {
      $('<script>', {
        src: '//' + username + '.disqus.com/embed.js',
        async: true
      }).appendTo($page);

      $('.post__comments').show();
    });

    if (location.hash == '#disqus_thread') {
      $('.post__footer-comments').trigger('click');
    }
  }
});
