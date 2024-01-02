
 //비주얼 스와이퍼 갤러리 옵션
 new Swiper(".visualgall", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

 //컨텐츠 스와이퍼 갤러리 옵션
new Swiper(".bestnNew", {
    slidesPerView: 4,
    spaceBetween:0,

    scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
     },

        // freeMode: true,
        // pagination: { 
        // el: ".swiper-pagination",
        // clickable: true,
        // type:"progressbar", //진행 스크롤바 형태로 표시
        //},

    });

        /*
        let swiper1 = new Swiper(".bestnNew", { //갤러리 영역명

        loop:true, //순환유무
        grabCursor:true, //커서 손모양

        //autoplay:{ //자동실행
        //delay:2000,//자동실행 간격 (1000=1초)
        //disableOnInteraction:false, //true로 설정하면 메뉴를 누른후부터는 자동실행 안됨
        //},

        //effect:'slide', //slide fade cube coverflow flip cards creative

        //slidesPerView:2, //보이는 영역에 표시될 슬라이드 개수 (effect사용시 사용불가)
        //spaceBetween:30, //슬라이드 사이의 간격

        pagination: {
        el:".nav1", //메뉴영역 클래스명
        clickable:true, //메뉴 클릭때도 슬라이드 실행
        //dynamicBullets:true, //활성화 메뉴는 크고 나머지 메뉴는 작아는 효과
        //type:"progressbar", //진행 스크롤바 형태로 표시
        //type:"fraction", //페이지 번호 형태로 표시
        },

        navigation: {
        nextEl:".b-next1",//다음 버튼 클래스명
        prevEl:".b-prev1",//이전 버튼 클래스명
        },

        });
        */
