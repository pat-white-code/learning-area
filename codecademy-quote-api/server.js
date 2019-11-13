const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, ()=>{
  console.log(`Server listening on ${PORT}`);
})

const quotesRouter = express.Router();
app.use('/api/quotes', quotesRouter);

quotesRouter.get('/random', (req, res, next)=>{
  let randomQuote = getRandomElement(quotes);
  res.status(200).send({quote: randomQuote});
})

app.get('/api/quotes', (req, res, next) => {
    res.status(200).send({quote: quotes});
  });