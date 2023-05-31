const express = require('express');
const app = express();

let events = [];
let eventIndex = 0;

app.get('/poll', (req, res) => {
  if (events.length > eventIndex) {
    res.json(events[eventIndex++]);
  } else {
    setTimeout(() => {
      res.json(events[eventIndex++]);
    }, 10000);  // wait for 10 seconds before responding
  }
});

app.post('/event', (req, res) => {
  events.push(req.body);
  res.json({ status: 'ok' });
});

app.listen(3001, () => console.log('Server is running on http://localhost:3001'));
