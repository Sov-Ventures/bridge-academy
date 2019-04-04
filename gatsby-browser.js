import "./src/styles/home.bundle.css";
import "./src/styles/marketing/jquery-ui.min.css";
import "./src/styles/marketing/slider.min.css";
import "jquery/src/jquery";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min";

// import "./src/styles/ss-gizmo/ss-gizmo.css";

document.addEventListener("DOMContentLoaded", function(event) {
  // $(".ask").click(function() {
  //   Intercom("show");
  // });

  $(".video").click(function() {
    this.paused ? this.play() : this.pause();
    $(".video").prop("volume", 0.0);
    $(this).prop("volume", 0.5);
  });

  /***/
  // to top right away
  // if (window.location.hash) scroll(0, 0);
  // // void some browsers issue
  // setTimeout(function() {
  //   scroll(0, 0);
  // }, 1);

  // your current click function
  // $(".scroll").on("click", function(e) {
  //   var url = document.createElement("a");
  //   url.href = $(this).attr("href");

  //   if (url.pathname === window.location.pathname) {
  //     e.preventDefault();
  //     $("html, body").animate(
  //       {
  //         scrollTop: $(url.hash).offset().top + "px",
  //       },
  //       1000,
  //       "swing"
  //     );
  //   }
  // });

  // *only* if we have anchor on the url
  if (window.location.hash && $(window.location.hash).length > 0) {
    // smooth scroll to the anchor id
    $("html, body").animate(
      {
        scrollTop: $(window.location.hash).offset().top + "px",
      },
      1000,
      "swing"
    );
  }
  // $("#dropdownMenuButton").click(function() {
  //   $("html,body").animate(
  //     {
  //       scrollTop: $("#dropdownMenuButton").offset().top,
  //     },
  //     "slow"
  //   );
  // });

  // $("#dropdownMenuButton1").click(function() {
  //   $("html,body").animate(
  //     {
  //       scrollTop: $("#dropdownMenuButton1").offset().top,
  //     },
  //     "slow"
  //   );
  // });

  //jquery redirect links in dropdown
  $(".dropdown-menu a").click(function() {
    //event.preventDefault();
    //event.stopPropagation();
    //var hash = window.location.hash;
    //$(location).attr('href',$(this).attr('href'));
  });

  //$(".dropdown-menu").dropdown();

  $(".mobile-nav .menu-item").click(function() {
    $(".mobile-nav").toggleClass("expand");
    $(".navbar").toggleClass("expanded-nav");
  });

  $(".menu-btn").click(function() {
    $(".mobile-nav").toggleClass("expand");
    $(".navbar").toggleClass("expanded-nav");
  });

  /***/
  $(".navbar").data("size", "big");
});
