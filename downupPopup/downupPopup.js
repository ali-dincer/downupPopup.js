/*
 * Copyright 2021, Ali Dinçer
 * Dual licensed under the MIT or GPL Version 3 or any later version licenses.
 * https://dincerali.com
 */

(function ($) {
    $.fn.downupPopup = function (options) {
        const $this = $(this);

        // Option Handling
        if (typeof options === "object" || !options) { 
            var settings = $.extend({
                duration: "300",
                animation: "ease",
                background: true,
                radiusLeft: "10px",
                radiusRight: "10px",
                distance: 20,
                headerText: "",
                width: "100%",
                contentScroll: false
            }, options);
        }

        // General CLOSE function
        function close() {
            if ($this.attr("bg") == 1)
                $("#dark-back").hide();

            $this.addClass("no-act");
            $("body").css("overflow", "inherit");

            // unbind ESC
            $(document).off('keyup');
        }
        
        // Preparation
        if (!$this.hasClass("downupPopup")) {
            $this.addClass("downupPopup")
                .addClass("no-act")
                .prepend('<div class="downupPopup-header"><span></span><svg class="downupPopup-kapat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>');

            $this.find(".downupPopup-kapat").click(function () {
                close();
            });

            $(document).on("click", "#dark-back", function () {
                $(this).hide();
                close();
            });

            if (typeof options === "object" || !options) { 
                if (settings.background == true) {
                    if (!$("#dark-back")[0])
                        $("body").append("<div id='dark-back'></div>");

                    $this.attr("bg", 1);
                }
            }
        }
        
        // Initialization
        if (typeof options === "object" || !options) {
            setTimeout(() => {
                $this.css('transition', 'transform ' + settings.duration + 'ms ' + settings.animation + '');
                $this.css('border-radius', '' + settings.radiusLeft + ' ' + settings.radiusRight + ' 0px 0px');
                $this.css('width', '' + settings.width + '');
                
                // setting header height
                const $head = $this.find(".downupPopup-header");
                $head.find("span").text(settings.headerText);
                const headH = 6;
                $head.css('height', '' + headH + 'vh');

                // calculating dynamic distance by given minContentHeight
                if (settings.minContentHeight) { 
                    let calcDistance = Math.round((100 * (window.innerHeight - settings.minContentHeight) / window.innerHeight)) - headH;
                    settings.distance = Math.max(0, calcDistance);
                }

                $this.attr('distance', settings.distance);

                // setting distance to top
                const $cont = $this.find(".downupPopup-content");
                const contH = 100 - settings.distance - headH;
                $cont.css('height', '' + contH + 'vh');

                if (settings.contentScroll) {
                    $cont.css('overflow-y', 'scroll');
                }

                // bind ESC to close
                $(document).on('keyup', function(event) {
                    if(event.key == "Escape") {
                        close();
                    }
                });

            }, 100);
        }

        // Calling
        if (typeof options !== "object") {
            if (options === "open") {
                $(".downupPopup").addClass("no-act");
                if ($this.attr("bg") == 1)
                    $("#dark-back").show();

                $this.removeClass("no-act")
                    .css('transform', 'translate(-50%, ' + $this.attr('distance') + 'vh)');

                $("body").css("overflow", "hidden");
            }

            if (options === "close") {
                close();
            }
        }
    }
}(jQuery));