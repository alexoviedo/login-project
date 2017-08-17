express = require('express'),
handlebars = require('express-handlebars'),
bodyParser = require('body-parser'),
expressValidator = require('express-validator'),
session = require('express-session'),
usrInfo = require('./users.js'),
app = express();
let userName, password;


app.use(bodyParser.json()),
app.use(bodyParser.urlencoded({
extended: !1
})),

app.use(expressValidator()),
app.use(session({
secret: 'anything',
resave: !1,
saveUninitialized: !0
})),


app.engine('handlebars', handlebars())
app.set('views', './views')
app.set('view engine', 'handlebars')
app.get('/', (a, b)=>{
  a.session && a.session.authenticated ?
  b.send('Hello ' + userName) :
  b.redirect('/login/')
}),

app.post('/', (a, b)=> {
  b.redirect('/login/')
}),

app.get('/login/', (a, b)=> {
  b.render('login')
}),

app.post('/login/', (a, b)=> {
  userName = a.body.userName,
  password = a.body.password,
  usrInfo.authenticate(a, userName, password) ?
  b.redirect('/') :
  b.render('home')
}),

app.listen(3e3, ()=> {
  console.log('HelloOoOo nurse!')
});
