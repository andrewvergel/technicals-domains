import express from 'express';
const router = express.Router();

router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

export default router;