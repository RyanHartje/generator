// dependencies 
var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 8000,
    router = express.Router();

// setup our view folder, 
//   and set jade to the render engine
app.set('views', __dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

// Have our router let us know when something gets hit
router.use(function(req,res,next){
      console.log('Event triggered');
          next();
});

router.route('/')
  .get(function(req,res){
    return res.json({message:'hello'});
  });

app.get('/',function(req,res){
  user = {name: 'ryan'};
  return res.render('index', user=user);
});

app.post('/save',function(req,res){
  
});


app.listen(port);
console.log("Listening on " + port);
