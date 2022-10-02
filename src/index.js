const express = require('express');
const app = express();
const routerApi = require('../router/index');
const {logErrors,errorHandler,boomErrorHandler,ormErrorHandler} = require('./../middleware/error.handler');
const path = require('path')
const cors = require('cors');
require('./../utils/auth/index')

app.use(express.json());
app.use(cors());

app.use(express.static(path.join('views')));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req,res)=>{
    try {
     res.render('index')        
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(3000, ()=>{
    console.log('servidor en linea')
})




