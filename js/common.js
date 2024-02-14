document.addEventListener("DOMContentLoaded", function () {

    AOS.init();

    // ----------------- loader ------------------------------
    document.querySelector("body").insertAdjacentHTML('afterbegin', `
    <div class="loading">
        <div class="container">
            <div class="dash uno"></div>
            <div class="dash dos"></div>
            <div class="dash tres"></div>
            <div class="dash cuatro"></div>
        </div>
    </div>
    `);

    document.querySelector(".loading").style.visibility = "hidden";


    // --------------------- header interaction ---------------------------
    const scrollNum = document.querySelector("html").scrollTop;

    window.onresize = function (event) {
        const innerWidth = window.innerWidth;

        if (innerWidth > 1024) {
            window.onscroll = function () {

                if (scrollNum === 0) {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "calc(100vw * 17 / 1920)";
                }

                if (scrollNum > 740) {
                    document.querySelector("header").style.top = "calc(100vw * -31 / 1920)";
                    document.querySelector("header div").style.marginBottom = "0";
                } else {
                    document.querySelector("header").style.top = "0";
                    document.querySelector("header div").style.marginBottom = "calc(100vw * 17 / 1920)";
                }

            }
            window.onmousemove = function (e) {
                if (e.clientY < 70) {
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
        if (document.querySelector('.progressbar') != null) setProgress();
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

    if (window.innerWidth < 768) {
        cursor.style.visibility = 'hidden';
        follower.style.visibility = 'hidden';
    }


    // ------------------------ DOM element 추가 ---------------------------------
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
            start: "top 90%",
            scrub: true,
            end: "+=200 20%"
        }
    });

    const boxBlu = gsap.timeline({
        scrollTrigger: {
            trigger: ".allColor",
            start: "top 90%",
            scrub: true,
            end: "+=200 20%"
        }
    });

    const boxGry = gsap.timeline({
        scrollTrigger: {
            trigger: ".allColor",
            start: "top 70%",
            scrub: true,
            end: "+=200 13%"
        }
    });

    const boxWh = gsap.timeline({
        scrollTrigger: {
            trigger: ".allColor",
            start: "top 50%",
            scrub: true,
            end: "+=200 7%"
        }
    });

    boxOR.to('.sec8_colorOR', {
        width: '53vw',
        duration: 1
    });

    boxBlu.to('.sec8_colorBlu', {
        height: '33.3%',
        width: '38vw',
        duration: 1
    });

    boxGry.to('.sec8_colorGry', {
        height: '33.3%',
        width: '38vw',
        duration: 1
    });

    boxWh.to('.sec8_colorWh', {
        height: '33.3%',
        width: '38vw',
        duration: 1
    });



    if (window.innerWidth < 768) {

        // ------------------- hamburger menu -----------------------------
        let gnbMenu = document.querySelector("#gnb");

        gnbMenu.insertAdjacentHTML('afterend',`
        <button id="menu" class="menu-trigger">
            <span class="blind">메뉴보기</span>
            <span></span>
            <span></span>
            <span></span>
        </button>
        `);

        var trigerMenu = document.querySelector("#menu");

        trigerMenu.onclick = function () {
            gnbMenu.style.transition = "all .5s"
            trigerMenu.classList.toggle("open");
            this.classList.toggle("active");
            gnbMenu.classList.toggle("active");
        };

        
        let sec1_txt = document.querySelector("#sec1_txt h3");
        sec1_txt.innerHTML = `혼술이 <span class="colorOR">위험에 쉽게</span> 노출될 수 <br>있다는 사실을 알고 계셨나요?`;


        // ------------ mockup video ------------------------
        let vid = document.querySelector("#sec7_mockup video");
        
        if (vid.paused || !vid.played) {
            vid.play;
        };

        vid.onclick = function() {
            console.log("ch");
        }
            // /*
            //   Quick whip-up of an idea posed by a client: a bar filled with logo's that move to the left slowly and infinitely.
            //   I checked if the <marquee> tag was still working (and it is), but it's considered invalid html now so I needed something else.
            // */
        
            // const items = [...document.getElementsByClassName('list__item')];
            // const containerElem = document.getElementById('containerElem');
            // const leftSideOfContainer = containerElem.getBoundingClientRect().left;
            // const listElem = document.getElementById('list');
            // let currentLeftValue = 0;
        
            // // Kick off for the animation function.
            // window.setInterval(animationLoop, 20);
        
            // /* 
            //   Looks at first item in the list and checks if it goes out of the visible area 
            //   by comparing the right position of the first list item to the left position 
            //   of the containing element. 
            // */
            // function animationLoop() {
            //     const firstListItem = listElem.querySelector('.list__item:first-child');
        
            //     let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;
        
            //     /* 
            //       If first list item is out of viewable area, move it to the end of the list. 
            //       Also, set the current left value to -1 so we won't stutter.
            //     */
            //     if (rightSideOfFirstItem == leftSideOfContainer) {
            //         currentLeftValue = -1;
            //         listElem.appendChild(firstListItem);
            //     }
        
            //     // The part that keeps it all going: animating the margin left value of the list.
            //     listElem.style.marginLeft = `${currentLeftValue}px`;
            //     currentLeftValue--;
            // }
        
        
    }



});


// -------------------------------------------------------------------
$(document).ready(function () {

    const Height = $("#scrollTop").height();
    $("#scrollTop").hide();

    $(window).scroll(function () {
        var rolling = $(this).scrollTop() >= Height;
        if (rolling) {
            $("#scrollTop").fadeIn(500).css({ "position": "fixed" });
        }
        else {
            $("#scrollTop").fadeOut(300);
        }

    });

    // ----------------------- loop slide ---------------------- 
    (function ($) {
        $.fn.marquee = function (setting) {

            function rightToLeft(wrap, content, speed) {
                var width = 0;
                content.append(content.html());
                content.append(content.html());
                content.find('dl').each(function () {
                    width += $(this).outerWidth();
                })

                content.width(width);

                function run() {
                    if (wrap.scrollLeft() - (content.width() / 2) >= 0) {
                        wrap.scrollLeft(0);
                    } else {
                        wrap.scrollLeft(wrap.scrollLeft() + 1);
                    }
                }

                var timer = setInterval(run, speed);

                wrap.mouseover(function () {
                    clearInterval(timer);
                })
                wrap.mouseout(function () {
                    timer = setInterval(run, speed);
                })

            }

            return this.each(function () {
                var wrap = $(this);
                var content = wrap.find(setting.container);
                var animateType = wrap.attr('type');

                if (animateType == 'right-to-left') {
                    content.addClass(animateType);
                    rightToLeft(wrap, content, setting.speed);
                }
            })
        }

    })(jQuery)

    var setting = {
        container: '.marquee-content',
        speed: 0.5
    }

    $('.marquee-wrap').marquee(setting);

    if (window.innerWidth < 768) {

        var setting = {
            // container: '.marquee-content',
            // speed: 0.01
        }
        
    }

    // -----------------------  audio control --------------------------
    const audio0 = document.querySelector('#sec7_audio0');
    const audio1 = document.querySelector('#sec7_audio1');
    audio0.volume = 0.8;
    audio1.volume = 0.8;

    $('.sec7_box0').on('click', function () {
        if ($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0);
            $('#sec7_audio0')[0].pause();
        } else {
            $(this).attr('data-click', 1);
            $('#sec7_audio0')[0].play();
        }
    });

    $('.sec7_box2').on('click', function () {
        if ($(this).attr('data-click') == 1) {
            $(this).attr('data-click', 0);
            $('#sec7_audio1')[0].pause();
        } else {
            $(this).attr('data-click', 1);
            $('#sec7_audio1')[0].play();
        }
    });

});
