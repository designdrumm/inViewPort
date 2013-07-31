/*jslint browser: true, indent: 2 */
(function ($) {
  'use strict';
  $.fn.inviewport = function (options) {
    var settings = $.extend({
      'minPercentageInView' : 100,
      'standardClassName': 'in-view'
    }, options);
    this.each(function () {
      var $this = $(this),
        $win = $(window),
        isVisible = function () {
          var min = (settings.threshold || settings.minPercentageInView) / 100,
            xMin = $this.width() * min,
            yMin = $this.height() * min,
            winPosX = $win.scrollLeft() + $win.width(),
            winPosY = $win.scrollTop() + $win.height(),
            elPosX = $this.offset().left + xMin,
            elPosY = $this.offset().top + yMin;
          if (winPosX > elPosX && winPosY > elPosY) {
            $this.addClass(settings.className || settings.standardClassName);
            $this.off('vis');
          }
        },
        trg = function () {
          $this.trigger('vis');
        };
      $win.on('resize', trg)
        .on('scroll', trg)
        .on('ready', trg)
        .on('vis', isVisible);
    });
  };
}(jQuery));
