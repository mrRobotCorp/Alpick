document.addEventListener("DOMContentLoaded", function() {
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
    window.onresize = function(event){
        var innerWidth = window.innerWidth;
        if (innerWidth > 1024) {
            window.onscroll = function() {
                console.log(document.querySelector("html").scrollTop);
                if ( document.querySelector("html").scrollTop > 100) {
                    document.querySelector("header").style.top = "-76px";
                } else {
                    document.querySelector("header").style.top = "0px";
                }
            }
            window.onmousemove = function(e) {
                if ( e.clientY < 80 ) {
                    document.querySelector("header").style.top = "0px"
                } else {
                    document.querySelector("header").style.top = "-76px"
                }
            }
        }
    }

    window.onresize();

    // -------------------------- progress indicator ---------------------------------
    window.addEventListener("scroll", () => {
        if(document.querySelector('.progressbar') != null)setProgress();
    }); 

    function setProgress() {          
        let currY = document.documentElement.scrollTop; //스크롤한 높이
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

});

// ---------------- after scrolling -------------------
$(document).ready(function(){
    var Height = $("#scrollTop").height(); 
    $("#scrollTop").hide();

    $(window).scroll(function(){ 
        var rolling = $(this).scrollTop() >= Height; 
        if (rolling) { 
            $("#scrollTop").fadeIn(500).css({"position":"fixed"}); } 
        else {
            $("#scrollTop").fadeOut(300);
        }
    });
});