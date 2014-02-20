$(document).ready(function($)
{
	'use strict';
	

	var NAV_URI_ARRAY = ['about','public-space','room-plan','prime-service','collaboration','location'],
	JA_URI_ARRAY = ['../../popup/map-jp.html','../../popup/outline-jp.html','http://tw-r.jp/request.html'],
	EN_URI_ARRAY = ['../../popup/map-en.html','../../popup/outline-en.html','http://tw-r.jp/eng/request.html'],
	$nav = $('nav'),
	$body = $('body'),
	url = window.location.pathname.split('/'),
	uri = url[url.length-1];
	var path = uri.split('.');
	$nav.css({'top':'-41px'});
	var w = window.innerWidth; // mobile : screen.width * ratio;
	var ratio = window.devicePixelRatio || 1;
		
	$('.nav-mobile').on({
		click:function(evt){
			//Mobile vars
			w = window.innerWidth; // mobile : screen.width * ratio;
			//
			if(w <= 480){
				if($nav.css('left') !== '0px'){
					$nav.css({'left' : (-w) +'px'});
					TweenLite.to($nav, 0.8, {
						'display' : 'block',
						'left' : '0px'
					});
				}
				else{
					TweenLite.to($nav, 0.8, {
						'left' : (-w) +'px',
						'display' : 'none'
					});
				}
			}
		}
	});
	

	function initNavigation(){
		TweenLite.to($nav, 0.8, {
			'top':'0',
			delay:0,
			ease:'Quad.easeOut'
		});
		TweenLite.to($body, 1.5, {
			'opacity':'1',
			delay:0,
			ease:'Quad.easeOut'
		});
		for(var i=0; i<NAV_URI_ARRAY.length; i++){
			if(NAV_URI_ARRAY[i] === path[0]){
				var section = i;
				$('nav ul > li:eq('+section+')').css({'cursor':'default','opacity':'0.4'});
			} else {
				$('nav ul > li:eq('+i+')').css({'cursor':'pointer','opacity':'1'});
			}
		}
		$('ul#nav > li').on({
			mouseenter:function(evt){
				if ($(this).index() !== path[0] && isIpad() === false){
					TweenLite.to($(this), 0.4, {
						'alpha':'0.4',
						delay:0,
						ease:'Quad.easeOut'
					});
				}
			},
			mouseleave:function(evt){
				if ($(this).index() !== path[0] && isIpad() === false){
					TweenLite.to($(this), 1, {
						'alpha':'1',
						delay:0.1,
						ease:'Quad.easeOut'
					});
				}
			},
			click:function(evt){
				TweenLite.to($body, 1, {
					'alpha':'0',
					delay:0,
					ease:'Quad.easeOut',
					onCompleteParams:[$(this).index()],
					onComplete:setUri
				});
			}
		},'');
		$('ul#subnav > li').css({'cursor':'pointer'}).on({
			mouseenter:function(evt){ TweenLite.to($(this), 0.2, {'alpha':'0.7', ease:'Quad.easeOut'}); },
			mouseleave:function(evt){ TweenLite.to($(this), 0.2, {'alpha':'1',  ease:'Quad.easeOut'}); },
			click:function(evt){
				if(getLang() === 'ja'){
					window.open(JA_URI_ARRAY[$(this).index()],'','width=700,height=900,scrollbars=yes');
				} else {
					window.open(EN_URI_ARRAY[$(this).index()],'','width=700,height=900,scrollbars=yes');
				}
				evt.preventDefault();
				evt.stopPropagation();
			}
		},'');
	}
			
	function setUri($id){
		//console.log(url)
		window.location = NAV_URI_ARRAY[$id]+'.html';
	}
	
	function getLang() {
		var lct;
		if(navigator.language){
			lct=navigator.language.toLowerCase().substring(0,2);
		}else if(navigator.userLanguage){
			lct=navigator.userLanguage.toLowerCase().substring(0,2);
		}else if(navigator.userAgent.indexOf('[')!==-1){
			var uas=navigator.userAgent.indexOf('[');
			var uae=navigator.userAgent.indexOf(']');
			lct=navigator.userAgent.substring(uas+1,uae).toLowerCase();
		}
		return lct;
	}
	
	function isIpad() {
		if (navigator.userAgent.match(/(iPad)/)) {
			return true;
		}
		else{
			return false;
		}
	}
	
	initNavigation();
	
});