'use strict'
const express = require('express');
const router = express.Router();

// GET /questions
// Read the questions
router.get('/', (req, res) => {
    var o = obj.prop;
    res.json({ response: "GET" })
});

// POST /questions
// Create a question
router.post('/', (req, res) => {
    res.json({ 
        request: "POST",
        status: res.statusCode,
        body: req.body
    })
});

// GET /questions/:id
// Read a specific question
router.get('/:qid', (req, res) => {
    res.json({ response: `GET ${ req.params.id }` })
});

// GET /questions/:id/answers
// Read the answers for a specific question
router.get('/:qid/answers', (req, res) => {
    res.json({ response: `GET answers for ${ req.params.id }` })
});

// POST /questions/:id/answers
// Create an answer for a specific question
router.post('/:qid/answers', (req, res) => {
    res.json({ 
        request: "POST",
        status: res.statusCode,
        qid: req.params.qid,
        answer: req.body.answer
    })
});

// PUT /questions/:id/answers
// Edit a specific answer
router.put('/:qid/answers/:aid', (req, res) => {
    res.json({ 
        request: "PUT",
        status: res.statusCode,
        qid: req.params.qid,
        aid: req.params.aid,
        answer: req.body.answer
    })
});

// DELETE /questions/:id/answers/:aid
// Delete a specific answer
router.delete('/:qid/answers/:aid', (req, res) => {
    res.json({ 
        request: "DELETE",
        status: res.statusCode,
        qid: req.params.qid,
        aid: req.params.aid,
    })
});

// POST /questions/:id/answers/:aid/vote-up
// POST /questions/:id/answers/:aid/vote-down
// Vote an answer up or down
router.post('/:qid/answers/:aid/vote-:dir', function(req, res, next) {
    if(req.params.dir.search(/^(up|down)$/) === -1) {
        var err = new Error('Not found');
        err.status = 404;
        next(err);
    } else {
        next();
    }
}, function(req, res) {
    res.json({ 
        request: "POST",
        message: req.params.dir,
        status: res.statusCode,
        qid: req.params.qid,
        aid: req.params.aid
    })
});


module.exports = router;