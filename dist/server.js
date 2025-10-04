import express, {} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config();
app.get('/', (req, res) => {
    res.send('Server is running with MongoDB + TypeScript ');
});
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
mongoose
    .connect(MONGO_URI)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
    .catch((err) => {
    console.error('MongoDB connection error:', err);
});
//# sourceMappingURL=server.js.map