const express = require('express');
const router = express.Router();

const Robots = require('../models/robots');

//index route
router.get('/', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	})
});

//show route
router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		robot: Robots[req.params.id]
	})
});


//delete route
router.delete('/:id', (req, res) => {
	Robots.splice([req.params.id], 1)
	res.redirect('/robots')
});

//edit route
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		robot: Robots[req.params.id],
		id: req.params.id
	})
})

//edit
router.put('/:id/', (req, res) => {
	Robots[req.params.id] = req.body;
	res.redirect('/robots')
})

module.exports = router;