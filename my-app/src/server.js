const express = require('express');
const productRoutes = require('./routes/product2');
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
