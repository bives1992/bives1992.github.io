/**
 * Initiliazes the sliders present on the page.
 */
!function(e,i){"function"==typeof define&&define.amd?define("initSlider",["jquery","iosSlider"],i):e.amdWeb=i(e.jQuery),e.StageHomeAccordionAnimation=function(){if(1===this.accordionItems.length){var e=jQuery(this.accordionItems[0]);e.data("init-height")||e.data("init-height",e.height()),e.hasClass("open")?e.animate({height:parseInt(e.data("expand-height"),10)}):e.animate({height:e.data("init-height")})}}}(this,function(e){"use strict";e(function(){var i={};i.scrollbar=!0,i.snapToChildren=!0,i.snapSlideCenter=!0,i.desktopClickDrag=!0,i.infiniteSlider=!0,e(".iosSlider").each(function(){var t=e(this),n=e(this).find(".item").length;if(n>1){var a=function(i){e(i.sliderContainerObject).find(".item").each(function(t){var n=e(this).find("video");if(t===i.currentSlideNumber-1){if(e(this).addClass("activ"),n.length>0){var a=e(n).get(0);void 0===e(n).attr("loop")&&a.ended||setTimeout(function(){a.play()},300)}}else e(this).removeClass("activ"),n.length>0&&e(n).get(0).pause()})};if(i.navPrevSelector=e(this).parent().find(".prevButton").show(),i.navNextSelector=e(this).parent().find(".nextButton").show(),1==e(this).metadata().random){var o=e(this).find(".item").length,d=Math.floor(Math.random()*(o-1+1))+1;i.startAtSlide=d}if(i.onSliderLoaded=function(i){var t=i.sliderContainerObject.find(".item .video");if(t.length>0){e(document.documentElement).hasClass("ios")||e(document.documentElement).hasClass("android")?e.each(t,function(i,t){var n=e(t).find(".video-fallback");0!==n.length&&n.parent().prepend(e.tmpl(n,{}))}):require(["videojs"],function(){e.each(t,function(i,t){var n=e(t).find(".video-template");0!==n.length&&n.parent().prepend(e.tmpl(n,{}))}),a(i)})}i.sliderContainerObject.parent().css("visibility","visible").animate({opacity:1},600),a.apply(this,arguments)},i.onSlideChange=a,i=e.extend(i,e(this).data()),2==n&&1==i.infiniteSlider){for(var s,r=0,l=t.find(".item");r<n;)s=e(l[r]).clone(),e(l[0]).before(s),r++;e(this).iosSlider(i)}else e(this).iosSlider(i)}else{e(this).parent().css("visibility","visible").animate({opacity:1},600),e(this).find(".item").addClass("activ");var h=e(this).parent().find(".item .video");if(h.length>0){e(document.documentElement).hasClass("ios")||e(document.documentElement).hasClass("android")?e.each(h,function(i,t){var n=e(t).find(".video-fallback");0!==n.length&&n.parent().prepend(e.tmpl(n,{}))}):require(["videojs"],function(){e.each(h,function(i,t){var n=e(t).find(".video-template");0!==n.length&&n.parent().prepend(e.tmpl(n,{}))});var i=e(h).find("video");if(i.length>0){var t=e(i).get(0);console.log(),void 0===e(i).attr("loop")&&t.ended||setTimeout(function(){t.play()},300)}})}}}),e(document.documentElement).hasClass("android")&&"onorientationchange"in window&&e(window).on("orientationchange",function(){setTimeout(function(){e(".iosSlider").each(function(){var i=e(this).parent().width();e(this).find(".item").css("width",i)}),e(".iosSlider").iosSlider("update")},400)})})});