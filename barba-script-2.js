function updateCurrentClass() {
  $(".page_link").removeClass("w--current");
  $(".page_link").each(function (index) {
    if ($(this).attr("href") === window.location.pathname) {
      $(this).addClass("w--current");
    }
  });
}

function updatePage() {
  $(window).scrollTop(0);
  $(".overlay").css("opacity", "0");
}
barba.init({
  preventRunning: true,
  transitions: [
    {
      name: "whatever",
      beforeLeave(data) {
        return gsap.to(data.current.container, {
          zIndex: 1
        });
      },
      


      leave(data) {
        gsap.to(data.current.container.firstElementChild, { scale: 0.96 });
        return gsap.to(".overlay", {
          opacity: 0.1,
          duration: 0.6,
          ease: "power2.out"
        });
      },
     


      enter(data) {
        const tl = new gsap.timeline({
          onComplete: function () {
            updateCurrentClass();
            updatePage();
          }
        });
        $(data.next.container).addClass("fixed");
        return tl.from(data.next.container, {
          zIndex: 3,
          borderRadius: "5%",
          yPercent: 100,
          duration: 0.5,
          ease: "power2.out"
        });
      },



      afterEnter(data) {
        $(data.next.container).removeClass("fixed");
      }



    }
  ]
});










