
const express  = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');


//  view engine
app.set('view engine' , 'ejs');
app.set('views',__dirname+'/views');

// ejs layouts
app.set('layout' , "layouts/layout");
app.use(expressLayouts);

//init routes 
app.use('/' , require('./routes/index'));

//static file
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);