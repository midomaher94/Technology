const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.post('/order', (req, res) => {
  const order = req.body;
  if (!order || !order.customer || !order.items || order.items.length === 0) {
    return res.status(400).json({ message: 'طلب غير صحيح' });
  }
  orders.push(order);
  console.log('تم استلام طلب جديد:', order);
  res.json({ message: 'تم استلام طلبك بنجاح! شكراً لتعاملك معنا.' });    
});

app.get('/orders', (req, res) => {
  res.json(orders);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


console.log('Server is running on port', PORT);