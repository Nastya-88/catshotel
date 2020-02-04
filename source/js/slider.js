// $(".rooms__items-container").slick({
//   dots: true,
//   infinite: false,
//   responsive: [
//     {
//       breakpoint: 1365,
//       settings: {
//         arrows: true,
//         infinite: false,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         infinite: false,
//         arrows: false,
//         dots: true
//       }
//     }
//   ]
// });

$(".reviews__slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2.5,
  arrows: false,
  responsive: [
    {
      breakpoint: 1365,
      settings: {
        slidesToShow: 1.5,
        infinite: false,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
});

(function($) {
  const hwSlideSpeed = 700;
  const hwTimeOut = 5000;
  const hwNeedLinks = true;
  const slilinkss = true;

  $(document).ready(function(e) {
    $(".slide")
      .css({ position: "absolute", top: "0", left: "0" })
      .hide()
      .eq(0)
      .show();
    let slideNum = 0;
    let slideTime;
    slideCount = $("#slider .slide").size();
    function animSlide(arrow) {
      clearTimeout(slideTime);
      $(".slide")
        .eq(slideNum)
        .fadeOut(hwSlideSpeed);
      if (arrow == "next") {
        if (slideNum == slideCount - 1) {
          slideNum = 0;
        } else {
          slideNum++;
        }
      } else if (arrow == "prew") {
        if (slideNum == 0) {
          slideNum = slideCount - 1;
        } else {
          slideNum -= 1;
        }
      } else {
        slideNum = arrow;
      }
      $(".slide")
        .eq(slideNum)
        .fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $(".control-slide")
        .eq(slideNum)
        .addClass("active");
    }
    if (hwNeedLinks) {
      const $linkArrow = $(
        '<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>'
      ).prependTo("#slider-wrap");
      $("#nextbutton").click(function() {
        animSlide("next");
        return false;
      });
      $("#prewbutton").click(function() {
        animSlide("prew");
        return false;
      });
    }
    let $adderSpan = "";
    $(".slide").each(function(index) {
      $adderSpan += '<span class = "control-slide">' + index + "</span>";
    });
    $('<div class ="sli-links">' + $adderSpan + "</div>").appendTo(
      "#slider-wrap"
    );
    $(".control-slide:first").addClass("active");
    $(".control-slide").click(function() {
      const goToNum = parseFloat($(this).text());
      animSlide(goToNum);
    });
    let pause = false;
    function rotator() {
      if (!pause) {
        slideTime = setTimeout(function() {
          animSlide("next");
        }, hwTimeOut);
      }
    }
    $("#slider-wrap").hover(
      function() {
        clearTimeout(slideTime);
        pause = true;
      },
      function() {
        pause = false;
        rotator();
      }
    );
    rotator();

    if (!slilinkss) $(".sli-links").css({ display: "none" });
  });
})(jQuery);
