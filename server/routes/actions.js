import express from 'express';
import Action from '../models/Action.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get last 20 actions
router.get('/', auth, async (req, res) => {
    try {
        const actions = await Action.find()
            .populate('userId', 'username')
            .populate('taskId', 'title')
            .sort('-timestamp')
            .limit(20);
        res.json(actions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;