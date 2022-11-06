export default addEventListener();

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
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
            top: 3150,
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

    // -----------------------------------------------------------------
    gsap.registerPlugin(ScrollTrigger);

    const boxOR = gsap.timeline({
        scrollTrigger: {
        trigger: ".color", // 트리거 기준 요소 선택
        start : "top 100%",
        // pin: true,// 트리거 시작 지점
        scrub: true,
        end : "+=450 20%", // // scroll trigger와 동일함
        // toggleActions : "play reverse none reverse"  // default : play none none none
        // toggleActions : (onEnter, onLeave, onEnterBack, onLeaveBack) 값은 
        // (play pause resume reset restart complete reverse none) 사용 가능  
        // toggleActions : (트리거 시작할 때, 트리거 떠날 때, end방향으로 다시 진입할 때, start로 다시 진입할 때, start로 다시 나갈 때) 
        }
    });

    const boxBlu = gsap.timeline({
        scrollTrigger: {
        trigger: ".color", // 트리거 기준 요소 선택
        start : "top 100%",
        scrub: true,
        end : "+=450 20%", // // scroll trigger와 동일함
        }
    });

    const boxGry = gsap.timeline({
        scrollTrigger: {
        trigger: ".color", // 트리거 기준 요소 선택
        start : "top 100%",
        scrub: true,
        end : "+=450 20%", // // scroll trigger와 동일함
        }
    });

    const boxWh = gsap.timeline({
        scrollTrigger: {
        trigger: ".color", // 트리거 기준 요소 선택
        start : "top 100%",
        scrub: true,
        end : "+=450 20%", // // scroll trigger와 동일함
        }
    });

    
    
    boxOR.to('.sec8_colorOR', { 
        // scrollTrigger:color, 
        width:'60vw', 
        duration:1
    })

    boxBlu.to('.sec8_colorBlu', { 
        // scrollTrigger:color, 
        height:'33.3%', 
        width: '40vw',
        duration:1
    })

    boxGry.to('.sec8_colorGry', { 
        // scrollTrigger:color, 
        height:'33.3%', 
        width: '40vw',
        duration:1
    })

    boxWh.to('.sec8_colorWh', { 
        // scrollTrigger:color, 
        height:'33.3%', 
        width: '40vw',
        duration:1
    })
});