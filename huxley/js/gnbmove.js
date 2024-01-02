$(function () {
  // GNB 기본설정
  //$(".gnb_bg").hide();
  //$(".sub").hide();

  $("#gnb .main").on("mouseenter focusin", function () {
    //오버+포커스인
    $(".sub", this).css({ display: "flex" }).stop().fadeIn(300);
    $(".gnb_bg").stop().slideDown(300);
  });

  $("#gnb .main").on("mouseleave focusout", function () {
    //아웃+포커스아웃
    $(".sub", this).stop().fadeOut(200);
    $(".gnb_bg").stop().slideUp(200);
  });

  // 스크롤 이벤트 //

  $(window).scroll(function () {
    // 스크롤하는동안

    const t1 = $("#header").offset().top;
    const c2 = $("#con2").offset().top;

    let sc = $(document).scrollTop(); //스크롤값
    $("#tt").text(sc); //스크롤값을 #tt에 출력

    $("#con1 .bestnew").css({
      transition: "0.7s",
      position: "relative",
      top: 50,
      opacity: "0",
    });
    $("#con1 .promotion").css({
      transition: "0.7s",
      position: "relative",
      top: 50,
      opacity: "0",
    });
    $("#con1 .swiper-slide").css({
      transition: "0.7s",
      position: "relative",
      right: -50,
      opacity: "0",
    });

    $("#con2 li div").css({
      transition: "1s",
      position: "relative",
      opacity: "0",
      top: 140,
    });

    if (sc >= 500) {
      //con1구간 타이포

      $("#con1 .bestnew").css({ opacity: "1", top: 0 });
      $("#con1 .promotion").css({ opacity: "1", top: 0 });
      $("#con1 .swiper-slide").css({ right: 0, opacity: "1" });
    }

    if (sc >= 1190) {
      //con2구간 1
      $("#con2 li div:first, #con2 li div:eq(1)").css({
        opacity: "1",
        top: 100,
      });
    }
    if (sc >= 1650) {
      //con2구간 2
      $("#con2 li div:last").css({ opacity: "1", top: 100 });
    }
  });
});
