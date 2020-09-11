window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {
  $(".nav-pc__mode-btn i").click(function () {
    $(".nav-pc__mode-btn i").show();
    $(this).hide();
    $("body").toggleClass("dark-scheme night");
  });
});
