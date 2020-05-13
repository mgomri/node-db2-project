const express = require('express');
const server = express();
const carRouter = require('./carRouter');
server.use(express.json());

const PORT = process.env.PORT || 8000;

server.get('/', (req, res) =>{
    res.send('Welcome friend to node-db2-project');
});

server.use('/cars', carRouter);

server.listen(PORT, () => {
    console.log(`API up and running on port ${PORT}`)
});