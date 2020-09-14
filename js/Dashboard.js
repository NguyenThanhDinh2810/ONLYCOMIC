$(document).ready(function () {
  $("#link-general-info").click(function () {
    $(".right.general-info").css("display", "block");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "none");
  });
  $("#link-account-info").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "block");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "none");
  });
  $("#link-followed-comic").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "block");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "none");
  });
  $("#link-uploaded-comic").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "block");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "none");
  });
  $("#link-comments").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "block");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "none");
  });
  $("#link-notification").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "block");
    $(".right.change-password").css("display", "none");
  });
  $("#link-change-password").click(function () {
    $(".right.general-info").css("display", "none");
    $(".right.account-info").css("display", "none");
    $(".right.followed-comic").css("display", "none");
    $(".right.uploaded-comic").css("display", "none");
    $(".right.comments").css("display", "none");
    $(".right.notification").css("display", "none");
    $(".right.change-password").css("display", "block");
  });
});
