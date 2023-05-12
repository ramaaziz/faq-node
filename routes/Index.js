import express from 'express';
import articles from './KnowledgeRoute.js';

const router = express.Router();

router.use('/articles', articles);

export default router;