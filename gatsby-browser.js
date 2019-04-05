import "./src/styles/home.bundle.css";
import "./src/styles/marketing/jquery-ui.min.css";
import "./src/styles/marketing/slider.min.css";
import "jquery/src/jquery";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min";

// import "./src/styles/ss-gizmo/ss-gizmo.css";

// function handleMenuItem() {
//   let menuItems = document.querySelectorAll(".mobile-nav .menu-item");

//   menuItems = Array.from(menuItems);

//   menuItems.forEach(item => {
//     item.addEventListener("click", function() {
//       $(".mobile-nav").toggleClass("expand");
//       $(".navbar").toggleClass("expanded-nav");
//     });
//   });

//   console.log(menuItems);
// }

document.addEventListener("DOMContentLoaded", function(event) {
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
  // if (window.location.hash && $(window.location.hash).length > 0) {
  //   // smooth scroll to the anchor id
  //   $("html, body").animate(
  //     {
  //       scrollTop: $(window.location.hash).offset().top + "px",
  //     },
  //     1000,
  //     "swing"
  //   );
  // }
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
  // $(".dropdown-menu a").click(function() {
  //   //event.preventDefault();
  //   //event.stopPropagation();
  //   //var hash = window.location.hash;
  //   //$(location).attr('href',$(this).attr('href'));
  // });

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

  // ! function() {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console &&
        console.error &&
        console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "group",
        "track",
        "ready",
        "alias",
        "page",
        "once",
        "off",
        "on",
      ];
      analytics.factory = function(t) {
        return function() {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics;
        };
      };
      for (var t = 0; t < analytics.methods.length; t++) {
        var e = analytics.methods[t];
        analytics[e] = analytics.factory(e);
      }
      analytics.load = function(t) {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src =
          ("https:" === document.location.protocol ? "https://" : "http://") +
          "cdn.segment.com/analytics.js/v1/" +
          t +
          "/analytics.min.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
      };
      analytics.SNIPPET_VERSION = "3.0.1";
      analytics.load("RkOVgrq95SpTAxLiircyuR5jvQ29jC8j");
      analytics.page();
    }
  // }();
});
