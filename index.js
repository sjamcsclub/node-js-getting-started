var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// ACME challenge (sjamcs.club)
app.get('/.well-known/acme-challenge/GWLE-kNm2bQ0f43Q-jwWwGlxDumDEzWjVZ-QdXjDJik', function(request, response) {
  response.send('GWLE-kNm2bQ0f43Q-jwWwGlxDumDEzWjVZ-QdXjDJik.tRZzhjhg1nDNW1U_Ts6YvwgYDgbT27gxEsQ-V1JPB8k');
});

// ACME challenge (www.sjamcs.club)
app.get('/.well-known/acme-challenge/d78T6SA8OQSq7Nf8nXbNTDpmd741ehSDRmjWs4V4hxM', function(request, response) {
  response.send('d78T6SA8OQSq7Nf8nXbNTDpmd741ehSDRmjWs4V4hxM.tRZzhjhg1nDNW1U_Ts6YvwgYDgbT27gxEsQ-V1JPB8k');
});

// New www challenge
app.get('/.well-known/acme-challenge/XCQYJAmB9KlFyuKUvCFu-bAvGKrRsq5Sfj4EziEEnwQ', function(request, response) {
  response.send('XCQYJAmB9KlFyuKUvCFu-bAvGKrRsq5Sfj4EziEEnwQ.tRZzhjhg1nDNW1U_Ts6YvwgYDgbT27gxEsQ-V1JPB8k');
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
