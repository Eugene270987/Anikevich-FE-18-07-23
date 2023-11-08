import express, {response} from 'express';
import cors from 'cors';
import { categories } from './data/categories.js';
import { products } from './data/products';

const app = express();

app.use(express.json());//Чтобы могли получить в запросе body
app.use(cors());//Чтобы фронтенд и бекенд могли общаться

const port = 5500;

app.listen(port, () => {
    console.log('Server started!!!');
});

app.get('/api/categories', (request, response) => {
    response.send(categories);
});

app.get('/api/products/:categoryId', (request, response) => {
    const { categoryId } = request.params;
    const responseProducts = products[categoryId] || [];
    response.send(responseProducts);
});

app.post('/api/order', (request, response) => {
    const order = request.body;
    console.log(order);
    response.send('OK');
});