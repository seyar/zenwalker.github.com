/* =content */

jQuery(function($) {

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
