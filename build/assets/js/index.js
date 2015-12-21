var timeMachine = timeMachine || {};
timeMachine = {
    animateEndListener: function () {
        var $ele1 = $(".step7 dl"),
        $ele2 = $(".cloud");
        $ele1.each(function () {
            var $this = $(this),
                nValue = $this.find(".process").attr("data-width");
            this.addEventListener("webkitAnimationEnd", function () {
                $this.find(".done").animate({
                    width: nValue
                }, function () {
                    $this.find("p").animate({
                        opacity: 1
                    })
                });
            });
        });
        $ele2.each(function () {
            var $this = $(this);
            this.addEventListener("webkitAnimationEnd", function () {
                if ($this.index() == 1) {
                    $this.addClass("cloud-auto1");
                } else {
                    $this.addClass("cloud-auto2");
                }
            });
        });
    },
    eventStart: function () {
        (function () {
            var $ele1 = $(".step1 .cloud"),
                $ele2 = $(".step1 .cloud3"),
                $ele3 = $(".step1"),
                $ele4 = $(".step2"),
                $ele5 = $(".point");
            $ele1.css({
                "overflow": "visible",
                zIndex: 5
            });
            $ele2.css({height: screen.height});
            $ele1.animate({
                bottom: screen.height
            }, function () {
                $("body").css({
                    "background": "#ffeed3"
                })
                $ele5.css({
                    "display": "block",
                    opacity: 0,
                    top: document.documentElement.clientHeight+20
                }).animate({
                    opacity: 1,
                    top: document.documentElement.clientHeight-40
                }, 300);
                $ele3.animate({
                    opacity: 0
                },100 , function () {
                    $ele3.hide();
                    $ele4.addClass("animation-bind").addClass("active");
                });
            });
        })();
        $(".wrap").css({
            height: window.screen.availHeigh
        });
        $('body').on('touchmove', function (event) {
            event.preventDefault();
        });
    }
}
$(function () {
    timeMachine.animateEndListener();
    timeMachine.eventStart();
});


