document.addEventListener("DOMContentLoaded", function() {
    
    AOS.init();

    // ----------------- loader ------------------------------
    document.querySelector(".loading").style.visibility = "hidden";
    
    // ----------------------- responsive ------------------------------
    // const trigerMenu = document.getElementById("menu");
    // const gnbMenu = document.getElementById("gnb");

    // trigerMenu.onclick = function() {
    //     gnbMenu.style.transition = "all .5s"
    //     trigerMenu.classList.toggle("open");
    //     this.classList.toggle("active");
    //     gnbMenu.classList.toggle("active");
    // };

    // --------------------- header interaction ---------------------------
    const scrollNum = document.querySelector("html").scrollTop;

    window.onresize = function(event){
        const innerWidth = window.innerWidth;

        if (innerWidth > 1024) {
            window.onscroll = function() {

                if ( scrollNum === 0) {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "calc(100vw * 17 / 1920)";
                }
                
                if ( scrollNum > 740) {
                    document.querySelector("header").style.top = "calc(100vw * -31 / 1920)";
                    document.querySelector("header div").style.marginBottom = "0";
                } else {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "calc(100vw * 17 / 1920)";
                }

            }
            window.onmousemove = function(e) {
                if ( e.clientY < 70 ) {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "calc(100vw * 17 / 1920)";
                } else if (scrollNum > 740) {
                    document.querySelector("header").style.top = "calc(100vw * -31 / 1920)"
                    document.querySelector("header div").style.marginBottom = "0";
                }
            }
        }
    };

    window.onresize();

    // -------------------------- progress indicator ---------------------------------
    window.addEventListener("scroll", () => {
        if(document.querySelector('.progressbar') != null)setProgress();
    }); 

    function setProgress() {          
        let currY = document.documentElement.scrollTop;
        let totalY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let percentage = (currY / totalY) * 100;
        document.querySelector(".progress").style.width = percentage + "%";
    }

    // -------------------- custom mouse ---------------------------
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


    // ------------------------ DOM element ?????? ---------------------------------
    document.querySelector('.totalGoal').insertAdjacentHTML('afterend', `<div class=roundBg></div>`);

    const stickerAll = document.querySelector('.stickerAll');
    stickerAll.insertAdjacentHTML('afterbegin', `
        <img class='sticker' id='sticker0' src='./source/sec12_sticker0.png' alt='sticker0'>
        <img class='sticker' id='sticker1' src='./source/sec12_sticker0.png' alt='sticker1'>
        <img class='sticker' id='sticker2' src='./source/sec12_sticker1.png' alt='sticker2'>
        <img class='sticker' id='sticker3' src='./source/sec12_sticker1.png' alt='sticker3'>
        <img class='sticker' id='sticker4' src='./source/sec12_sticker0.png' alt='sticker4'>
    `);

    // const sticker0 = document.createElement('div');
    // sticker0.setAttribute('id', 'sticker0');
    // sticker0.setAttribute('class', 'sticker');

    // const sticker1 = document.createElement('div');
    // sticker1.setAttribute('id', 'sticker1');
    // sticker1.setAttribute('class', 'sticker');

    // const sticker2 = document.createElement('div');
    // sticker2.setAttribute('id', 'sticker2');
    // sticker2.setAttribute('class', 'sticker');

    // const sticker3 = document.createElement('div');
    // sticker3.setAttribute('id', 'sticker3');
    // sticker3.setAttribute('class', 'sticker');

    // const sticker4 = document.createElement('div');
    // sticker4.setAttribute('id', 'sticker4');
    // sticker4.setAttribute('class', 'sticker');

    // stickerAll.prepend(sticker0, sticker1, sticker2, sticker3, sticker4);
    
    // ------------------ prevent event ------------------------------
    const mainMockup = document.querySelector('#mainMockup');
    mainMockup.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });

    // ------------------ nav scroll move ------------------------------
    document.getElementById("logoTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    document.getElementById("menu0").onclick = function () {
        window.scrollTo({
            top: 750,
            left: 0,
            behavior: 'smooth'
        });
    };

    document.getElementById("menu1").onclick = function () {
        window.scrollTo({
            top: 3010,
            left: 0,
            behavior: 'smooth'
        });
    };

    document.getElementById("menu2").onclick = function () {
        window.scrollTo({
            top: 9800,
            left: 0,
            behavior: 'smooth'
        });
    };

    document.getElementById("menu3").onclick = function () {
        window.scrollTo({
            top: 13550,
            left: 0,
            behavior: 'smooth'
        });
    };

    document.getElementById("scrollTop").onclick = function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    
    // --------------------------- scrollTrigger --------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    const boxOR = gsap.timeline({
        scrollTrigger: {
        trigger: ".allColor",
        start : "top 90%",
        scrub: true,
        end : "+=200 20%"
        }
    });

    const boxBlu = gsap.timeline({
        scrollTrigger: {
        trigger: ".allColor",
        start : "top 90%",
        scrub: true,
        end : "+=200 20%"
        }
    });

    const boxGry = gsap.timeline({
        scrollTrigger: {
        trigger: ".allColor",
        start : "top 70%",
        scrub: true,
        end : "+=200 13%"
        }
    });

    const boxWh = gsap.timeline({
        scrollTrigger: {
        trigger: ".allColor",
        start : "top 50%",
        scrub: true,
        end : "+=200 7%"
        }
    });
    
    boxOR.to('.sec8_colorOR', { 
        width:'53vw', 
        duration:1
    });

    boxBlu.to('.sec8_colorBlu', { 
        height:'33.3%', 
        width: '38vw',
        duration:1
    });

    boxGry.to('.sec8_colorGry', { 
        height:'33.3%', 
        width: '38vw',
        duration:1
    });

    boxWh.to('.sec8_colorWh', { 
        height:'33.3%', 
        width: '38vw',
        duration:1
    });

});


