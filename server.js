const express = require('express');
const app = express();

const robotsController = require('./controllers/robots');

app.use('/robots', robotsController);

app.listen(3000, () => {
	console.log('listening at 3000');
})



