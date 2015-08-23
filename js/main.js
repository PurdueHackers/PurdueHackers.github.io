$('#nav-brand').click(function() {
  $('html, body').animate({
    scrollTop: $(".about").offset().top
  }, 700);
  return false;
});
$("#nav-event").click(function() {
  $('html, body').animate({
    scrollTop: $(".events").offset().top
  }, 700);
  return false;
});
$("#nav-faq").click(function() {
  $('html, body').animate({
    scrollTop: $(".faq").offset().top
  }, 700);
  return false;
});
$("#nav-sponsors").click(function() {
  $('html, body').animate({
    scrollTop: $(".sponsors").offset().top
  }, 700);
  return false;
});