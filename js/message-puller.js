$(document).ready(function () {

  var spreadsheet = '0AqFLwcjqDZJzdDRHWFlIaUxnNURuMFdDM1VhOG43enc';
  var thisMonth = moment().format('MMMM');
  var thisYear = moment().format('YYYY');
  
  Tabletop.init( { key: spreadsheet,
                   callback: displayMessages,
                   simpleSheet: true } );
  
  function displayMessages(data, tabletop) {
    console.log(data);
    $.each(data, function(i, message) {
      if (message.monthofinclusion === thisMonth) {
        $('#messages').append(formatMessage(message));
      }
    });
  }
  
  // TODO: Swap this out for Backbone
  function formatMessage(message) {
    var formattedMessage;
    formattedMessage = "<h3>" + message.newstoreport + "</h3>\n";
    formattedMessage += "<p>" + message.announcements + "</p>";
    return formattedMessage;
  }
  
  $('#messages').prepend("<h2>" + thisMonth + ", " + thisYear + "</h2>");
  
});