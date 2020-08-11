const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// Looks for environment variable called PORT
// Gets PORT # from Haroku
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
