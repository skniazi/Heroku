const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.json({ msg: 'Server Started' });
});

app.listen(8080 || process.env.PORT, () => {
	console.log('app is running');
});
