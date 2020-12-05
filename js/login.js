$(document).ready(function () {
  $(".fa-eye").click(function () {
    $(".fa-eye-slash").show().css("color", "#4e4e4e");
    $(this).hide();
  });
  $(".fa-eye-slash").click(function () {
    $(".fa-eye").show().css("color", "rgba(161, 161, 161, 0.4)");
    $(this).hide();
  });
  $(".sign-up").click(function () {
    $(".fa-eye-slash").hide();
    $(".fa-eye").show();
  });
  $(".sign-in").click(function () {
    $(".fa-eye-slash").hide();
    $(".fa-eye").show();
  });
  // carousel
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  // close carousel
});