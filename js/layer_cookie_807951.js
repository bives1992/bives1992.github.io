$(document).ready(function() {

	var cookieContainer = $('.cookie-policy');

	// hide first then slide down after delay
	cookieContainer.hide().delay(500).removeClass('hidden').slideDown("slow");

	var createCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = name + "=" + value + expires + "; path=/";
	};

	var getCookie = function(c_name) {
		if (document.cookie.length > 0) {
			var c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				var c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	};

	var showCookiePolicy = function(selector) {
		selector.removeClass('hidden');
	};

	var hideCookiePolicy = function(selector) {
		selector.addClass('hidden');
	};

	var acceptedCookiePolicy = function() {
		createCookie("liebherr-cookie-policy", "accepted", 365);
		hideCookiePolicy(cookieContainer);
	};

	// initial cookie check
	if (getCookie("liebherr-cookie-policy")) {
		hideCookiePolicy(cookieContainer);
	} else {
		showCookiePolicy(cookieContainer);
	}

	$('.cookie-policy .js-accept').click(function() {
		acceptedCookiePolicy();
	});
});
