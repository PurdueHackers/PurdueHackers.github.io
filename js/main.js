// NAVBAR STUFF
var navTop = $('#navbar').offset().top;
var aboutTop = $('#about').offset().top;
var eventsTop = $('#events').offset().top;
var faqTop = $('#faq').offset().top;
var sponsorTop = $('#sponsor').offset().top;
$(window).resize(function() {
  navTop = $('#navbar').offset().top;
  aboutTop = $('#about').offset().top;
  eventsTop = $('#events').offset().top;
  faqTop = $('#faq').offset().top;
  sponsorTop = $('#sponsor').offset().top;
});
$(window).scroll(function() {
  if($(window).scrollTop() > navTop) {
    $('#navbar').addClass('navbar-fixed-top');
    $('#about').css('margin-top', '160px');
  } else {
    $('#navbar').removeClass('navbar-fixed-top');
    $('#about').css('margin-top', '100px');
  }
  if($(window).scrollTop() > sponsorTop - 100) {
    $('#sponsorLink').addClass('active');
    $('#faqLink').removeClass('active');
  } else if($(window).scrollTop() > faqTop - 100) {
    $('#faqLink').addClass('active');
    $('#eventsLink').removeClass('active');
    $('#sponsorLink').removeClass('active');
  } else if($(window).scrollTop() > eventsTop - 100) {
    $('#eventsLink').addClass('active');
    $('#aboutLink').removeClass('active');
    $('#faqLink').removeClass('active');
  } else if($(window).scrollTop() > navTop - 100) {
    $('#aboutLink').addClass('active');
    $('#eventsLink').removeClass('active');
  } else {
    $('#aboutLink').removeClass('active');
  }
});
$('.navbar-brand').click(function() {
  $('html, body').animate({
    scrollTop: $("#splash").offset().top
  }, 1000);
});
$("#aboutLink").click(function() {
  $('html, body').animate({
    scrollTop: $("#about").offset().top - 100
  }, 1000);
});
$("#eventsLink").click(function() {
  $('html, body').animate({
    scrollTop: $("#events").offset().top - 100
  }, 1000);
});
$("#faqLink").click(function() {
  $('html, body').animate({
    scrollTop: $("#faq").offset().top - 100
  }, 1000);
});
$("#sponsorLink").click(function() {
  $('html, body').animate({
    scrollTop: $("#sponsor").offset().top - 100
  }, 1000);
});

// $('#calendar').fullCalendar({
//   googleCalendarApiKey: 'AIzaSyDo1J-Z9UIaNYh2YPG143T33LiP3ci0itk',
//   events: {
//       googleCalendarId: 't27bsfuiaaeh82n0upu2hkepn4@group.calendar.google.com'
//   }
// });

var url = 'https://www.googleapis.com/calendar/v3/calendars/t27bsfuiaaeh82n0upu2hkepn4@group.calendar.google.com/events'
$.getJSON( "url", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});


var Model = {

};

var Controller = {

};

var View = {
  width: window.innerWidth,
  height: window.innerHeight,
  canvas: null,
  ctx: null,
  init: function() {
    View.canvas = document.getElementById("masthead-bg");
    View.ctx = View.canvas.getContext("2d");
    View.canvas.width = this.width;
    View.canvas.height = this.height;
  },
  clear: function() {
    View.ctx.clearRect(0, 0, this.width, this.height);
  },
  render: function() {

  }
};
