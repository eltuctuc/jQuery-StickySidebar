/**
 * @preserve jquery.sticky-sidebar 0.0.1
 * https://github.com/eltuctuc/jQuery-StickySidebar
 * Copyright (C) 2014 Enrico Reinsdorf <enrico.reinsdorf@re-design.de>
 * Licensed under the MIT license
 * (See http://www.opensource.org/licenses/mit-license)
 */

/**
 * Sticky Sidebar - jQuery Plugin
 * @param window window
 * @param jQuery $
 * @returns jQuery
 */
;(function(window, $) {
	
	$.fn.stickySidebar = function ( options ) {
		
		var settings = $.extend({
			'top': 0,
			'bottom': 0
		}, options);
	
		var $sticky = $(this);

		$sticky.addClass('sticky');

		if($sticky.offset()) { // make sure this element exists

			var stickyTop = $sticky.offset().top;

			$(window).scroll(function () { // scroll event

				var windowTop = $(window).scrollTop();

				if(stickyTop < (windowTop+settings.top)) {

					$sticky.addClass('sticky-top').css('top', settings.top);

				} else {

					$sticky.removeClass('sticky-top').css('top', '');

				}

			});

		}
		
		return this;
	};
	
}(window, jQuery));