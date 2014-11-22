/*jslint browser: true, indent: 2 */
/*
Example Usage:
	To execute a function call once when in view
	if(jQuery("#element").length > 0) {		
		jQuery("#element").one( "myClassName", function( event ) {
			//execute a function call or some code here
		}).inviewport({ threshold: 100, className: 'myClassName' });
	}
	
	To execute a function call continuously when in view
	if(jQuery("#element").length > 0) {		
		jQuery("#element").trigger( "myClassName", function( event ) {
			//execute a function call or some code here
		}).inviewport({ threshold: 100, className: 'myClassName' });
	}
*/
(function ($) { 
	'use strict';
	$.fn.inviewport = function (options) {
		var settings = $.extend({ 
		'minPercentageInView' : 100, 
		'standardClassName': 'in-view', 
		}, options);
		this.each(function (i, e) {
			var $this = $(this), 
			$win = $(window), 
			changed = false, 
			isVisible = function () { 
				var c = settings.className || settings.standardClassName, 
				min = (settings.threshold || settings.minPercentageInView) / 100, 
				xMin = $this.width() * min, 
				yMin = $this.height() * min, 
				winTop = $win.scrollTop(), 
				winLeft = $win.scrollLeft(), 
				winPosX = winLeft + $win.width(), 
				winPosY = winTop + $win.height(), 
				elTop = $this.offset().top, 
				elLeft = $this.offset().left, 
				elPosX = elLeft + xMin, 
				elPosY = elTop + yMin; 
				if (elLeft > winLeft && winPosX > elPosX && elTop > winTop && winPosY > elPosY) {
					if(!$this.hasClass(c)) { 
						$this.addClass(c);
					}
					$this.trigger(c);
				} else {
					if($this.hasClass(c)) { 
						$this.removeClass(c);
					}
				}
			};
			$win.on('ready', isVisible())
				.on('resize scroll', function () { 
					changed = true; 
			});
			setInterval(function () {
				if (changed) {
					changed = false;
					isVisible();
				}
			}, 250);
		});
	};
}(jQuery));
