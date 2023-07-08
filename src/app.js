// const express = require('express');
import express from 'express';
import employeesRoutes from './routes/employees.routes.js'; // se puede llamar con el nombre que sea por que tiene un export default
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

export default app;