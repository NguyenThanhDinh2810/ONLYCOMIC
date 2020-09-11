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
    $(".fa-eye-slash.auth-form__login-icon").hide();
    $(".fa-eye.auth-form__login-icon").show();
    $(".fa-eye-slash.auth-form__register-icon").hide();
    $(".fa-eye.auth-form__register-icon").show();
  });
  $(".click__login").click(function () {
    $(".modal").css("display", "block");
    $(".auth-form__login").css("display", "block");
    $(".auth-form__register").css("display", "none");
    document.getElementById("nav-moblie-input-btn").checked = false;
    $(".fa-eye-slash.auth-form__register-icon").hide();
    $(".fa-eye.auth-form__register-icon").show();
    $(".fa-eye-slash.auth-form__login-icon").hide();
    $(".fa-eye.auth-form__login-icon").show();
  });
  $(".click__exit").click(function () {
    $(".modal").css("display", "none");
  });
  $(".nav-pc__mode-btn i").click(function () {
    $(".nav-pc__mode-btn i").show();
    $(this).hide();
    $("body").toggleClass("dark-scheme night");
  });
  $(".auth-form__group i").click(function () {
    $(".auth-form__group i").show();
    $(this).hide();
  });
});
