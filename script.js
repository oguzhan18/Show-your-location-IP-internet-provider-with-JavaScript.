$.getJSON('https://ipinfo.io', function (data) {
  var sistem = '';
  console.log('verileri görmek için geliştirici konsolunu açın', data); 
  for (prop in data) {
    sistem += prop + ': ' + data[prop] + '\n';
  }
  $('#sistem').text(sistem);
});