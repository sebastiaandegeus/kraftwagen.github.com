!function ($) {
  $(function () {
    var $window = $(window);

    $('.kw-sidebar-inner').affix({
      offset: {
        top: 120
      }
    });

    window.prettyPrint && prettyPrint();

  });

}(window.jQuery);