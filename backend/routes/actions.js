const router = require('express').Router();
const Action = require('../models/Action');
const auth = require('../middleware/auth');

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

module.exports = router;