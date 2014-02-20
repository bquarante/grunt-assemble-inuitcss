$(document).ready(function($)
{
	'use strict';
	var iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;
	if(iOS === false){
		$('#background').parallax('50%', 0.4);
		$('#wrapper').parallax('50%', 0.1);
	}
});