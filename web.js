var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html", function(err, data){
    if (err) throw err;
    console.log(data);
  });

  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