// -------------------------------------------------------------------
$(document).ready(function(){

    const Height = $("#scrollTop").height(); 
    $("#scrollTop").hide();

    $(window).scroll(function(){ 
        var rolling = $(this).scrollTop() >= Height; 
        if (rolling) { 
            $("#scrollTop").fadeIn(500).css({"position":"fixed"}); } 
        else {
            $("#scrollTop").fadeOut(300);
        }

    });

    // ----------------------- loop slide ---------------------- 
    (function ($) {
        $.fn.marquee = function( setting ){

            function rightToLeft( wrap, content, speed ){
                var width = 0;
                content.append( content.html() );
                content.append( content.html() );
                content.find('dl').each(function () {
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

            return this.each(function(){
                var wrap = $(this);
                var content = wrap.find( setting.container );
                var animateType = wrap.attr('type');

                if ( animateType == 'right-to-left' ){
                    content.addClass( animateType );
                    rightToLeft( wrap, content, setting.speed );
                }
            })
        }

        })(jQuery)

        var setting = {
        container: '.marquee-content',
        speed: 0.6
        }

        $('.marquee-wrap').marquee( setting );

    // -----------------------  audio control --------------------------
    const audio0 = document.querySelector('#sec7_audio0');
    const audio1 = document.querySelector('#sec7_audio1');
    audio0.volume = 0.8;
    audio1.volume = 0.8;

    $('.sec7_box0').on('click',function(){
        if($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0);
            $('#sec7_audio0')[0].pause();
        } else {
            $(this).attr('data-click', 1);
            $('#sec7_audio0')[0].play();
        }
    });

    $('.sec7_box2').on('click',function(){
        if($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0);
            $('#sec7_audio1')[0].pause();
        } else {
            $(this).attr('data-click', 1);
            $('#sec7_audio1')[0].play();
        }
    });
    
});
