const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const handleBars = require('express-handlebars');
const cursoRotas = require('./src/router/cursoRotas');
const colaboradorRotas = require('./src/router/colaboradorRotas');
const setorRotas = require('./src/router/setorRotas');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('./src/config/auth')(passport);

//sessão
    app.use(session({
        secret: "minhachave",
        resave: true,
        saveUninitialized: true
    }))

    //console.log(global.colaboradorId)
    app.use(passport.initialize())
    app.use(passport.session())
    app.use(flash());

    app.use((req,res,next)=>{
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg = req.flash("error_msg");
        res.locals.error = req.flash("error");
        res.locals.user = req.user || null;
        next();
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', handleBars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(cursoRotas);
app.use(colaboradorRotas);
app.use(setorRotas);

app.listen(3000);