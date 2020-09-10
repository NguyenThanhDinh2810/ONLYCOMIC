window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
$(document).ready(function () {
  $(".click__register").click(function () {
    $(".modal").css("display", "block");
    $(".auth-form__register").css("display", "block");
    $(".auth-form__login").css("display", "none");
    $("input:checked").change();
    document.getElementById("nav-moblie-input-btn").checked = false;
  });
  $(".click__login").click(function () {
    $(".modal").css("display", "block");
    $(".auth-form__login").css("display", "block");
    $(".auth-form__register").css("display", "none");
    document.getElementById("nav-moblie-input-btn").checked = false;
  });
  $(".click__exit").click(function () {
    $(".modal").css("display", "none");
  });
  $(".nav-pc__mode-btn i").click(function () {
    $(".nav-pc__mode-btn i").show();
    $(this).hide();
    $("body").toggleClass("dark-scheme night");
  });
});
