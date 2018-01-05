'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const routes = require('./routes');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/questions', routes);

// var jsonCheck = function(req, res, next) {

//     if(req.body.type) {
//         //console.log(req.body);
//         //req.message = 'Hello test';
//         console.log(`Req body contains ${req.body.type}`);    
//     } else {
//         console.log('No req body');
//     }
//     next();
// }

//app.use(jsonCheck);

// app.use('/test/:id', (res, req, next) => {
//     console.log(`Testing ${req.params.id} ${req.message}`);
//     next();
// });

// app.get('/', (req, res) => {
//     res.json({ 'message': 'Hello world!' });
// });

app.use((req, res, next) => {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});