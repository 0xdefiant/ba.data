const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Web3 = require('web3');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.g.alchemy.com/v2/af5g-7TjtMgPomEDZmTciXXd_NaQz9sd'));

app.post('/api/send-text', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  res.json({ message: `Form data received: ${JSON.stringify(formData)}` });
});

app.post('/api/send-text', (req, res) => {
  const { address } = req.body;
  console.log('Received text:', text);
  res.json({ message: `Text received: ${text}` });
});

app.get('/getBalance', async (req, res) => {
  const address = req.query.address;
  const balance = await web3.eth.getBalance(address);
  res.send(`The balance for address ${address} is ${web3.utils.fromWei(balance, 'ether')} ether`);
});

app.listen(3000, () => console.log('App listening on port 3000!'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
