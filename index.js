'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    req.message = 'Hello test';
    console.log(`Middleware type is ${req.query.type}`);
    next();
});

app.use('/test/:id', (res, req, next) => {
    console.log(`Testing ${req.params.id} ${req.message}`);
    next();
});

app.get('/', (req, res) => {
    res.json({ 'message': 'Hello world!' });
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});