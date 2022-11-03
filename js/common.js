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

    const arrow0 = document.createElement('div');
    arrow0.setAttribute('id', 'arrow0');
    const arrow1 = document.createElement('div');
    arrow1.setAttribute('id', 'arrow1');
    const arrow2 = document.createElement('div');
    arrow2.setAttribute('id', 'arrow2');
    
    const arrowAll = document.querySelector('#sec2_arrow');
    arrowAll.prepend(arrow0, arrow1, arrow2);

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
            top: 2435,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    document.getElementById("menu2").onclick = function () {
        window.scrollTo({
            top: 4000,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    document.getElementById("menu3").onclick = function () {
        window.scrollTo({
            top: 600,
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
    // const scrollPos = $(document).scrollTop();
    const Height = $("#scrollTop").height(); 
    $("#scrollTop").hide();

    $(window).scroll(function(){ 
        var rolling = $(this).scrollTop() >= Height; 
        if (rolling) { 
            $("#scrollTop").fadeIn(500).css({"position":"fixed"}); } 
        else {
            $("#scrollTop").fadeOut(300);
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
