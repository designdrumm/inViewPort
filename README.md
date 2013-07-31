inViewPort
==========

jQuery plugin that adds a CSS class to selected elements when they are in the viewport.

Usage: `$(selector).inviewport(options)`,

where options is an object which may contain two properties: 'threshold' and 'className':

`$('#target').inviewport({threshold: 75, className: 'in-view'})`

'threshold' sets the minimum percentage of the element which has to be in view before the class gets added. 

Threshold defaults to 100. 

'className' sets the name of the class. Defaults to 'in-view'.

Licence
-------
Released under the [MIT license](http://opensource.org/licenses/MIT).
