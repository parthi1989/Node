const expobj = require ("express");
const hbs = require("hbs");

var eobj= expobj();

hbs.registerPartials(__dirname + '/views/Partials');
eobj.set('view engine',"hbs")
eobj.use(expobj.static( __dirname + '/public'));
eobj.get('/', (req, res) => {
    res.send("<h1>This is home Page</h1>");
});

hbs.registerHelper('FullYear', ()=>{
    return new Date().getFullYear();
});

eobj.get('/about',(req, res) => {
    
res.render('about.hbs', {
    PageTitle : 'About',
    BodyContent : 'About Body',
    FullYear : new Date().getFullYear()
});

    // res.send({
    //     Owner:'parthi',
    //     age : 29,
    //     likes : ['friends', 'music', 'movies', 'games', 'novels'],
    // });
    //console.log(JSON.stringify(res));
});

eobj.listen(4000,()=>{
    console.log("started and listening port 4000");
});