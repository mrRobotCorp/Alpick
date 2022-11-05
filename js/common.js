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
                
    window.onresize = function(event){
        const scrollHeight = document.querySelector("html").scrollTop;
        const innerWidth = window.innerWidth;

        if (innerWidth > 1024) {
            window.onscroll = function() {
                // 스크롤위치
                console.log(scrollHeight); 

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

    // -------------------------- progress indicator ---------------------------------
    window.addEventListener("scroll", () => {
        if(document.querySelector('.progressbar') != null)setProgress();
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

    // ------------------------------------------------------
    // document.getElementById("easyVegan").innerText = "쉬운 비건, 쉬운 실천!";

    // ------------------ prevent event ------------------------------
    const mainMockup = document.querySelector('#mainMockup');
    mainMockup.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    });
    
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

        if (scrollPos >= 10000 ) {
            $('.sec8_colorOR').addClass('active');
            $('.sec8_colorBlu').addClass('active');
            $('.sec8_colorGry').addClass('active');
            $('.sec8_colorWh').addClass('active');
        }

        // if ( scrollPos === 0 ) {
        //     $('.sec8_colorOR').css({ 'width' : '60vw'});
        //     $('.sec8_colorBlu').css({ 'height' : '33.3%'});
        //     $('.sec8_colorGry').css({ 'height' : '33.3%'});
        //     $('.sec8_colorWh').css({ 'height' : '33.3%'});

        // } else if (scrollPos >= 10000 ) {
        //     $('.sec8_colorOR').css({ 'width' : '60vw'});
        //     $('.sec8_colorBlu').css({ 'height' : '33.3%'});
        //     $('.sec8_colorGry').css({ 'height' : '33.3%'});
        //     $('.sec8_colorWh').css({ 'height' : '33.3%'});
        // }

    });


});
