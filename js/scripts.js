// $(document).ready(function() {
    
//     $('.feedback').click(function() {
//         $('.popup-window').show();
//     });
//     $('.close-popup').click(function() {
//         $('.popup-window').hide();
//     });
	
// 	/* scroll */
	
// 	$("a[href^='#']").click(function(){
// 		var _href = $(this).attr("href");
// 		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
// 		return false;
// 	});

// 	/* timer */

// 	function update() {
// 		var Now = new Date(), Finish = new Date();
// 		Finish.setHours( 23);
// 		Finish.setMinutes( 59);
// 		Finish.setSeconds( 59);
// 		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
// 			Finish.setDate( Finish.getDate() + 1);
// 		}
// 		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
// 		var hrs = Math.floor( sec / 3600);
// 		sec -= hrs * 3600;
// 		var min = Math.floor( sec / 60);
// 		sec -= min * 60;
// 		$(".timer .hours").html( pad(hrs));
// 		$(".timer .minutes").html( pad(min));
// 		$(".timer .seconds").html( pad(sec));
// 		setTimeout( update, 200);
// 	}
// 	function pad(s) {
// 		s = ("00"+s).substr(-2);
// 		return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
// 	}
// 	update();

// });

// $(window).on("load", function(){
	
// 	/* sliders */

// 	$(".owl-carousel").owlCarousel({
// 		items: 1,
// 		loop: true,
// 		autoHeight: true,
// 		smartSpeed: 300,
// 		mouseDrag: false,
// 		pullDrag: false,
// 		dots: false,
// 		nav: true,
// 		navText: ""
// 	});
	
// });

// (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//         m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
// ym(71396785, "init", {
//     clickmap:true,
//     trackLinks:true,
//     accurateTrackBounce:true,
//     webvisor:true
// });
$(document).ready(function() {
    var $popupWindow = $('.popup-window');
    var $feedback = $('.feedback');
    var $closePopup = $('.close-popup');
    var $scrollLinks = $("a[href^='#']");
    var $timerHours = $(".timer .hours");
    var $timerMinutes = $(".timer .minutes");
    var $timerSeconds = $(".timer .seconds");

    // Show and hide popup
    $feedback.on('click', function() {
        $popupWindow.show();
    });
    $closePopup.on('click', function() {
        $popupWindow.hide();
    });

    // Smooth scroll
    $scrollLinks.on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(target).offset().top }, 400); // Adjust animation speed if needed
    });

    // Timer update
    function updateTimer() {
        var now = new Date();
        var finish = new Date();
        finish.setHours(23, 59, 59);
        if (now.getHours() === 23 && now.getMinutes() === 59 && now.getSeconds() === 59) {
            finish.setDate(finish.getDate() + 1);
        }
        var seconds = Math.floor((finish - now) / 1000);
        var hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        var minutes = Math.floor(seconds / 60);
        seconds %= 60;

        $timerHours.html(pad(hours));
        $timerMinutes.html(pad(minutes));
        $timerSeconds.html(pad(seconds));

        setTimeout(updateTimer, 1000); // Update every second
    }

    function pad(number) {
        return ("0" + number).slice(-2);
    }

    updateTimer();
});

$(window).on("load", function(){
    // Initialize sliders
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoHeight: true,
        smartSpeed: 300,
        mouseDrag: false,
        pullDrag: false,
        dots: false,
        nav: true,
        navText: ""
    });
});

// Initialize Yandex.Metrika
(function(m,e,t,r,i,k,a){
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(71396785, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
});
