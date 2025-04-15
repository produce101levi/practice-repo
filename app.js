const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

// Set the 'views' directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, videos, etc.)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'apiary.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})