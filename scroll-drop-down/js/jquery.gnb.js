jQuery(function(jQuery){

    jQuery.fn.gnb = function(options) {

        var opts = jQuery.extend(options);

        var gnb = jQuery(this);

        var gnbList = gnb.find('>ul>li');

        var submenu = gnb.find('.submenu');

        var submenuList = submenu.find('>ul>li');

        var submenuBg = jQuery('.submenu-bg');

        var headerG = jQuery('#header');



        var heightArray = jQuery("#gnb .submenu ul").map(function(){

            return jQuery(this).outerHeight();

        }).get();

        var maxHeight = Math.max.apply(Math, heightArray);



        function showMenu() {

            t = jQuery(this).parent('li');

            if (!t.hasClass('active')) {

                gnbList.removeClass('active');

                gnbList.bind("focus mouseover",function(){

                    jQuery(this).addClass("active");

                });

                gnbList.bind("mouseleave",function(){

                    jQuery(this).removeClass("active");

                });

                

                

            }

            submenuBg.show();

            submenuBg.stop(true, false).animate({height:maxHeight},200, 'swing',function(){

                jQuery("#gnb .submenu").height(maxHeight);    

                submenu.fadeIn(200);

            });



            headerG.addClass('hactive');

        }



        function showMenu2() {

            t = jQuery(this).parent('li');

            if (!t.hasClass('active')) {

                gnbList.removeClass('active');

                t.addClass('active');

            }

            submenuBg.stop(true, false).animate({height:maxHeight},200, 'swing',function(){

                jQuery("#gnb .submenu").height(maxHeight);    

                submenu.fadeIn(200);

            });

            return false;

        }



        function hideMenu() {

            gnbList.removeClass('active');

            submenu.fadeOut(100);

            submenuBg.stop(true, false).delay(100).animate({height:'0'},200, 'swing', function(){

                submenuBg.hide();            

            });



            headerG.removeClass('hactive');

        }





        function activeMenu() {

            if(opts.d1) {

                t = gnbList.eq(opts.d1-1); 

                t.addClass('active');

                /*if(opts.d2) {

                    t.find('.submenu>ul>li').eq(opts.d2-1).addClass('on');

                }*/

            }

        }



        return this.each(function() {

            var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

            if( !isTablet ){

                gnbList.find('>a').mouseover(showMenu).focus(showMenu);

            }else{

                gnbList.find('>a').click(showMenu2);

            }

            $("#header").mouseleave(hideMenu);

        });

    }



    jQuery('#gnb').gnb();

}); 