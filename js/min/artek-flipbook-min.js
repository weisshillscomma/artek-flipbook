function glow(e){$(e).animate({borderColor:"rgba(213,28,56,0)"},1e3,function(){$(e).animate({borderColor:"rgba(213,28,56,1)"},1e3,function(){setTimeout(function(){$(e).animate({borderColor:"rgba(213,28,56,0)"},1e3)},1e3)})})}function slide_forward(e,i,a){var t=-1*$("ul.imageGallery li.active").width();if($(e).is(i)){var l=$("ul.imageGallery li.active");setTimeout(function(){$(l).removeClass("active"),$("#container").removeClass("wait")},350),$(i).addClass("active").removeClass("target"),$(i).find(".hotspot").each(function(){glow(this)})}else setTimeout(function(){$(e).animate({left:"+="+t},300,function(){});var l=a-100,s=$(e).next("li");slide_forward(s,i,l)},50)}function slide_backward(e,i,a){var t=-1*$("ul.imageGallery li.active").width();if($(e).is(i)){var l=$("ul.imageGallery li.active");setTimeout(function(){$(e).animate({left:"-="+t},300,function(){})},50),setTimeout(function(){$(l).removeClass("active"),$("#container").removeClass("wait")},350),$(i).addClass("active").removeClass("target"),$(i).find(".hotspot").each(function(){glow(this)})}else setTimeout(function(){$(e).animate({left:"-="+t},300,function(){});var l=a+100,s=$(e).prev("li");slide_backward(s,i,l)},50)}function gohome(){$(".intro_screen").hasClass("visible")||($(".gallery_controls .prev").trigger("click"),setTimeout(function(){gohome()},15))}function timerIncrement(){idleTime+=1,idleTime>1&&($(".intro_screen").hasClass("visible")||gohome())}$(window).load(function(){var e=-1;$("ul.imageGallery li.single_image").each(function(){e=e>$(this).height()?e:$(this).height()}),$("ul.imageGallery").each(function(){$(this).height(e)}),$("ul.imageGallery li.single_image").each(function(){$(this).height(e)})}),idleTime=0,$(function(){var e=setInterval(timerIncrement,3e4);$(this).mousemove(function(e){idleTime=0}),$(this).keypress(function(e){idleTime=0}),$.fn.isAfter=function(e){return 0!==this.prevAll().filter(e).length},$.fn.isBefore=function(e){return 0!==this.nextAll().filter(e).length},$(".gallery_controls .prev").click(function(){if($("#container").hasClass("wait"));else{$(".overlay:visible").fadeOut(300);var e=-1*$("ul.imageGallery li.active").width(),i=$("ul.imageGallery li.active"),a=$(i).prev("li");if($(i).prev("li").length)$(i).removeClass("active"),$(a).addClass("active").addClass("moving"),$(a).animate({left:"-="+e},300,function(){var e=".theDots #"+$("ul.imageGallery li.active").attr("id");$(".theDots li.active").removeClass("active"),$(e).addClass("active"),$(a).removeClass("moving"),$(".active .hotspot").each(function(){glow(this)}),$(a).is(":last-of-type")?$(".next").fadeOut(300):$(".next").is(":visible")||$(".next").fadeIn(300),$(e).hasClass("bookmark")&&$(a).find(".instructions").fadeIn(300)});else{var t=-1*$("ul.imageGallery li.active").width()*.5;$(".intro_screen").addClass("visible").animate({left:"-="+t},300),$(".imageGallery").animate({left:"50%"},300),$("ul.imageGallery li.single_image:first-of-type").removeClass("active"),$(".theDots li:first-of-type").removeClass("active"),$(".prev").fadeOut(300)}}}),$(".gallery_controls .next").click(function(){if($(".intro_screen").hasClass("visible")){$("ul.imageGallery li.single_image:first-of-type").addClass("active"),$(".theDots li:first-of-type").addClass("active");var e=-1*$("ul.imageGallery li.active").width()*.5;$(".intro_screen").removeClass("visible").animate({left:"+="+e},300),$(".imageGallery").animate({left:0},300),$(".prev").fadeIn(300)}else if($("#container").hasClass("wait"));else{$(".overlay:visible").fadeOut(300);var i=-1*$("ul.imageGallery li.active").width(),a=$("ul.imageGallery li.active"),t=$(a).next("li");$(a).next("li").length&&($(a).removeClass("active").addClass("moving"),$(t).addClass("active"),$(a).animate({left:"+="+i},300,function(){$(a).removeClass("moving");var e=".theDots #"+$("ul.imageGallery li.active").attr("id");$(".theDots li.active").removeClass("active"),$(e).addClass("active"),$(".active .hotspot").each(function(){glow(this)}),$(t).is(":last-of-type")?$(".next").fadeOut(300):$(".next").is(":visible")||$(".next").fadeIn(300),$(e).hasClass("bookmark")&&$(t).find(".instructions").fadeIn(300)}))}}),$(".theDots li").click(function(){if($(".intro_screen").hasClass("visible")){$("ul.imageGallery li.single_image:first-of-type").addClass("active"),$(".theDots li:first-of-type").addClass("active");var e=-1*$("ul.imageGallery li.active").width()*.5;$(".intro_screen").removeClass("visible").animate({left:"+="+e},300),$(".imageGallery").animate({left:0},300),$(".prev").fadeIn(300)}if($("#container").hasClass("wait"));else{$("#container").addClass("wait"),$(".overlay:visible").fadeOut(300);var i="#"+$(this).attr("id");$(".theDots li.active").removeClass("active"),$(this).addClass("active"),$("ul.imageGallery").find(i).addClass("target");var a=$("ul.imageGallery li.active"),t=$("li.target");if($(t).is(":last-of-type")?$(".next").fadeOut(300):$(".next").is(":visible")||$(".next").fadeIn(300),$(t).is(":first-of-type")&&($(t).removeClass("target"),$("#container").removeClass("wait")),$(i).hasClass("bookmark")&&$(t).find(".instructions").fadeIn(300),$(a).isBefore($(t))===!0)slide_forward(a,t,1e5);else if($(a).isAfter($(t))===!0){var a=a.prev("li");slide_backward(a,t,1e5)}}}),$(".active .hotspot").each(function(){glow(this)}),$(".hotspot").click(function(){$(".overlay:visible").fadeOut(300);var e=$(this),i=$(this).next(".overlay"),a=$(e).css("left").replace("px",""),t=$(".gallery").width(),l=a/t*100;50>l&&($(i).css("left","50%"),$(i).find(".overlay_container").css("left","initial").css("right","7.5%"));var s=$(e).css("top").replace("px",""),n=$(".gallery").height(),r=s/n*100;r>66?$(i).find(".overlay_container").css("bottom","10%").css("top","auto"):$(i).find(".overlay_container").css("top",r+"%"),$(i).fadeIn(300)}),$(".close").click(function(){$(this).parent().parent().fadeOut(300)})});