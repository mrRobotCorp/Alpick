document.addEventListener("DOMContentLoaded", function() {
    // ----------------- loader ------------------------------
    document.querySelector(".loading").style.visibility = "hidden";
    // -----------------------------------------------------
    const trigerMenu = document.getElementById("menu");
    const gnbMenu = document.getElementById("gnb");

    trigerMenu.onclick = function() {
        gnbMenu.style.transition = "all .5s"
        trigerMenu.classList.toggle("open");
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };

    // --------------------- menu move ---------------------------

    // window.onscroll = function() {
        //     if ( scrollHeight < 10000 ) {
            //         document.querySelector('.sec8_colorOR').style.width = '60vw';
            //         document.querySelector('.sec8_colorBlu').style.height = '33.3%';
            //         document.querySelector('.sec8_colorGry').style.height = '33.3%';
            //         document.querySelector('.sec8_colorWh').style.height = '33.3%';
            //     } else if ( scrollHeight >= 10000 ) {
                //         document.querySelector('.sec8_colorOR').style.width = '60vw';
                //         document.querySelector('.sec8_colorBlu').style.height = '33.3%';
                //         document.querySelector('.sec8_colorGry').style.height = '33.3%';
                //         document.querySelector('.sec8_colorWh').style.height = '33.3%';
                //     } 
                // };
                
                // window.onscroll();
                
    const scrollHeight = document.querySelector("html").scrollTop;
    

    window.onresize = function(event){
        const innerWidth = window.innerWidth;

        if (innerWidth > 1024) {
            window.onscroll = function() {

                if ( scrollHeight === 0) {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "15px";
                }
                
                if ( scrollHeight > 740) {
                    document.querySelector("header").style.top = "-30px";
                    document.querySelector("header div").style.marginBottom = "0";
                } else {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "15px";
                }

            }
            window.onmousemove = function(e) {
                if ( e.clientY < 70 ) {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "15px";
                } else if (scrollHeight > 740) {
                    document.querySelector("header").style.top = "-30px"
                    document.querySelector("header div").style.marginBottom = "0";
                }
            }
        }
    };

    window.onresize();

    const colorOR = document.querySelector('.sec8_colorOR');
    // const colorBlu = document.querySelector('.sec8_colorBlu');
    // const colorGry = document.querySelector('.sec8_colorGry');
    // const colorWh = document.querySelector('.sec8_colorWh');

    window.color = function() {
        if(scrollHeight === 12000) {
            colorOR.classList.add('.colorActive');
            colorOR.classList.remove('.sec8_colorOR');
        }
    };

    window.color();

    // -------------------------- progress indicator ---------------------------------
    window.addEventListener("scroll", () => {
        if(document.querySelector('.progressbar') != null)setProgress();
        console.log(scrollHeight);
    }); 

    function setProgress() {          
        let currY = document.documentElement.scrollTop;
        let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight; //전체 높이
        let percentage = (currY / totalY) * 100; //퍼센트 값
        document.querySelector(".progress").style.width = percentage + "%"; //프로그래스바 너비 변경
    }

    // --------------------custom mouse ---------------------------
    const cursor = document.createElement("div");
    cursor.setAttribute("class", "cursor");
    const follower = document.createElement("div");
    follower.setAttribute("class", "cursor_follower");

    document.querySelector("body").prepend(cursor, follower);

    function myCursor(e) {
        cursor.style.top = e.pageY + 10 + "px";
        cursor.style.left = e.pageX + 10 + "px";
    }

    function Trailer(e) {
        gsap.to(follower, { duration: 0.5, left: e.pageX - 10, top: e.pageY - 10 });
    }

    window.addEventListener("mousemove", myCursor);
    window.addEventListener("mousemove", Trailer);

    // ------------------ scroll move ------------------------------
    document.getElementById("logoTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    document.getElementById("menu0").onclick = function () {
        window.scrollTo({
            top: 750,
            left: 0,
            behavior: 'smooth'
        });
    }

    document.getElementById("menu1").onclick = function () {
        window.scrollTo({
            top: 3028,
            left: 0,
            behavior: 'smooth'
        });
    }

    document.getElementById("menu2").onclick = function () {
        window.scrollTo({
            top: 9800,
            left: 0,
            behavior: 'smooth'
        });
    }

    document.getElementById("menu3").onclick = function () {
        window.scrollTo({
            top: 13550,
            left: 0,
            behavior: 'smooth'
        });
    }

    document.getElementById("scrollTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // ---------------------------------------------------------
    const sticker0 = document.createElement('div');
    sticker0.setAttribute('id', 'sticker0');
    sticker0.setAttribute('class', 'sticker');

    const sticker1 = document.createElement('div');
    sticker1.setAttribute('id', 'sticker1');
    sticker1.setAttribute('class', 'sticker');

    const sticker2 = document.createElement('div');
    sticker2.setAttribute('id', 'sticker2');
    sticker2.setAttribute('class', 'sticker');

    const sticker3 = document.createElement('div');
    sticker3.setAttribute('id', 'sticker3');
    sticker3.setAttribute('class', 'sticker');

    const sticker4 = document.createElement('div');
    sticker4.setAttribute('id', 'sticker4');
    sticker4.setAttribute('class', 'sticker');

    const stickerAll = document.querySelector('.stickerAll');
    stickerAll.prepend(sticker0, sticker1, sticker2, sticker3, sticker4);

    // ------------------ prevent event ------------------------------
    const mainMockup = document.querySelector('#mainMockup');
    mainMockup.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // -------------------------------------------------------

    
        // ----------------------------------------------

});

    AOS.init();

    // ---------------- scrolling -------------------
    $(document).ready(function(){
    const scrollPos = $(document).scrollTop();
    const Height = $("#scrollTop").height(); 
    $("#scrollTop").hide();

    $(window).scroll(function(){ 
        var rolling = $(this).scrollTop() >= Height; 
        if (rolling) { 
            $("#scrollTop").fadeIn(500).css({"position":"fixed"}); } 
        else {
            $("#scrollTop").fadeOut(300);
        }

        // if (scrollPos >= 10000 ) {
        //     $('.sec8_colorOR').addClass('active');
        //     $('.sec8_colorBlu').addClass('active');
        //     $('.sec8_colorGry').addClass('active');
        //     $('.sec8_colorWh').addClass('active');
        // }

    });

    (function ($) {
        $.fn.marquee = function( setting ){

            function rightToLeft( wrap, content, speed ){
            var width = 0;

            content.append( content.html() );
            content.append( content.html() );


            content.find('li').each(function () {
                width += $(this).outerWidth();
            })

            content.width( width );


            function run() {
                if( wrap.scrollLeft() - (content.width() / 2) >= 0 ){
                    wrap.scrollLeft( 0 );
                }else{
                    wrap.scrollLeft( wrap.scrollLeft() + 1 );
                }
            }

            var timer = setInterval( run, speed );

            wrap.mouseover( function () {
                clearInterval( timer );
            } )

            wrap.mouseout( function () {
                timer = setInterval( run, speed );
            } )

            }

            function leftToRight( wrap, content, speed ){
            var width = 0;

            // 将内容复制四份，已解决单条公告循环滚动的问题
            content.append( content.html() );
            content.append( content.html() );

            content.find('li').each(function () {
                width += $(this).outerWidth();
            })

            content.width( width );
            wrap.scrollLeft( content.width() )

            function run() {
                if( wrap.scrollLeft() - (content.width() / 2) == 0 ){
                    wrap.scrollLeft( content.width() );
                }else{
                    wrap.scrollLeft( wrap.scrollLeft() - 1 );
                }
            }

            var timer = setInterval( run, speed );

            wrap.mouseover( function () {
                clearInterval( timer );
            } )

            wrap.mouseout( function () {
                timer = setInterval( run, speed );
            } )
            }

            return this.each(function(){
            var wrap = $(this);
            var content = wrap.find( setting.container );

            var animateType = wrap.attr('type');

            if ( animateType == 'right-to-left' ){
                content.addClass( animateType );
                rightToLeft( wrap, content, setting.speed );
            }

            if ( animateType == 'left-to-right' ){
                content.addClass( animateType );
                leftToRight( wrap, content, setting.speed );
            }

            if ( animateType == 'static' ){
                content.addClass( animateType );
            }

            if ( animateType == 'bottom-to-top' ){
                content.addClass( animateType );
                bottomToTop( wrap, content, setting.speed );
            }

            })
        }
        })(jQuery)

        var setting = {
        container: '.marquee-content',
        speed: 0.6
        }
        $('.marquee-wrap').marquee( setting );


    $('.play-pause-btn').on('click',function(){

        if($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0);
            // $(this).text('Play');
            $('#video')[0].pause();
        } else {
            $(this).attr('data-click', 1);
            // $(this).text('Pause');
            $('#video')[0].play();
        }
        
    });
        

});
